// Portfolio content — sourced from resume, edited for the site
// Palette + tone: editorial, minimalist, data-engineer-forward.

export const personalInfo = {
  name: "Om Patel",
  first: "Om",
  last: "Patel",
  title: "Data Engineer",
  location: "Ontario, Canada",
  years: "5+",
  eyebrow: "Data Engineer · Ontario, Canada",
  headline: "I build data pipelines that scale from GBs to TBs.",
  subhead:
    "5+ years shipping resilient ETL/ELT on GCP and Azure — real-time streaming, CDC with Kafka & Datastream, Airflow orchestration, dimensional modeling in BigQuery. Zero-downtime migrations and pipelines that page you less at 3 AM.",
  email: "patelomr07@gmail.com",
  phone: "+1 (647) 914-2834",
  linkedin: "https://www.linkedin.com/in/om-patel",
  github: "https://github.com/",
  resumeUrl: "https://customer-assets.emergentagent.com/job_8546dcf0-ad0a-490a-b509-2723603e9309/artifacts/vzua5wbj_Patel%2C%20Om%20Resume.pdf",
};

export const principles = [
  {
    title: "Pipelines that don't wake me at 3 AM.",
    body:
      "Health checks, idempotent retries, actionable alerts. On-call should be boring, not heroic — SLOs are a design input, not an afterthought.",
  },
  {
    title: "Migrate boldly, break nothing.",
    body:
      "Zero-downtime cutovers are rehearsed plays, not leaps of faith. Dual-write, shadow-read, validate at row level, then switch traffic when the numbers agree.",
  },
  {
    title: "Cost is a feature.",
    body:
      "Every DAG, query and connector is measured against dollars saved, not just rows moved. ~15–20% infra reduction from routing decisions and query tuning that pay for themselves.",
  },
  {
    title: "Data is a product.",
    body:
      "Lineage, contracts, and quality checks turn 'the pipeline broke' into 'the SLA held.' Trust is what makes analytics-ready datasets actually get used.",
  },
];

export const experiences = [
  {
    id: 1,
    company: "EllisDon",
    role: "Data Engineer",
    location: "Ontario, Canada",
    duration: "Nov 2022 — Present",
    year: "2022 – Now",
    stack: ["GCP", "Azure", "BigQuery", "Airflow", "Kafka", "Datastream", "dbt", "Microsoft Fabric", "Palantir Foundry"],
    bullets: [
      "Contributed to multi-cloud ETL/ELT pipelines across GCP and Azure, processing GBs–TBs of structured and semi-structured data daily into BigQuery and Synapse.",
      "Spearheaded migration from GKE Airflow to Cloud Composer, redeploying ETL DAGs ingesting MongoDB and REST APIs with CI/CD — cut DevOps dependency by ~60%.",
      "Tuned Airflow DAG execution and BigQuery performance via selective Dataproc routing, reducing infrastructure costs by ~15–20%.",
      "Maintained self-managed Kafka on Terraform-provisioned VMs with Dockerized UI and 100+ Debezium CDC connectors.",
      "Contributed to zero-downtime migration from self-managed Kafka to Google Datastream, improving reliability and lowering operational overhead.",
      "Built ELT pipelines in Microsoft Fabric ingesting Dynamics 365 with automated retry + alerting — cut manual overhead by ~40%.",
      "Designed BigQuery models with SCD1 for static lookups and SCD2 for high-frequency Kafka and financial-statement data to preserve historical accuracy.",
      "Partnered with Data Architects, Product, Data Science and DevOps in Agile ceremonies to deliver on the data roadmap.",
    ],
  },
  {
    id: 2,
    company: "Digibee",
    role: "Web Developer",
    location: "Remote",
    duration: "Jul 2020 — Jan 2021",
    year: "2020 – 2021",
    stack: ["Talend", "Python", "React", "MySQL", "Docker", "GitLab CI"],
    bullets: [
      "Built Talend ETL workflows to ingest and cleanse 10+ CSV sources into HDFS tables with scheduled jobs.",
      "Designed and scheduled 7+ Python cron jobs for data extraction and transformation workflows.",
      "Built reusable React components backed by Python REST APIs and MySQL, enabling seamless read/write operations.",
      "Containerized apps with Docker + GitLab CI/CD, reducing release cycle time by ~30%.",
      "Participated in code reviews, PR approvals, and feature planning to keep delivery aligned and quality high.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Kafka → Datastream zero-downtime migration",
    caption: "100+ Debezium CDC connectors, retired without a single lost event.",
    body:
      "Replaced a self-managed Kafka cluster (Terraform-provisioned VMs, Dockerized UI, 100+ Debezium connectors) with Google Datastream. Dual-wrote, validated row parity across systems, then cut traffic over during a live business day.",
    tech: ["Kafka", "Debezium", "GCP Datastream", "Terraform", "Docker"],
    metric: "0 s downtime",
    tilt: -2.5,
  },
  {
    id: 2,
    title: "GKE Airflow → Cloud Composer",
    caption: "Redeployed every DAG behind CI/CD, cut DevOps toil ~60%.",
    body:
      "Ported ingestion DAGs (MongoDB + REST APIs) from GKE-hosted Airflow to Cloud Composer, rebuilt them behind CI/CD with reusable operators, and gave the team self-service deploys.",
    tech: ["Airflow", "Cloud Composer", "GCP", "CI/CD", "Python"],
    metric: "~60% less DevOps",
    tilt: 2.0,
  },
  {
    id: 3,
    title: "Microsoft Fabric ELT for Dynamics 365",
    caption: "Retry-on-failure + alerting cut manual overhead ~40%.",
    body:
      "Built ELT pipelines in Microsoft Fabric that ingest Dynamics 365 data, with automated retry, exception routing and Teams alerts — freeing the analytics team from babysitting jobs.",
    tech: ["Microsoft Fabric", "Azure", "Dynamics 365", "Synapse"],
    metric: "~40% manual work removed",
    tilt: -1.5,
  },
  {
    id: 4,
    title: "BigQuery SCD1 / SCD2 dimensional modeling",
    caption: "Historical accuracy for Kafka and financial-statement data.",
    body:
      "Designed a warehouse layer in BigQuery with SCD1 for static lookups and SCD2 for high-frequency Kafka and finance data, preserving as-of-date truth for reporting and audit.",
    tech: ["BigQuery", "dbt", "SCD1 / SCD2", "Kafka"],
    metric: "Auditable history",
    tilt: 2.5,
  },
  {
    id: 5,
    title: "PySpark ETL on Palantir Foundry",
    caption: "Automated invoice processing, ~50–60% manual effort removed.",
    body:
      "Wrote PySpark ETL pipelines in Palantir Foundry that ingest, cleanse and reconcile invoice data — replacing manual spreadsheet reconciliation for finance stakeholders.",
    tech: ["PySpark", "Palantir Foundry", "ETL"],
    metric: "~50–60% effort saved",
    tilt: -2.0,
  },
];

export const skills = [
  {
    label: "Programming",
    items: ["Python", "SQL", "Scala", "Java", "SparkSQL", "TypeScript", "Shell"],
  },
  {
    label: "Data Engineering",
    items: [
      "dbt",
      "Apache Airflow",
      "Apache Kafka",
      "Apache Spark",
      "Spark Streaming",
      "Apache Flink",
      "Hadoop",
      "HDFS",
      "Change Data Capture (CDC)",
      "Dimensional Modeling",
      "Semantic Layers",
    ],
  },
  {
    label: "Cloud & Platform",
    items: [
      "GCP",
      "Azure",
      "AWS",
      "BigQuery",
      "Cloud Composer",
      "Dataproc",
      "GKE",
      "Datastream",
      "GCS",
      "Azure Synapse",
      "ADLS Gen 2",
      "Azure Data Factory",
      "Microsoft Fabric",
      "Palantir Foundry",
      "Redshift",
      "S3",
      "Lambda",
    ],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Azure SQL",
      "Oracle",
      "IBM DB2",
      "MongoDB",
      "Redis",
      "Snowflake",
    ],
  },
  {
    label: "DevOps & Tools",
    items: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Git",
      "GitHub",
      "GitLab",
      "Azure DevOps",
      "CloudBuild",
      "ServiceNow",
      "Looker",
      "Power BI",
    ],
  },
];

export const achievements = [
  { metric: "~60%", label: "less DevOps dependency", note: "GKE Airflow → Cloud Composer migration" },
  { metric: "~15–20%", label: "infrastructure cost cut", note: "Airflow + BigQuery + Dataproc tuning" },
  { metric: "~40%", label: "manual overhead removed", note: "Microsoft Fabric ELT for Dynamics 365" },
  { metric: "~50–60%", label: "invoice work saved", note: "PySpark ETL on Palantir Foundry" },
  { metric: "~70–75%", label: "faster incident turnaround", note: "Lineage + health checks + alerting" },
  { metric: "~30%", label: "shorter release cycles", note: "Docker + GitLab CI/CD" },
];

export const certifications = [
  { name: "Azure Data Fundamentals (DP-900)", issuer: "Microsoft" },
  { name: "Palantir Certified Foundry Data Engineer — Professional", issuer: "Palantir" },
  { name: "Foundry & AIP Builder Foundations", issuer: "Palantir" },
  { name: "ChatGPT Prompt Engineering for Developers", issuer: "DeepLearning.AI" },
];

export const education = [
  {
    institution: "Sheridan College",
    degree: "Computer System Technician",
    field: "Software Engineering",
    location: "Ontario, Canada",
  },
  {
    institution: "BITS Pilani",
    degree: "Bachelor of Computer Science",
    field: "Computer Science",
    location: "India",
  },
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
