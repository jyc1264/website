---
title: "Agentic Recall Tuning: Finding What Retrieval Misses"
pubDate: 2026-11-14
description: "How an agent can investigate missed candidates, reuse signals, and keep a retrieval system learning from its failures."
category: "Guide"
tags:
  - Retrieval
  - Agents
  - Evaluation
  - Feature Engineering
---

In [the embeddings article](/blog/tech/how-modern-recommendation-systems-recommend/), we used retrieval to turn millions of items into a few thousand candidates. The ranker can only choose from the candidates we give it. If the right item never gets retrieved, a better ranker won’t fix it.

**Agentic recall tuning** gives an agent that missing-candidate problem: inspect what went wrong, propose a change, and measure whether it helped. This tuning happens outside the live request path. The agent runs experiments; the retriever still serves requests.

## What are we tuning?

Here, **Recall@K** measures the fraction of judged-relevant items that appear in our K candidates. We need relevance judgments to measure it; the system doesn’t know every item a person might like.

This differs from **ANN recall**, which measures whether approximate search recovered the exact nearest vector neighbors. Finding those neighbors more accurately doesn’t prove that the embedding represents the right interests. [Vespa’s tuning guide](https://vespa-engine.github.io/pyvespa/examples/ann-parameter-tuning-vespa-cloud.html) makes this distinction.

## What can the agent change?

| Capability | Example | What we need to verify |
| :--- | :--- | :--- |
| Reuse an existing signal | Bring session interests already used by the ranker into candidate generation | Does it recover additional relevant items? |
| Propose a new signal | Derive short-term topic affinity from recent activity | Does it add value, avoid future-data leakage, and exist at serving time? |
| Tune retrieval | Change ANN exploration or the allocation of lexical and vector candidates | Does recall improve within latency and cost limits? |

These [retrieval controls](https://docs.vespa.ai/en/learn/tutorials/rag-blueprint#tuning-the-retrieval-phase) let us explore more than the embedding model alone. Keep the final candidate budget K and eligible corpus fixed when comparing trials.

### Finding signals starts with the misses

Suppose you’ve spent the last few minutes reading about hiking, but your long-term profile still points toward running. We might test whether recent-session interests recover useful hiking content.

First, check whether that signal already exists. A feature used only after retrieval cannot bring back an absent candidate. It needs a retrieval-compatible representation, query, or candidate branch.

If it doesn’t exist, the agent can propose a transformation and test it with and without the new feature. [CAAFE](https://proceedings.neurips.cc/paper_files/paper/2023/hash/8c2df4c35cdbee764ebb9e9d0acd5197-Abstract-Conference.html) demonstrates iterative LLM-proposed features for tabular prediction; applying that pattern to retrieval is a design proposal here. Missing source data still requires collection. An agent cannot invent the observations.

## How the loop works

Automated configuration search already has precedents such as [AutoRAG-HP](https://aclanthology.org/2024.findings-emnlp.223/). I’d extend that idea into this investigation loop. The agent uses failure examples to choose its next trial: missed exact terms suggest a different experiment than stale interests.

<figure class="process-diagram" aria-labelledby="recall-loop-caption">
  <figcaption id="recall-loop-caption">From a missed candidate to a tested change</figcaption>
  <ol>
    <li><strong>Inspect misses</strong><span>Compare query groups and failure examples.</span></li>
    <li><strong>Form a hypothesis</strong><span>Reuse a signal, derive one, or change a retrieval setting.</span></li>
    <li><strong>Run a bounded trial</strong><span>Save the data, configuration, and compute budget.</span></li>
    <li><strong>Evaluate the trial</strong><span>Use validation queries to compare recall, latency, cost, and regressions.</span></li>
    <li><strong>Review and test online</strong><span>Promote promising trials to a controlled experiment.</span></li>
    <li><strong>Monitor the result</strong><span>Keep, reject, or roll back; record what happened.</span></li>
  </ol>
  <p class="process-return"><span aria-hidden="true">↻</span> New evidence starts the next investigation.</p>
</figure>

Keep a final test set outside the agent’s tuning feedback. Repeatedly optimizing against the same examples can teach the loop to win the test rather than improve retrieval. Offline gains still need controlled online measurement of downstream quality and a rollback path.

## Why keep it running?

The benefit is repeatable attention. An agent can revisit sparse queries, new users, different languages, and stale signals as traffic and content change. Keeping the experiment history also helps it avoid retrying the same failed idea.

“Continuous” can mean scheduled analysis or a run triggered by a regression. It doesn’t require constant retraining or deployment. [Monitoring feature drift](https://developers.google.com/machine-learning/crash-course/production-ml-systems/monitoring) helps identify changes worth investigating.

The feedback still needs scrutiny. [Clicks depend on what people were shown](https://research.google/pubs/estimating-position-bias-without-intrusive-interventions/); an unseen item cannot earn one. Model-generated relevance judgments also need human checks.

<aside class="section-summary">
  <p><span class="summary-label">In summary</span> The strength of this loop is turning missed candidates into testable ideas, then repeatedly checking whether those ideas still help.</p>
</aside>
