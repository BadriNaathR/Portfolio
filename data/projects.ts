export type ProjectStatus = "production" | "in-development" | "internal" | "prototype" | "hackathon"

export interface Project {
  slug: string
  name: string
  tagline: string
  category: string
  status: ProjectStatus
  statusLabel: string
  techStack: string[]
  summary: string
  overview: string
  problemStatement: string
  keyFeatures: string[]
  architectureNotes: string
  challenges: { title: string; solution: string }[]
  github?: string
  demo?: string
  confidential: boolean
  org: string
}

export const projects: Project[] = [
  // ── Enterprise projects ───────────────────────────────────────────────────
  {
    slug: "know-your-enterprise",
    name: "Know Your Enterprise",
    tagline:
      "Enterprise AI knowledge discovery platform supporting delivery and leadership teams at TCS — built on hybrid RAG and contextual LLM processing.",
    category: "Enterprise AI Application",
    status: "production",
    statusLabel: "Production",
    org: "Tata Consultancy Services",
    techStack: ["Python", "FastAPI", "LLMs", "Hybrid RAG", "AI Agents", "React", "Angular"],
    summary:
      "Know Your Enterprise is a production enterprise AI application developed at TCS that enables structured information discovery for delivery managers and ISU leadership teams. I contributed to its RAG pipeline design, LLM integration, and backend service development as part of the engineering team.",
    overview:
      "KYE combines hybrid RAG pipelines, contextual LLM processing, and multi-source retrieval to surface accurate, role-relevant responses from internal organizational data. As part of a multi-engineer team, I contributed to backend services, retrieval pipeline components, and frontend integration across React and Angular interfaces.",
    problemStatement:
      "Enterprise leadership teams struggle to surface timely, structured information from siloed internal systems. Manual lookup across tools is slow and inconsistent, impeding operational decision-making at scale.",
    keyFeatures: [
      "Hybrid RAG pipeline combining dense and sparse retrieval for high-accuracy enterprise knowledge retrieval",
      "Contextual LLM processing that synthesizes multi-source organizational data into structured responses",
      "Agent workflows integrating multi-source retrieval and enterprise backend services",
      "React and Angular interfaces for delivery and leadership operational queries",
    ],
    architectureNotes:
      "Internal system — specific architecture and implementation details are confidential. The system uses hybrid retrieval and contextual LLM processing on internal organizational data.",
    challenges: [
      {
        title: "Multi-source enterprise data retrieval",
        solution:
          "Contributed to a hybrid RAG approach combining dense vector search with sparse BM25 retrieval to handle structured and unstructured enterprise data sources reliably.",
      },
      {
        title: "Response accuracy for leadership queries",
        solution:
          "Worked on retrieval re-ranking and prompt engineering to improve factual accuracy on domain-specific organizational data.",
      },
    ],
    confidential: true,
  },

  // ── Independent projects ──────────────────────────────────────────────────
  {
    slug: "flowmind",
    name: "FlowMind",
    tagline:
      "Independent full-stack AI workflow automation platform — converts natural-language instructions into structured, executable workflow definitions.",
    category: "Independent Project",
    status: "in-development",
    statusLabel: "In Development",
    org: "Independent",
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "React",
      "TypeScript",
      "SQLAlchemy",
      "PostgreSQL",
      "Celery",
      "Redis",
      "SSE",
    ],
    summary:
      "FlowMind is an independent full-stack AI platform I am building that lets users describe automation workflows in plain language and executes them as structured, multi-step processes. It is a prototype in active development — not a production system.",
    overview:
      "FlowMind combines an LLM-based workflow parser (LangChain), a FastAPI backend, PostgreSQL persistence, Celery/Redis async execution, and a React interface with real-time SSE log streaming. All third-party integrations (Gmail, Slack, Google Sheets, Notion) are simulated adapters for development and testing — no live external connections exist in the current build.",
    problemStatement:
      "Workflow automation tools typically require users to understand rigid DSLs or no-code builders. FlowMind explores whether natural-language instructions can be reliably parsed into deterministic, executable workflow graphs.",
    keyFeatures: [
      "LLM-based workflow parser (LangChain) that converts natural-language instructions into structured workflow JSON",
      "FastAPI REST endpoints for workflow creation, retrieval, and lifecycle management",
      "PostgreSQL and SQLAlchemy persistence for workflow state and execution history",
      "Celery and Redis for asynchronous, non-blocking workflow execution",
      "Server-Sent Events (SSE) for real-time per-step execution log streaming to the frontend",
      "React and TypeScript interface for workflow authoring, step inspection, and log monitoring",
      "Simulated adapters for Gmail, Slack, Google Sheets, and Notion — no live API connections",
    ],
    architectureNotes: `
FlowMind Architecture:

[User] → React UI (TypeScript)
         ↓
[FastAPI Backend] → LangChain Parser → Workflow Definition (JSON)
         ↓                                      ↓
[PostgreSQL]                        [Celery Worker + Redis]
                                           ↓
                              Simulated Adapters (Gmail / Slack / Sheets / Notion)
                                           ↓
                              SSE Stream → React UI (Execution Logs)

Note: All third-party integrations are simulated adapters.
No live external API connections in the current prototype.
    `,
    challenges: [
      {
        title: "Reliable NL-to-workflow parsing",
        solution:
          "Designed a structured LangChain prompt pipeline with output schema validation to ensure the LLM produces deterministic, parseable workflow JSON rather than free-form text.",
      },
      {
        title: "Real-time execution feedback without WebSocket complexity",
        solution:
          "Implemented Server-Sent Events (SSE) on the FastAPI backend to stream per-step execution logs to the React frontend — simpler to implement than WebSockets for unidirectional log streaming.",
      },
      {
        title: "Async execution without blocking the API",
        solution:
          "Offloaded workflow execution to Celery workers backed by Redis, keeping FastAPI endpoints responsive while long-running workflows execute independently.",
      },
    ],
    confidential: false,
  },

  // ── Hackathon projects ────────────────────────────────────────────────────
  {
    slug: "lifeshield-ai",
    name: "LifeShield AI",
    tagline:
      "Evidence-aware digital twin for catastrophe intelligence — National Winner at NVIDIA GSI Open Hackathon 2026, competing against teams from EY, Infosys, HCL, TCS, and other major NVIDIA partner companies across India.",
    category: "Hackathon Project",
    status: "hackathon",
    statusLabel: "National Winner",
    org: "NVIDIA GSI Open Hackathon 2026",
    techStack: ["LLMs", "AI Agents", "Digital Twin", "Evidence Graphs"],
    summary:
      "LifeShield AI is an evidence-aware digital twin for catastrophe intelligence, built with Team Cognitive Core at the NVIDIA GSI Open Hackathon 2026. National Winner — selected among 20 finalists from 200+ competing teams across NVIDIA's partner ecosystem in India, including EY, Infosys, HCL, and TCS (which fielded 250+ teams alone).",
    overview:
      "LifeShield AI was designed to assist catastrophe response by integrating AI reasoning with real-world evidence through a digital twin model. The project won First Prize at the NVIDIA Bengaluru finals against teams from some of India's largest IT companies, and was awarded the NVIDIA Jetson Orin Nano Developer Kit.",
    problemStatement:
      "Catastrophe response requires rapid, evidence-grounded intelligence. LifeShield AI explored how AI agents and digital twin modeling could synthesize situational evidence to support decision-making in high-stakes scenarios.",
    keyFeatures: [
      "Evidence-aware AI reasoning for catastrophe scenario intelligence",
      "Digital twin modeling to simulate and analyze real-world conditions",
      "Agent-based architecture for structured evidence evaluation",
      "National Winner — 1st Prize from 200+ teams at NVIDIA GSI Open Hackathon 2026, Bengaluru finals",
      "Competed against teams from EY, Infosys, HCL, TCS (250+ teams alone), and other NVIDIA partner companies",
      "Awarded NVIDIA Jetson Orin Nano Developer Kit",
    ],
    architectureNotes:
      "Developed during the NVIDIA GSI Open Hackathon 2026 as a time-boxed prototype. Specific implementation details are scoped to the hackathon deliverable.",
    challenges: [
      {
        title: "Building a credible evidence-aware system under hackathon constraints",
        solution:
          "Focused on a well-scoped problem and a clear agent reasoning architecture to deliver a coherent and evaluable prototype within the hackathon timeline.",
      },
    ],
    confidential: false,
  },
  {
    slug: "d3-dispute-intelligence",
    name: "D³ — Detect, Decide, Deliver",
    tagline:
      "AI-driven credit card dispute intelligence using evidence-aware digital twins and agentic investigation — National Runner-up, TCS AI Friday Hackathon Season 2.",
    category: "Hackathon Project",
    status: "hackathon",
    statusLabel: "National Runner-up",
    org: "TCS AI Friday Hackathon – Season 2",
    techStack: ["LLMs", "AI Agents", "Evidence Graphs", "Agentic Workflows"],
    summary:
      "D³ is an AI-driven credit card dispute intelligence solution recognized at the National Finals of TCS AI Friday Hackathon Season 2. The system is designed around evidence-aware digital twins, evidence graphs, agentic investigation, and incremental decision re-evaluation.",
    overview:
      "D³ addresses the complexity of credit card dispute resolution by modeling disputes as structured evidence graphs and applying agentic AI to investigate, evaluate, and incrementally refine decisions. The design explores how evidence-aware AI can improve consistency and reasoning quality in high-volume financial decision workflows.",
    problemStatement:
      "Credit card dispute resolution is a high-volume, evidence-intensive process prone to inconsistency. D³ explored whether agentic AI and structured evidence reasoning could improve decision quality and consistency.",
    keyFeatures: [
      "Evidence-aware digital twin modeling for dispute scenarios",
      "Evidence graph construction for structured reasoning over dispute data",
      "Agentic investigation workflow for autonomous evidence evaluation",
      "Incremental decision re-evaluation as new evidence is surfaced",
      "National Runner-up recognition at TCS AI Friday Hackathon Season 2",
    ],
    architectureNotes:
      "Developed as a hackathon prototype. The system uses evidence graph modeling and agentic workflows for dispute analysis. Specific implementation details are scoped to the hackathon deliverable.",
    challenges: [
      {
        title: "Modelling complex dispute scenarios as structured evidence",
        solution:
          "Designed an evidence graph schema that captures the relationships between claim, evidence, parties, and decisions — enabling structured agentic traversal and evaluation.",
      },
    ],
    confidential: false,
  },
  {
    slug: "harmony-samanvay",
    name: "HARMONY-SAMANVAY",
    tagline:
      "Human-AI collaboration operating model for intelligent task allocation and agent orchestration — Chennai Regional Winner, TCS AI Friday Hackathon Season 2.",
    category: "Hackathon Project",
    status: "hackathon",
    statusLabel: "Regional Winner",
    org: "TCS AI Friday Hackathon – Season 2",
    techStack: ["LLMs", "AI Agents", "Agent Orchestration", "Task Automation"],
    summary:
      "HARMONY-SAMANVAY is a human-AI collaboration operating model focused on intelligent task allocation, agent orchestration, structured handovers, and governance. It was awarded Chennai Regional Winner at TCS AI Friday Hackathon Season 2.",
    overview:
      "HARMONY-SAMANVAY explores how AI agents and human teams can collaborate effectively through structured task allocation and clear handover protocols. The model addresses coordination overhead in hybrid human-AI workflows by defining governance and orchestration patterns that make AI participation predictable and auditable.",
    problemStatement:
      "Hybrid human-AI workflows often lack clear task ownership, handover protocols, and governance — leading to coordination failures and unpredictable AI behaviour. HARMONY-SAMANVAY proposed a structured operating model to address this.",
    keyFeatures: [
      "Intelligent task allocation model distributing work between human and AI participants",
      "Agent orchestration layer managing multi-agent collaboration and sequencing",
      "Structured handover protocols for clean transitions between human and AI execution",
      "Governance framework for oversight and auditability of AI-assisted decisions",
      "Chennai Regional Winner at TCS AI Friday Hackathon Season 2",
    ],
    architectureNotes:
      "Developed as a hackathon prototype defining a human-AI collaboration model. Focus was on operating model design and orchestration patterns rather than a specific production implementation.",
    challenges: [
      {
        title: "Defining clear boundaries between human and AI responsibilities",
        solution:
          "Developed a task classification model that routes work based on complexity, risk, and AI confidence — with explicit human handover triggers for edge cases requiring judgement.",
      },
    ],
    confidential: false,
  },
]
