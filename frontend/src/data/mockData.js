// Portfolio data — Om Patel, Data Engineer
// Clean, minimal, no redundancy

export const personalInfo = {
  name: "Om Patel",
  title: "Data Engineer",
  location: "Ontario, Canada",
  email: "patelomr07@gmail.com",
  phone: "+1 (647) 914-2834",
  linkedin: "https://www.linkedin.com/in/om-patel",
  summary: "5+ years building production data pipelines on GCP and Azure. Real-time streaming, CDC with Kafka & Datastream, Airflow orchestration, dimensional modeling in BigQuery.",
  resumeMailto: "mailto:patelomr07@gmail.com?subject=Requesting%20Resume%20-%20Data%20Engineer%20Role&body=Hi%20Om,%0A%0AI%20was%20reviewing%20your%20portfolio%20and%20would%20love%20to%20request%20a%20copy%20of%20your%20latest%20resume.%0A%0ABest,",
};

export const experiences = [
  {
    id: 1,
    company: "EllisDon",
    role: "Data Engineer",
    duration: "Nov 2022 — Present",
    highlights: [
      "Built multi-cloud ETL/ELT pipelines across GCP and Azure, processing GBs–TBs daily into BigQuery and Synapse",
      "Migrated GKE Airflow to Cloud Composer with CI/CD, cutting DevOps dependency by ~60%",
      "Maintained self-managed Kafka with 100+ Debezium CDC connectors, then migrated to Google Datastream with zero downtime",
      "Built ELT pipelines in Microsoft Fabric for Dynamics 365, reducing manual overhead by ~40%",
    ],
    stack: ["GCP", "Azure", "BigQuery", "Airflow", "Kafka", "dbt"],
  },
  {
    id: 2,
    company: "DIGIBEE",
    role: "Data Engineering Intern",
    duration: "Jul 2020 — Jan 2021",
    highlights: [
      "Built Talend ETL workflows ingesting 10+ CSV sources into HDFS",
      "Designed Python cron jobs for automated data extraction and transformation",
      "Containerized apps with Docker + GitLab CI/CD, reducing release cycles by ~30%",
    ],
    stack: ["Talend", "Python", "Docker", "MySQL", "HDFS"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Kafka → Datastream Migration",
    description: "Zero-downtime migration of 100+ Debezium CDC connectors from self-managed Kafka to Google Datastream.",
    result: "0s downtime",
    tech: ["Kafka", "GCP Datastream", "Terraform"],
  },
  {
    id: 2,
    title: "Cloud Composer Migration",
    description: "Ported ingestion DAGs from GKE Airflow to Cloud Composer with self-service deploys.",
    result: "60% less DevOps",
    tech: ["Airflow", "Cloud Composer", "CI/CD"],
  },
  {
    id: 3,
    title: "Microsoft Fabric ELT",
    description: "ELT pipelines for Dynamics 365 with automated retry and Teams alerting.",
    result: "40% overhead cut",
    tech: ["Microsoft Fabric", "Azure", "Synapse"],
  },
];

export const skills = {
  "Languages": ["Python", "SQL", "Scala", "TypeScript", "Shell"],
  "Data Engineering": ["Airflow", "Kafka", "Spark", "dbt", "CDC", "Dimensional Modeling"],
  "Cloud": ["GCP", "Azure", "AWS", "BigQuery", "Synapse", "Datastream"],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Snowflake", "Redis"],
  "DevOps": ["Docker", "Kubernetes", "Terraform", "Git", "CI/CD"],
};

export const education = [
  {
    institution: "Sheridan College",
    degree: "Computer System Technician — Software Engineering",
  },
  {
    institution: "BITS Pilani",
    degree: "Bachelor of Computer Science",
  },
];

export const certifications = [
  "Azure Data Fundamentals (DP-900)",
  "Palantir Certified Foundry Data Engineer — Professional",
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
