---
title: "How Modern Recommendation Systems Recommend"
pubDate: 2026-06-26
description: "Explaining how the recommendation systems we interact with everyday know exactly what it takes to keep you on their platform."
category: "Guide"
tags:
  - ML
  - Embeddings
  - Two Tower Models
  - Vector Search
  - Ranking
---

When you open your TikTok for-you page, Instagram Reels, or Reddit Homepage have you ever wondered how TikTok/Instagram/Reddit knows what will keep you scrolling and scrolling?

All modern recommendation systems rely on a representation of data called embeddings. Embeddings are a mathematical way of representing something so that we can teach a machine learning model that two things are related (e.g. User Sally likes dog videos).

## What are Embeddings?

An embedding is just a long list of numbers — often 768, 1536, or more. Those numbers are floating point numbers.

Because floats can represent fractional values (like 0.12345), they allow the model to position concepts with extreme nuance. This is what lets an AI understand that "king" and "queen" are close in meaning, but distinct in gender, by placing them just a fraction of a distance apart in the vector space.

```text
Example FP32 Embedding = [0.34219074,-0.81726354,0.09182736,0.56473829,-0.12345678,0.98765432,-0.45612378,0.23456789,-0.78901234,0.65432109, ...]
```

You may ask, “Who determines the # of dimensions? The size of the floating pointers?”. And the answer would be the engineer, during a process called [hyperparameter tuning](https://en.wikipedia.org/wiki/Hyperparameter_optimization).

| What you are tuning | What it controls | Analogy | If you turn it up too high... | If you turn it down too low... |
| :---- | :---- | :---- | :---- | :---- |
| **Dimensions (# of FP in Embedding)** | **Semantic Capacity** (How many concepts it can understand) | **Field of View** (Wide-angle vs. Telephoto lens) | The camera looks at too many random background details (Overfitting). | The camera is so zoomed out it groups a laptop and a book into the same blob (Underfitting). |
| **Precision (size of FP)** | **Granular Resolution** (How clearly it sees fine details) | **Megapixel Count** (4K resolution vs. 480p) | Files are too massive to open and save, and your computer runs out of memory. | The image becomes pixelated; you can see the main objects, but fine text becomes unreadable. |

A common misconception is that because we have more data we need higher precision in order to differentiate between things. In practice this is the opposite because higher precision floating point numbers are expensive to store and compute with. This becomes a massive bottleneck and will swallow your RAM, spike server costs, and slow down your vector search algorithms.

Instead, the industry relies on a process called [**Quantization**](https://en.wikipedia.org/wiki/Large_language_model#Quantization)—intentionally lowering the precision of the floats as data scales. Quantization effectively minimizes the floating point footprint while retaining *most* of the precision (depending on what precision you went from and to).

Here is how different precision levels stack up:

| Precision Format | Bits per Number | Memory per 1,000-dim Vector | Search Speed | Accuracy Retained |
| :---- | :---- | :---- | :---- | :---- |
| **FP32** (Standard) | 32 bits | 4.0 KB | Baseline | 100% |
| **FP16 / BF16** | 16 bits | 2.0 KB | Fast | ~99.9% |
| **INT8** (Quantized) | 8 bits | 1.0 KB | Very Fast | ~98% |

<aside class="section-summary">
  <p><span class="summary-label">In Summary</span> Embeddings represent things.</p>
</aside>

## Training: Creation of Embeddings

One of the purposes of creating this representation is so that we can run a common foundational deep learning architecture called the [two-tower model](https://www.hopsworks.ai/dictionary/two-tower-embedding-model). This is a framework that employs two neural networks, or towers, to map two different types of entities into a shared embedding or vector space.

Training goes through 3 phases:

1. Both models produce a vector.
   - User A’s features go into the User Tower $\rightarrow$ Outputs User Vector $u$.
   - Video X’s features go into the Video Tower $\rightarrow$ Outputs Video Vector $v$.
2. The system calculates the mathematical dot product (or cosine similarity) of the two vectors:
   - $$\text{Similarity Score} = u \cdot v = \sum_{i=1}^{d} u_i v_i$$
   - The dot product results in a single number. If the vectors point in the same direction in math space, the score is high. If they point in opposite directions, the score is low or negative.
3. The model looks at what actually happened in reality and compares it to the dot product score using a loss function (often called Contrastive Loss or InfoNCE):
   - If it was a Positive Sample (the user liked the video), but the dot product score was low, the system triggers a high penalty.
   - If it was a Negative Sample (the user skipped it), but the dot product score was high, the system triggers a high penalty.

That function then tells BOTH models to tune their weights to account for any penalties incurred in step 3.

![Backpropagation updates both towers](/images/blog/recommendation-backpropagation.svg)

You run this training through a couple billion rows of training data and you get two models that are tuned to relate users to videos. After training, you save these two models’ parameters and prep it to be used in production.

![Two tower training flow](/images/blog/recommendation-training.png)

## Retrieval: Getting Recommendations

Once trained, we use these models to serve real-time recommendations. Because user data (likes, shares) changes constantly while video data is relatively static, we run the video tower offline. We pre-compute the video embeddings, store them in a vector database, and use Approximate Nearest Neighbor (ANN) search to match them against live user profiles. We use the user tower to dynamically compute embeddings whenever a user logs on.

![Two tower retrieval flow](/images/blog/recommendation-retrieval.png)

### Phases:

Retrieval doesn’t just rely on vector search to serve recommendations. Vector search is extremely quick and useful to drastically decrease the number of potential good recommendations (50M → 5,000). However, it is not great at choosing the absolute best top 10/20 candidates.

So modern tech companies have built a sort of funnel (Multi Stage Cascade / Retrieve and Rank). This is where at every step leading up until the user actually sees the content we are refining the results.

1. Candidate Generation (Retrieval) → driven by vector search
   - For a given user we produce an embedding using the User Tower and perform an ANN search on our vector database to produce the topK candidates (e.g. 5000).
2. Ranking
   - After producing ~5000 potential candidates we apply something called a light ranker.
   - Light Ranking: A light-weight ML model that shaves off the candidates that are the least likely to be chosen.
   - Heavy Ranking: Extremely precise and expensive ML model that uses all sorts of other signals to further shave off candidates.
   - Re-ranking: The reason why this is called business logic is because this is where you define how diverse you want your recommendations to be, in what order/sequence, etc.

The light/heavy ranking stage and how you model your towers are the secret behind why some algorithms are better than others. Heavy rankers rely heavily on how much they know about you and how quickly they can adapt to what you’re doing in any given doom-scrolling session.

Also the way that we optimize the embedding space and the retrieval/upload pattern is also heavily researched and optimized. Especially considering these companies are handling millions/billions of videos and users with ~10k~100k queries per second.

![Recommendation ranking funnel](/images/blog/recommendation-ranking-funnel.svg)

<aside class="section-summary">
  <p><span class="summary-label">Summary</span> Embeddings are used to train two ML models to relate two things together. Once trained we use one of those models to create a searchable embedding space and the other to produce embeddings on-demand to search that embedding space.</p>
</aside>
