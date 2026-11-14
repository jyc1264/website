export interface CareerAchievement {
  text: string;
  details?: string[];
  reference?: { href: string; label: string };
}

export interface CareerMilestone {
  id: string;
  shortCompany: string;
  subject: string;
  period: string;
  company: string;
  role: string;
  achievements: CareerAchievement[];
  focus?: string[];
}

// Newest first: this order drives the tabs, fallback content, and print view.
export const milestones: CareerMilestone[] = [
  {
    id: "machine-learning",
    shortCompany: "Reddit",
    subject: "Machine Learning Infra",
    period: "Apr 2025 - Present",
    company: "Reddit, Inc.",
    role: "Senior Machine Learning Engineer",
    achievements: [
      {
        text: "Deployed and operated vector embedding retrieval infrastructure for a two-tower recommendation model powering Reddit Feeds, improving new-user activation and retention (~1M+ DAU). System handled ~10k qps with <50ms latency and 99.9% availability.",
      },
      {
        text: "Operated and scaled distributed data infrastructure across Kubernetes-orchestrated services handling 1M+ DAU traffic. Automated life-cycle management via Kubernetes controllers, Airflow (data ingestion), Kafka (re-playability), Flink, and Go Consumers.",
      },
      {
        text: "Platformized vector retrieval at Reddit, abstracting scaling and infrastructural complexity for internal engineering customer teams.",
      },
      {
        text: "Improved availability of Reddit Search from 90% to 99.99%. Utilized Gradient2 concurrency limiting algorithm, client-side bulk fan-outs, and infrastructure configuration optimizations. Published testing library to fine-tune load-shedding configurations across Reddit.",
      },
    ],
    focus: ["Vector Retrieval", "Distributed Data Infrastructure", "Search Reliability"],
  },
  {
    id: "payments",
    shortCompany: "Reddit",
    subject: "Payments",
    period: "Aug 2022 - Apr 2025",
    company: "Reddit, Inc.",
    role: "Software Engineer III",
    achievements: [
      {
        text: "Created and managed payout delivery system that paid out our partners and affiliated creators on Reddit, seeing over $3 million in revenue in 2024.",
      },
      {
        text: "Expanded supported purchasable currencies Reddit-wide to over 65 currencies causing a 30% lift in purchases.",
      },
      {
        text: "Lead architect in building out our KYC and payout onboarding flows for the Reddit Contributor Program",
        reference: { href: "https://www.reddit.com/earn", label: "www.reddit.com/earn" },
        details: ["Scaled the flow to support up to 60 eligible payout countries in 50+ different currencies."],
      },
      {
        text: "Managed and expanded a payments fraud detection service in charge of catching bot, fraud, and money-laundering activity. Created alerts and dashboards for on-call engineering resources.",
      },
      {
        text: "Co-founded an organization under Reddit X, establishing partnerships with major entities like Fifa, NFL, and F1, leading to significant revenue growth.",
        details: [
          "Partnered with major events accruing millions of transactions.",
          "Overhauled distribution testing framework, decreasing test build times by over 40%.",
        ],
      },
    ],
    focus: ["Payouts", "KYC & Onboarding", "Fraud Detection"],
  },
  {
    id: "niantic",
    shortCompany: "Niantic",
    subject: "Games",
    period: "Aug 2021 - Aug 2022",
    company: "Niantic, Inc.",
    role: "Software Engineer",
    achievements: [
      { text: "Rebuilt Pokemon Go quest and rewards flows, reducing high-traffic quest page load time by 25%." },
      { text: "Shipped guest-account onboarding that improved post-launch player retention by 30%." },
      { text: "Partnered with AR/R&D teams on Pokestop 3D scan uploads to support AR mapping platform development." },
    ],
    focus: ["GCS", "Unity Performance Tuning", "GeoSpatial Modeling"],
  },
];
