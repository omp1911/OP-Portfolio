// Mock data for portfolio

export const personalInfo = {
  name: "Om Patel",
  title: "Data Engineer",
  tagline: "Crafting digital experiences with clean code and creative solutions",
  bio: "Passionate developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  email: "patelomr07@gmail.com",
  location: "Ontario, CA",
  animoji: "👨‍💻"
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/omp1911", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/patelomr/", icon: "linkedin" },
  // { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Email", url: "mailto:patelomr07@gmail.com", icon: "mail" }
];

export const experiences = [
  {
    id: 1,
    company: "EllisDon",
    role: "Data Engineer",
    duration: "2022 - Present",
    description: "Engineered scalable multi-cloud ETL/ELT pipelines across GCP and Azure that processed GBs–TBs of daily data, migrated Airflow from GKE to Cloud Composer reducing DevOps dependency by ~60%, optimized infrastructure costs by ~15–20% through selective Dataproc usage, and enabled near-real-time analytics via self-hosted Kafka with 100+ connectors.",
    technologies: ["Airflow", "Kafka", "Py-Spark", "Azure", "GCP", "Microsoft Fabric", "Python", "SQL", "Github"],
    project: {
      name: "LLM Invoice Processing in Palantir Foundry",
      description: "Built an end-to-end invoice processing platform on Palantir Foundry with PySpark ETL pipelines handling 1K–2K daily invoices via OCR and LLM extraction, reducing manual effort by ~50–60% and cutting issue turnaround time by ~70–75% through automated data lineage tracking, pipeline monitoring, and health checks across Foundry datasets.",
      technologies: ["Workshop", "Code Repository", "Contour", "Ontology", "Data Lineage", "AIP", "Pipeline Builder", "Data Connection"]
    }
  },
  {
    id: 2,
    company: "D-Tech Consulting",
    role: "Data Engineer",
    duration: "2021 - 2022",
    description: "Delivered enterprise-grade batch and streaming data pipelines using Spark, Kafka, Hive, and HDFS with custom UDFs and HiveQL transformations for JSON/XML processing and data masking, while automating orchestration via Oozie and Apache NiFi to improve reliability and reduce manual effort.",
    technologies: ["Apache Nifi", "Python", "Spark", "Hive", "HDFS", "Shell Scripting"]
  }
  // {
  //   id: 3,
  //   company: "StartUp Labs",
  //   role: "Frontend Developer",
  //   duration: "2019 - 2020",
  //   description: "Developed responsive web applications with focus on performance and user experience. Reduced load times by 40% through optimization.",
  //   technologies: ["React", "TypeScript", "Redux", "Webpack"]
  // },
  // {
  //   id: 4,
  //   company: "CodeCraft Agency",
  //   role: "Junior Developer",
  //   duration: "2018 - 2019",
  //   description: "Started career building landing pages and small web applications. Learned fundamentals of web development and best practices.",
  //   technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  // }
];

export const techStack = [
  { name: "Apache Kafka", category: "DE" },
  { name: "Spark/Spark Streaming", category: "DE" },
  { name: "Apache Airflow", category: "DE" },
  { name: "Zookeeper", category: "DE" },
  { name: "Apache Kafka", category: "DE" },
  { name: "Apache Flink", category: "DE" },
  { name: "Git/Github", category: "Administration" },
  { name: "Jira", category: "Administration" },
  { name: "Confluence", category: "Administration" },
  { name: "ServiceNow", category: "Administration" },
  { name: "Azure", category: "Cloud/DevOps" },
  { name: "GCP", category: "Cloud/DevOps" },
  { name: "Docker", category: "Cloud/DevOps" },
  { name: "Kubernetes", category: "Cloud/DevOps" },
  { name: "Palantir Foundry", category: "Cloud/DevOps" },
  { name: "Python", category: "Languages/Analytics" },
  { name: "Shell Scripting", category: "Languages/Analytics" },
  { name: "SQL/T-SQL", category: "Languages/Analytics" },
  { name: "Power BI", category: "Languages/Analytics" },
  { name: "Looker", category: "Languages/Analytics" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "SQL Server", category: "Database" },
  { name: "Oracle DB2", category: "Database" }
];

export const projects = [
  {
    id: 1,
    title: "Shabdlab.ai",
    description: "Full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "#",
    github: "#"
  }
  // {
  //   id: 2,
  //   title: "Task Management App",
  //   description: "Collaborative project management tool with real-time updates, team collaboration features, and analytics.",
  //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  //   technologies: ["Vue.js", "Firebase", "Tailwind"],
  //   link: "#",
  //   github: "#"
  // },
  // {
  //   id: 3,
  //   title: "AI Chat Assistant",
  //   description: "Intelligent chatbot powered by machine learning for customer support automation and natural conversations.",
  //   image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
  //   technologies: ["Python", "TensorFlow", "FastAPI", "React"],
  //   link: "#",
  //   github: "#"
  // },
  // {
  //   id: 4,
  //   title: "Portfolio Analytics Dashboard",
  //   description: "Real-time analytics dashboard for tracking investment portfolios with data visualization and alerts.",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  //   technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
  //   link: "#",
  //   github: "#"
  // },
  // {
  //   id: 5,
  //   title: "Social Media Scheduler",
  //   description: "Multi-platform social media management tool with scheduling, analytics, and content calendar.",
  //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  //   technologies: ["Next.js", "MongoDB", "AWS S3"],
  //   link: "#",
  //   github: "#"
  // }
];

export const certifications = [
  {
    id: 1,
    name: "Palantir Foundry Data Engineer Professional",
    issuer: "Palantir",
    date: "2025",
    // credentialId: "AWS-SA-2023-12345"
  },
  {
    id: 2,
    name: "Foundry & AIP Builder Foundations",
    issuer: "Palantir",
    date: "2025",
    // credentialId: "GCP-PD-2022-67890"
  },
  {
    id: 3,
    name: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    date: "2025",
    // credentialId: "MDB-DEV-2022-54321"
  },
  {
    id: 4,
    name: "Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    // credentialId: "FM-REACT-2021-98765"
  },
  {
    id: 5,
    name: "Data Engineering Bootcamp",
    issuer: "DataExpert.io",
    date: "2025",
    // credentialId: "META-FS-2020-11223"
  }
];
