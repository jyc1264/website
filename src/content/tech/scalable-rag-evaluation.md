---
title: "Scalable RAG Evaluation Without a Golden Set"
pubDate: 2026-03-18
description: "A compact note on judging retrieval quality with lightweight probes, stratified slices, and model-assisted review."
category: "Research"
tags:
  - RAG
  - Evaluation
  - Retrieval
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.

## Retrieval slices

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Nulla quis sem at nibh elementum imperdiet.

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class RetrievalProbe:
    query: str
    expected_topic: str
    minimum_score: float

def passes_probe(score: float, probe: RetrievalProbe) -> bool:
    return score >= probe.minimum_score
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris.
