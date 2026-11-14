# Agentic recall tuning article

Written for the personal site on November 14, 2026. The reference for voice was the existing embeddings/recommendation article: direct explanations, a concrete example, technical stages, a compact table, and a short closing summary. The new article is roughly 670 words including diagram labels.

The user's phrase about reusing non-existing signals is interpreted as reusing existing signals that retrieval does not currently use, alongside proposing genuinely new derived signals and identifying missing source data. No existing article was rewritten. The new piece links back to the embeddings article.

## Research and claim boundaries

| Primary source | Use in the article | Limit |
| --- | --- | --- |
| [Vespa ANN parameter tuning](https://vespa-engine.github.io/pyvespa/examples/ann-parameter-tuning-vespa-cloud.html) | Separate exact-neighbor overlap from relevant-item recall | Better ANN accuracy does not establish that the embedding captures relevance |
| [Vespa retrieval evaluation and tuning](https://docs.vespa.ai/en/learn/tutorials/rag-blueprint#tuning-the-retrieval-phase) | Candidate generation, lexical/vector retrieval, recall/latency tradeoffs, missed-query analysis | The example is not a benchmark of this proposed architecture |
| [CAAFE, NeurIPS 2023](https://proceedings.neurips.cc/paper_files/paper/2023/hash/8c2df4c35cdbee764ebb9e9d0acd5197-Abstract-Conference.html) | Iteratively propose and evaluate feature transformations | Its experiments concern tabular prediction; extending the pattern to retrieval is explicitly a proposal |
| [AutoRAG-HP, EMNLP Findings 2024](https://aclanthology.org/2024.findings-emnlp.223/) | Precedent for automated configuration search and adaptation | A bandit optimizer is not evidence of arbitrary agent-led signal discovery; no benchmark gains are transferred |
| [Google: monitoring production ML](https://developers.google.com/machine-learning/crash-course/production-ml-systems/monitoring) | Drift and serving-time changes motivate recurring analysis | Monitoring does not prove a proposed fix helps |
| [Google Research: estimating position bias](https://research.google/pubs/estimating-position-bias-without-intrusive-interventions/) | Clicks reflect exposure/presentation as well as relevance | Unseen items are not clean negative examples |

The complete inspect/propose/evaluate/review/monitor loop is presented as an engineering design. It runs outside the live retrieval request. Validation feedback is distinct from a final test set. Offline improvements require controlled online measurement, cost/latency checks, and rollback. The hiking example is hypothetical; no employer-specific system or measured performance claim is made.

## Diagram and implementation

The six-step loop is a semantic HTML figure with an ordered list, styled by `src/styles/article-diagrams.css`. It reflows into one column on phones, so diagram text stays readable rather than shrinking a raster image. Its content remains available without JavaScript and in print. The stylesheet is loaded by the article layout and uses existing theme tokens. No new package dependency was introduced.

## Local verification

- Astro check/build: seven pages, zero diagnostics.
- 183 local references and section anchors resolve.
- 37 targeted browser checks pass across light/dark at desktop, 390px and 320px, including the catalog/homepage entry, diagram reflow, outline links, keyboard table scrolling, no-JavaScript content, and print.
- Six sampled automated WCAG A/AA states report zero findings; these focused checks are not full accessibility certification.

[Recorded checks](recall-article-qa-results.json). Renders: [article](renders/recall-article-light.png), [dark](renders/recall-article-dark.png), [mobile](renders/recall-article-mobile.png), [loop diagram](renders/recall-loop-light.png).

Local preview: <http://localhost:4322/blog/tech/agentic-recall-tuning/>. The user approved publishing the article with the reviewed website on November 14, 2026.
