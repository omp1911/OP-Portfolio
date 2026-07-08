// Portfolio data — Om Patel
// Data Engineer · Analytics · DevOps

export const personalInfo = {
  name: "Om Patel",
  tagline: "Data Engineer · Analytics · DevOps",
  email: "patelomr07@gmail.com",
  phone: "+1 (647) 914-2834",
  linkedin: "https://www.linkedin.com/in/patelomr/",
  location: "Ontario, Canada",
  resumeMailto:
    "mailto:patelomr07@gmail.com?subject=Resume%20Request%20-%20Data%20Engineer&body=Hi%20Om,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20request%20a%20copy%20of%20your%20resume.%0A%0ABest%20regards,",
  bio: "I architect data platforms that transform raw chaos into actionable insights. With 5+ years across GCP, Azure, and AWS, I build pipelines that scale from GBs to TBs - handling real-time streaming, CDC, orchestration, and analytics that drive decisions.",
};

export const experiences = [
  {
    id: 1,
    company: "EllisDon",
    role: "Data Engineer",
    // duration: "Nov 2022 — Present",
    highlights: [
      "Built multi-cloud ETL/ELT pipelines across GCP and Azure, processing GBs–TBs daily into BigQuery and Synapse",
      "Migrated GKE Airflow to Cloud Composer with CI/CD, cutting DevOps dependency by ~60%",
      "Maintained self-managed Kafka with 100+ Debezium CDC connectors, then migrated to Google Datastream with zero downtime",
      "Tuned Airflow + BigQuery performance via selective Dataproc routing, cutting infra costs ~15–20%",
      "Built ELT pipelines in Microsoft Fabric for Dynamics 365, reducing manual overhead by ~40%",
      "Built data quality pipelines on Kafka + Datastream ingestion, auto-alerting on bad/stale data",
      "Designed BigQuery tables w/ SCD1 (static lookups) + SCD2 (Kafka + financial data) for historical accuracy",
    ],
    stack: [
      "GCP",
      "Azure",
      "BigQuery",
      "Airflow",
      "Kafka",
      "dbt",
      "Palantir Foundry",
      "PySpark",
      "OCR + LLM",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Data Security(RBAC/IAM)",
      "Azure DevOps"
    ],
    keyProject: {
      title: "LLM-Powered Invoice Automation",
      description:
        "Led design and delivery of a fully automated invoice processing pipeline in Palantir Foundry, combining OCR and LLM-based extraction to process 1K–2K invoices daily. Built PySpark ETL pipelines, TypeScript-driven Foundry functions, and end-to-end data lineage across 20+ datasets - reducing manual effort by ~50–60% and cutting issue turnaround time by ~70–75%.",
    },
  },
  {
    id: 2,
    company: "D-Tech Consulting",
    role: "Data Engineer (Volunteer Work)",
    // duration: "Jul 2020 — Jan 2021",
    highlights: [
      "Optimized complex JSON/XML transformations using Spark UDFs, CTEs, window functions, and robust data masking standards",
      "Automated end-to-end data workflows and pipeline orchestration leveraging Oozie, Apache NiFi, and shell scripting",
      "Engineered scalable batch and streaming pipelines using Spark (Scala/PySpark), Kafka, Hive, and HDFS for enterprise analytics",
    ],
    stack: ["Apache NiFi", "Python", "JSON/XML/PARQUET", "MySQL", "HDFS", "Hive", "CI/CD", "Shell Scripting", "Oozie"],
  },
  {
    id: 3,
    company: "DIGIBEE",
    role: "Web Developer",
    // duration: "Jul 2020 — Jan 2021",
    highlights: [
      "Built Talend ETL workflows ingesting 10+ CSV sources into HDFS",
      "Designed Python cron jobs for automated data extraction and transformation",
      "Containerized apps with Docker + GitLab CI/CD, reducing release cycles by ~30%",
      "Built reusable React components with Python REST APIs and MySQL for seamless read/write ops.",
    ],
    stack: ["Talend", "Python", "Docker", "MySQL", "HDFS", "React", "CI/CD"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Kafka → Datastream Migration",
    description:
      "Zero-downtime migration of 100+ Debezium CDC connectors from self-managed Kafka to Google Datastream.",
    result: "0s downtime",
    tech: ["Kafka", "GCP Datastream", "Terraform"],
  },
  {
    id: 2,
    title: "Cloud Composer Migration",
    description:
      "Ported ingestion DAGs from GKE Airflow to Cloud Composer with self-service deploys.",
    result: "60% less DevOps",
    tech: ["Airflow", "Cloud Composer", "CI/CD"],
  },
  {
    id: 3,
    title: "Microsoft Fabric ELT",
    description:
      "ELT pipelines for Dynamics 365 with automated retry and Teams alerting.",
    result: "40% overhead cut",
    tech: ["Microsoft Fabric", "Azure", "Synapse"],
  },
];

export const skills = {
  "Data Engineering": [
    "Airflow",
    "Kafka",
    "Spark",
    "dbt",
    "CDC",
    "Datastream",
    "ETL/ELT",
  ],
  Analytics: [
    "BigQuery",
    "Synapse",
    "Snowflake",
    "Dimensional Modeling",
    "SQL",
    "Python",
  ],
  "Cloud & DevOps": [
    "GCP",
    "Azure",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
  ],
  Security: [
    "Network Security",
    "Linux",
    "TryHackMe",
    "Security+ (in progress)",
    "Data Security"
  ],
};

export const education = [
  {
    institution: "Sheridan College",
    degree: "Computer System Technician — Software Engineering",
  },
  {
    institution: "BITS Pilani",
    degree: "Bachelor of Computer Science",
    status: "in-progress",
  },
];

export const certifications = [
  {
    name: "Data Engineering Bootcamp — DataExpert.io",
    url: "https://www.dataexpert.io/certification/ompatel1911/free-bootcamp-completion",
  },
  {
    name: "Azure Data Fundamentals (DP-900)",
    url: "https://learn.microsoft.com/en-us/users/ompatel-2226/credentials/868111304881621d?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    name: "Palantir Certified Foundry Data Engineer — Professional",
    url: "https://verify.skilljar.com/c/295hbn8v4iep",
  },
  {
    name: "Foundry & AIP Builder Foundations",
    url: "https://verify.skilljar.com/c/2hs8f2mfn26f",
  },
  {
    name: "ChatGPT Prompt Engineering for Developers — DeepLearning.AI",
    url: "https://learn.deeplearning.ai/accomplishments/ae01af79-29d3-45e3-977a-1a38b7d63d88?usp=sharing",
  },
  { name: "CompTIA Security+", url: null, status: "in-progress" },
  {
    name: "TryHackMe — Cybersecurity Learning Track",
    url: null,
    status: "in-progress",
  },
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
