---
title: "Photographing Vector Spaces"
pubDate: 2026-01-09
description: "A visual framing for embedding neighborhoods, failure clusters, and the stories hidden in nearest-neighbor graphs."
category: "Research"
tags:
  - Embeddings
  - Visualization
  - Computer Vision
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.

## Neighborhoods

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tortor. Pellentesque nibh.

```ts
type Neighbor = {
  id: string;
  distance: number;
  label: string;
};

export const nearest = (items: Neighbor[]) =>
  items.toSorted((a, b) => a.distance - b.distance).slice(0, 12);
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam. In scelerisque sem at dolor.
