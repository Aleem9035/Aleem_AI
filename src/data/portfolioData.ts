/**
 * Portfolio Configuration & Content for Aleem (AI/ML Engineer)
 * Easily maintainable and configurable parameters.
 */

export interface PersonalConfig {
  name: string;
  primaryTitle: string;
  secondaryPositioning: string;
  headline: string;
  subheadline: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  locationStatus: string;
  availability: string;
}

export const personalConfig: PersonalConfig = {
  name: "Aleem",
  primaryTitle: "AI/ML Engineer",
  secondaryPositioning:
    "Building practical AI systems with Machine Learning, Generative AI, RAG, AI Agents, Computer Vision, and production-oriented backend systems.",
  headline: "Building AI Systems That Solve Real Problems.",
  subheadline:
    "I'm an AI/ML Engineer focused on Machine Learning, Generative AI, RAG, AI Agents, Computer Vision, and production-ready Python systems.",
  email: "aleemmehar422@gmail.com",
  githubUrl: "https://github.com/aleem-ai",
  linkedinUrl: "https://linkedin.com/in/aleem-aiml",
  resumeUrl: "/resume/Aleem-AI-ML-Engineer-Resume.pdf",
  locationStatus: "Open to Remote & Saudi / Gulf opportunities",
  availability: "Available for AI/ML Engineer roles",
};

export const aboutData = {
  heading: "About Me",
  paragraphs: [
    "I'm an AI/ML Engineer who enjoys turning data and AI concepts into working systems. My work spans machine learning, predictive modeling, Generative AI, RAG pipelines, AI agents, computer vision, and backend APIs.",
    "I care about more than getting a model to work in a notebook. I focus on how the complete system works — data, models, APIs, retrieval, validation, deployment, and the user experience around it.",
    "I'm continuously building projects that help me strengthen both my engineering skills and my understanding of how AI systems behave in real-world environments.",
  ],
  currentlyFocusedOn: [
    { title: "Production AI Engineering", description: "Modular pipelines, resilient APIs, and containerized serving" },
    { title: "Generative AI & RAG", description: "Vector indexing, semantic chunking, and grounded context retrieval" },
    { title: "Agentic AI", description: "Stateful orchestration, deterministic routing, and tool execution" },
    { title: "Machine Learning", description: "Feature engineering, time-series forecasting, and model evaluation" },
    { title: "Computer Vision", description: "Object detection, YOLO fine-tuning, and visual inference workflows" },
    { title: "MLOps & Cloud", description: "Docker, CI/CD pipelines, reproducible environments, and Linux hosting" },
  ],
};

export const howIBuildData = {
  heading: "How I Build",
  subheading: "I don't start with a model. I start with the problem.",
  description:
    "A working model in a notebook is only a fraction of the solution. Delivering real business value requires an end-to-end engineering mindset where data quality, latency, validation, and user integration are engineered from day one.",
  steps: [
    {
      number: "01",
      title: "Understand the Problem",
      summary: "Define business metrics, failure modes, latency constraints, and real user workflows before writing a single line of model code.",
      details: "Is ML genuinely required, or does a heuristic or simple rule suffice? How will false positives be handled? What latency is acceptable?",
    },
    {
      number: "02",
      title: "Build the Data & ML Pipeline",
      summary: "Ingest, clean, validate schemas, explore distributions, engineer features, and establish evaluation baselines.",
      details: "Prevent data leakage, account for distribution drift, and validate against representative real-world test sets rather than synthetic splits.",
    },
    {
      number: "03",
      title: "Turn Models into Products",
      summary: "Wrap models and agents in robust FastAPI services with strict Pydantic schemas, caching, and deterministic fallbacks.",
      details: "Decouple compute-heavy model inference from request threads, integrate vector databases, and ensure clean API contracts.",
    },
    {
      number: "04",
      title: "Test, Deploy & Improve",
      summary: "Containerize via Docker, verify edge cases, monitor latency and failure rates, and iterate continuously on real feedback.",
      details: "Automate test suites, monitor prediction distributions, and design clear rollback and versioning strategies.",
    },
  ],
  pipelineStages: [
    { name: "Data", description: "Ingestion, EDA, Schema validation & cleaning" },
    { name: "Model", description: "Training, evaluation & fine-tuning" },
    { name: "API", description: "FastAPI endpoints & Pydantic validation" },
    { name: "Integration", description: "RAG vector store, caching & agent tools" },
    { name: "Validation", description: "Edge cases, guardrails & latency checks" },
    { name: "Deployment", description: "Docker containers & cloud hosting" },
    { name: "Monitoring", description: "Logging, telemetry & drift detection" },
  ],
};

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillsCategories: SkillCategory[] = [
  {
    category: "Machine Learning",
    description: "Statistical modeling, tabular predictive pipelines, and algorithmic evaluation.",
    skills: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "XGBoost",
      "Prophet",
      "Regression",
      "Classification",
      "Clustering",
      "EDA",
      "Model Evaluation",
    ],
  },
  {
    category: "Generative AI",
    description: "Retrieval-augmented systems, agent orchestration, and context grounding.",
    skills: [
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "Embeddings",
      "Vector Search",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "ChromaDB",
    ],
  },
  {
    category: "Computer Vision",
    description: "Real-time object detection, image classification, and visual pipelines.",
    skills: [
      "YOLO",
      "OpenCV",
      "Image Classification",
      "Object Detection",
      "Vision-Language Models",
    ],
  },
  {
    category: "Backend",
    description: "Production API services, relational persistence, and clean service architecture.",
    skills: [
      "FastAPI",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    category: "Data",
    description: "Transformation workflows, schema validation, and feature preparation.",
    skills: [
      "SQL",
      "Data Cleaning",
      "ETL fundamentals",
      "Data Pipelines",
      "Feature Engineering",
    ],
  },
  {
    category: "Cloud & DevOps",
    description: "Containerization, version control, and reproducible deployment environments.",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "GCP fundamentals",
      "CI/CD fundamentals",
    ],
  },
];

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  architecture: string[];
  highlights: string[];
  image: string;
  note?: string;
  githubUrl: string;
  demoUrl?: string;
}

export const featuredProjects: ProjectItem[] = [
  {
    id: "kisaan-market-ai",
    name: "Kisaan Market AI",
    category: "AI Agriculture Assistant",
    badge: "Flagship Project",
    description:
      "An AI-powered agriculture assistant designed to combine forecasting, weather information, agricultural knowledge, recommendations, and computer vision into a single intelligent workflow.",
    problem:
      "Farmers and rural agribusiness operators face highly volatile market prices, unpredictable localized weather, and crop disease outbreaks, yet struggle to access unified, timely advisory without switching between multiple disparate tools.",
    solution:
      "Built an agentic system that unifies time-series price forecasting, computer vision disease identification, localized weather telemetry, and RAG-based agronomy manuals into a single conversational and API interface.",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "RAG",
      "ChromaDB",
      "Prophet",
      "YOLO",
      "LLM",
      "Gradio",
      "PostgreSQL/Supabase",
    ],
    architecture: [
      "User",
      "FastAPI",
      "LangGraph Agent",
      "Forecast / Weather / News",
      "Recommendation Engine",
      "Computer Vision",
      "RAG",
      "LLM",
      "Final Response",
    ],
    highlights: [
      "ML forecasting for mandi market prices using Prophet",
      "RAG knowledge retrieval over regional agronomy extension manuals",
      "Agentic workflow with LangGraph state machine routing",
      "Plant disease detection with fine-tuned YOLO bounding boxes",
      "API-based architecture with FastAPI and Pydantic validation",
      "Production-oriented modular design decoupled for scalability",
    ],
    image: "/src/assets/images/kisaan_market_preview_1790417750086.jpg",
    githubUrl: "https://github.com/aleem-ai/kisaan-market-ai",
    demoUrl: "",
  },
  {
    id: "nexus-ai",
    name: "NEXUS AI",
    category: "Production AI Platform",
    badge: "Systems Architecture",
    description:
      "An AI platform focused on combining modern AI capabilities with production engineering practices including APIs, databases, vector search, caching, containerization, and scalable architecture.",
    problem:
      "Many generative AI prototypes fail to scale beyond simple scripts because they lack session state isolation, caching layers, robust vector retrieval indices, and clean service boundaries.",
    solution:
      "Architected a modular production blueprint decoupling semantic vector indexing (Qdrant), low-latency caching (Redis), relational storage (PostgreSQL), and asynchronous FastAPI workers wrapped in Docker containers.",
    technologies: [
      "Python",
      "FastAPI",
      "LLMs",
      "RAG",
      "Vector Database",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Cloud",
    ],
    architecture: [
      "Frontend",
      "FastAPI",
      "AI Services",
      "PostgreSQL",
      "Qdrant",
      "Redis",
    ],
    highlights: [
      "Asynchronous FastAPI gateway with structured request validation",
      "Multi-tenant vector search indexing via Qdrant for semantic recall",
      "Redis caching layer to minimize duplicate LLM inference calls",
      "Relational metadata persistence using PostgreSQL with connection pooling",
      "Full container orchestration with Docker and environment segregation",
    ],
    note: "Designed with production deployment and scalability in mind.",
    image: "/src/assets/images/nexus_platform_preview_1790417763495.jpg",
    githubUrl: "https://github.com/aleem-ai/nexus-ai-platform",
    demoUrl: "",
  },
  {
    id: "air-quality-forecasting",
    name: "Air Quality Forecasting",
    category: "Machine Learning / Time Series",
    badge: "Predictive Modeling",
    description:
      "A machine learning and time-series forecasting project focused on predicting future air-quality trends from historical observations.",
    problem:
      "Urban atmospheric particulate matter (PM2.5 / PM10) experiences sharp spikes due to industrial emissions, traffic, and seasonal inversions, requiring reliable multi-day predictive horizons for public health advisories.",
    solution:
      "Engineered an automated time-series pipeline using Facebook Prophet that decomposes historical hourly atmospheric data into trend, weekly, and seasonal components to forecast air quality index (AQI) with uncertainty intervals.",
    technologies: [
      "Python",
      "Pandas",
      "Prophet",
      "Matplotlib",
      "Streamlit",
    ],
    architecture: [
      "Data",
      "Cleaning",
      "EDA",
      "Forecasting",
      "Visualization",
      "Deployment",
    ],
    highlights: [
      "Automated outlier removal, missing-value interpolation, and timestamp standardization",
      "Additive and multiplicative seasonal decomposition using Prophet",
      "Confidence intervals and changepoint detection across meteorological shifts",
      "Interactive Streamlit exploration dashboard with dynamic forecasting windows",
      "Clean modular Python codebase formatted for reproducible experimentation",
    ],
    image: "/src/assets/images/air_quality_preview_1790417776138.jpg",
    githubUrl: "https://github.com/aleem-ai/air-quality-forecasting",
    demoUrl: "",
  },
];

export const caseStudyDetail = {
  projectTitle: "Kisaan Market AI",
  subtitle: "How I Think About AI Projects — Systems Engineering Case Study",
  summary:
    "An architectural deconstruction of how Kisaan Market AI was designed, built, and evaluated as an integrated multi-modal AI system rather than a disconnected model script.",
  sections: [
    {
      title: "Problem",
      content:
        "Agricultural decision-making requires synthesizing disparate signals: volatile commodity price fluctuations, unpredictable local weather shifts, and visual crop leaf diseases. Smallholder producers and agricultural workers rarely have access to integrated, low-latency advisory systems that speak their language and ground suggestions in factual data.",
    },
    {
      title: "Architecture",
      content:
        "The system separates user interaction from heavy inference. A FastAPI gateway acts as the secure entrypoint, dispatching user intent to a LangGraph state machine. The state machine orchestrates specialized modules (Forecasting, Weather, YOLO Computer Vision, RAG Vector Search) and merges outputs into a structured prompt for the final LLM response.",
    },
    {
      title: "Data",
      content:
        "Data ingested includes historical mandi commodity spot prices, local meteorological sensor feeds, verified extension handbooks from agricultural universities, and a curated crop disease leaf pathology dataset spanning key regional crops.",
    },
    {
      title: "Machine Learning (ML)",
      content:
        "To provide price projections without relying on expensive real-time LLM calculations, time-series forecasting is handled by Facebook Prophet models trained on historical seasonal price cycles, tracking changepoints around harvest and monsoon periods.",
    },
    {
      title: "RAG (Retrieval-Augmented Generation)",
      content:
        "Knowledge retrieval uses ChromaDB with dense embeddings. Documents (fertilizer dosage charts, pest management protocols, soil preparation) are parsed into semantic chunks with 15% overlap. Queries are filtered by crop type and region before retrieval to ensure relevant context injection.",
    },
    {
      title: "Agents & Orchestration",
      content:
        "A LangGraph state machine enforces deterministic routing. If a user asks 'What is the tomato price next week and what is this leaf spot?', the agent branches concurrently: one node queries the Prophet forecast API, while another runs the image through the CV model. This eliminates hallucinated price predictions.",
    },
    {
      title: "Computer Vision",
      content:
        "Plant disease detection utilizes a fine-tuned YOLO model. Uploaded leaf images are normalized, inferred on an isolated worker, and output with bounding boxes, disease classification labels, and confidence thresholds before passing the diagnosis to the RAG knowledge base for remedy retrieval.",
    },
    {
      title: "API Design",
      content:
        "The backend is built with FastAPI. All endpoints adhere to strict Pydantic schemas with type enforcement, custom error handling, and CORS middleware. Asynchronous request handling allows IO-bound calls (weather APIs, database lookups) to execute non-blockingly.",
    },
    {
      title: "Deployment & Packaging",
      content:
        "The complete application is containerized using Docker, with environment variables managing API keys and database credentials. Storage for embeddings and models is mounted as persistent volumes, enabling zero-downtime container restarts.",
    },
    {
      title: "Lessons Learned",
      content:
        "Building this project reinforced that 80% of AI engineering is system reliability: deterministic fallback routes when external APIs fail, input sanitization against prompt injection, schema validation to protect frontend rendering, and clear separation of compute-intensive ML inference from the API request thread.",
    },
  ],
};

export const engineeringExperience = {
  title: "Engineering Experience",
  roleTitle: "Independent AI/ML Projects & Research",
  period: "Focused Engineering Practice",
  description:
    "Hands-on experience designing and building AI/ML systems, experiments, APIs, RAG pipelines, agent workflows, forecasting models, and computer vision applications.",
  narrative:
    "Rather than treating machine learning as purely academic exercises in Jupyter notebooks, my focus is on applied software engineering for AI: building dependable data pipelines, designing clean FastAPI endpoints, integrating vector databases, containerizing with Docker, and architecting agentic workflows with deterministic guardrails.",
  openToRoles: [
    "AI/ML Engineer roles",
    "Applied AI roles",
    "GenAI Engineer roles",
    "ML Engineer roles",
    "AI Backend Engineer roles",
  ],
  locations: [
    "Remote opportunities",
    "Saudi / Gulf opportunities",
    "Global technical teams",
  ],
  engineeringPractices: [
    {
      title: "Systems Over Notebooks",
      description: "Transforming experimental code into modular, production-ready Python packages with clean separation of concerns.",
    },
    {
      title: "Deterministic Guardrails",
      description: "Using state machines (LangGraph) and Pydantic schemas so LLMs execute specific tools rather than free-wheeling.",
    },
    {
      title: "Pragmatic Tool Selection",
      description: "Choosing classical ML (Prophet, XGBoost) when appropriate for tabular/time-series data instead of overusing heavy LLMs.",
    },
    {
      title: "Containerized Workflows",
      description: "Packaging environments with Docker for reproducible builds across local and cloud environments.",
    },
  ],
};

export const proofOfWork = {
  heading: "Proof of Work",
  subheading: "Technical credibility built on actual code, architectures, and system designs.",
  cards: [
    {
      title: "GitHub Repositories",
      description: "Clean, modular Python repositories with detailed READMEs, environment setup files, requirements, and test suites.",
      tag: "Code Quality",
      linkText: "Explore GitHub",
      linkUrl: personalConfig.githubUrl,
    },
    {
      title: "System Architecture",
      description: "Structured diagrams mapping data flow, FastAPI gateways, vector databases, caching layers, and external APIs.",
      tag: "Architecture",
      linkText: "View Case Study",
      linkUrl: "#case-study",
    },
    {
      title: "Technical Case Studies",
      description: "Deep dive analyses covering trade-offs, failure modes, data preparation, and real-world system behavior.",
      tag: "Engineering Depth",
      linkText: "Read Kisaan Case Study",
      linkUrl: "#case-study",
    },
    {
      title: "Modular API Contracts",
      description: "Strict Pydantic schemas and RESTful endpoint design separating compute-heavy inference from user-facing services.",
      tag: "Backend & Systems",
      linkText: "View Featured Projects",
      linkUrl: "#projects",
    },
  ],
};
