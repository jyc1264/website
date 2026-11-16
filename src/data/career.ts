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
        text: "Platformized Reddit's vector retrieval behind a centralized query layer and internal SDK, orchestrating and validating queries across Milvus and SilverTorch for all vector search use cases.",
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
    role: "Senior Software Engineer",
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
      { text: "Re-designed the PokémonGo quest system to where players are able to get daily/weekly rewards." },
      { text: "Decreased high traffic quest page (50k rps) load time by 25%." },
      {
        text: "Coordinated with our research and development team to implement a new Augmented Reality feature where users are able to upload 3D scans of PokéStops. These scans are then used by our AR dev team to thinktank new feature ideas as well as hone our AR mapping platform.",
      },
      {
        text: "Advocated for the prioritization of guest accounts in PokémonGo. Handled the design and engineering efforts, causing a 30% increase in player retention post-launch.",
      },
    ],
    focus: ["GCS", "Unity Performance Tuning", "GeoSpatial Modeling"],
  },
  {
    id: "aws",
    shortCompany: "Amazon",
    subject: "AWS",
    period: "Sep 2020 - Dec 2020",
    company: "Amazon Web Services, Inc.",
    role: "Software Engineer Intern",
    achievements: [
      {
        text: "Developed a new AWS notification stream resource that allows users to receive cross-regional resource-configuration-based notifications, ensuring enterprise-level compliance and security measures.",
      },
      { text: "Built out 3 high-volume customer-facing APIs to initialize and manipulate these new notification streams." },
      { text: "Architected the backend using AWS DynamoDB, SQS, SNS, all of which were served on an ECS cluster." },
    ],
    focus: ["Notification Streams", "Customer-Facing APIs", "DynamoDB, SQS & SNS"],
  },
];
