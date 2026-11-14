export interface CareerMilestone {
  period: string;
  company: string;
  role: string;
  description: string | string[];
  focus?: string[];
}

export const milestones: CareerMilestone[] = [
  {
    period: "Apr 2025 - Present",
    company: "Reddit, Inc.",
    role: "Senior Machine Learning Engineer",
    description: [
      "Delivered Milvus-backed semantic retrieval on Reddit Feeds, improving new-user activation and retention (~1M+ DAU) while meeting strict latency and availability SLOs.",
      "Launched SEO search experiences in collaboration with 3 teams, driving an increase of ~500k DAU.",
      "Reduced ML server costs ~$1.5M/year with a distributed caching solution and improved search resilience with adaptive traffic shedding across high-QPS endpoints.",
      "Developed an automated resource cleanup controller for vector database lifecycle management saving ~$360k/year.",
    ],
    focus: ["Vector DB Infrastructure", "Embedding Retrieval Optimization"],
  },
  {
    period: "Aug 2022 - Apr 2025",
    company: "Reddit, Inc.",
    role: "Software Engineer III",
    description: [
      "Led creator payouts and reconciliation, distributing multi-million-dollar payouts across 30+ countries and 25+ currencies.",
      "Built payment webhook and verification services for Apple, Google, and Stripe notifications across purchase, refund, fraud, and reconciliation flows.",
      "Built automated E2E testing suite across Payments critical paths, catching release-blocking regressions before production launch.",
    ],
    focus: ["Blockchain", "Kubernetes", "Vendor KYC"],
  },
  {
    period: "Aug 2021 - Aug 2022",
    company: "Niantic, Inc.",
    role: "Software Engineer",
    description: [
      "Rebuilt Pokemon Go quest and rewards flows, reducing high-traffic quest page load time by 25%.",
      "Shipped guest-account onboarding that improved post-launch player retention by 30%.",
      "Partnered with AR/R&D teams on Pokestop 3D scan uploads to support AR mapping platform development.",
    ],
    focus: ["GCS", "Unity Performance Tuning", "GeoSpatial Modeling"],
  },
];
