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
    slug: "enterprise-knowledge-discovery",
    name: "Enterprise Knowledge Discovery & Modernization Platform",
    tagline:
      "AI-powered enterprise application for legacy system analysis, knowledge discovery, and technical documentation generation — built at TCS using LangGraph and Neo4j.",
    category: "Enterprise AI Application",
    status: "internal",
    statusLabel: "Internal",
    org: "Tata Consultancy Services",
    techStack: ["Python", "FastAPI", "LLMs", "RAG", "LangGraph", "Neo4j", "PostgreSQL", "OpenAI"],
    summary:
      "An AI-powered enterprise application developed at TCS for legacy system analysis, knowledge discovery, and structured documentation generation. I contributed to backend services and LLM-powered processing workflows as part of the engineering team.",
    overview:
      "The platform uses LLM-powered workflows to extract contextual information from enterprise source code and technical assets, generating structured business and technical documentation to support application understanding and modernization initiatives.",
    problemStatement:
      "Enterprise teams managing legacy systems struggle to extract and document institutional knowledge embedded in aging codebases and technical assets. Manual analysis is slow, inconsistent, and does not scale to large system portfolios.",
    keyFeatures: [
      "AI-powered analysis of legacy enterprise source code and technical assets",
      "LLM-powered processing workflows for contextual information extraction",
      "Structured documentation generation for business and technical audiences",
      "Knowledge graph modelling with Neo4j for relationship-aware retrieval",
      "RAG-based retrieval pipeline and LangGraph orchestration for multi-step AI workflows",
    ],
    architectureNotes:
      "Internal system — specific architecture details are confidential. Uses LangGraph for AI workflow orchestration, Neo4j for knowledge graph modelling, and RAG-based retrieval over enterprise source assets.",
    challenges: [
      {
        title: "Extracting structured knowledge from unstructured legacy assets",
        solution:
          "Applied LLM-powered processing with structured output schemas to extract consistent, queryable knowledge representations from heterogeneous enterprise source code and documentation.",
      },
    ],
    confidential: true,
  },

  {
    slug: "know-your-enterprise",
    name: "Enterprise Knowledge Retrieval Platform",
    tagline:
      "Production enterprise AI application supporting information discovery for Delivery and ISU leadership teams — built on RAG-based retrieval and contextual LLM processing.",
    category: "Enterprise AI Application",
    status: "production",
    statusLabel: "Production",
    org: "Tata Consultancy Services",
    techStack: ["Python", "FastAPI", "LLMs", "RAG", "React", "Angular"],
    summary:
      "A production enterprise AI application developed at TCS that enables structured information discovery for delivery managers and ISU leadership teams. I contributed to RAG-based knowledge retrieval, contextual LLM processing, and integration with enterprise application services and frontend interfaces.",
    overview:
      "The platform surfaces accurate, role-relevant information from enterprise data sources through RAG-based retrieval and contextual LLM processing. I worked on the retrieval pipeline, LLM-driven workflows, and frontend integration across React and Angular interfaces.",
    problemStatement:
      "Enterprise leadership teams struggle to surface timely, structured information from siloed internal systems. Manual lookup across tools is slow and inconsistent, impeding operational decision-making at scale.",
    keyFeatures: [
      "RAG-based knowledge retrieval and contextual LLM processing for enterprise information discovery",
      "LLM-driven workflows integrated with enterprise application services",
      "Frontend interfaces in React and Angular supporting leadership information queries",
      "Retrieval pipeline development and LLM integration as part of the engineering team",
    ],
    architectureNotes:
      "Internal production system — specific architecture and implementation details are confidential. Uses RAG-based retrieval and contextual LLM processing on internal organisational data.",
    challenges: [
      {
        title: "Accurate retrieval across diverse enterprise data sources",
        solution:
          "Contributed to a retrieval pipeline combining vector-based and contextual search approaches to surface relevant information from heterogeneous enterprise data.",
      },
    ],
    confidential: true,
  },

  // ── Independent projects ──────────────────────────────────────────────────

  {
    slug: "flowmind",
    name: "FlowMind",
    tagline:
      "Independent full-stack AI workflow automation prototype — transforms natural-language instructions into structured, executable workflow definitions with real-time execution streaming.",
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
      "SSE",
    ],
    summary:
      "FlowMind is an independent full-stack AI platform I am building that transforms natural-language workflow instructions into structured, executable definitions. It is a prototype in active development — not a production system. All third-party integrations are simulated adapters.",
    overview:
      "FlowMind combines an LLM-powered workflow parser (LangChain), a FastAPI backend, PostgreSQL persistence, and a React interface with real-time SSE log streaming. All third-party integrations (Gmail, Slack, Google Sheets, Notion) are simulated adapters — no live external connections exist in the current build.",
    problemStatement:
      "Workflow automation tools typically require users to understand rigid DSLs or no-code builders. FlowMind explores whether natural-language instructions can be reliably parsed into deterministic, executable workflow graphs.",
    keyFeatures: [
      "LLM-powered workflow parser using LangChain and FastAPI, converting natural-language instructions into structured workflow definitions",
      "Backend APIs for workflow creation, retrieval, and lifecycle management",
      "Prototype execution engine with simulated Gmail, Slack, Google Sheets, and Notion integrations",
      "Server-Sent Events (SSE) streaming of step-level execution logs to the frontend",
      "React and TypeScript interface for workflow creation, visual step inspection, simulated test runs, and execution monitoring",
    ],
    architectureNotes: `
FlowMind Architecture:

[User] → React UI (TypeScript)
         ↓
[FastAPI Backend] → LangChain Parser → Workflow Definition (JSON)
         ↓                                      ↓
[PostgreSQL]                        [Execution Engine]
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
        title: "Real-time execution feedback",
        solution:
          "Implemented Server-Sent Events (SSE) on the FastAPI backend to stream per-step execution logs to the React frontend without requiring WebSocket complexity.",
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
      "D³ is an AI-driven credit card dispute intelligence solution recognized at the National Finals of TCS AI Friday Hackathon Season 2. Designed around evidence-aware digital twins, evidence graphs, agentic investigation, and incremental decision re-evaluation.",
    overview:
      "D³ addresses the complexity of credit card dispute resolution by modelling disputes as structured evidence graphs and applying agentic AI to investigate, evaluate, and incrementally refine decisions.",
    problemStatement:
      "Credit card dispute resolution is a high-volume, evidence-intensive process prone to inconsistency. D³ explored whether agentic AI and structured evidence reasoning could improve decision quality and consistency.",
    keyFeatures: [
      "Evidence-aware digital twin modelling for dispute scenarios",
      "Evidence graph construction for structured reasoning over dispute data",
      "Agentic investigation workflow for autonomous evidence evaluation",
      "Incremental decision re-evaluation as new evidence is surfaced",
      "National Runner-up at TCS AI Friday Hackathon Season 2",
    ],
    architectureNotes:
      "Developed as a hackathon prototype. Focus on evidence graph modelling and agentic workflows for dispute analysis.",
    challenges: [
      {
        title: "Modelling complex dispute scenarios as structured evidence",
        solution:
          "Designed an evidence graph schema capturing relationships between claim, evidence, parties, and decisions — enabling structured agentic traversal and evaluation.",
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
      "HARMONY-SAMANVAY is a human-AI collaboration operating model focused on intelligent task allocation, agent orchestration, structured handovers, and governance. Chennai Regional Winner at TCS AI Friday Hackathon Season 2.",
    overview:
      "HARMONY-SAMANVAY explores how AI agents and human teams can collaborate effectively through structured task allocation and clear handover protocols.",
    problemStatement:
      "Hybrid human-AI workflows often lack clear task ownership, handover protocols, and governance — leading to coordination failures and unpredictable AI behaviour.",
    keyFeatures: [
      "Intelligent task allocation distributing work between human and AI participants",
      "Agent orchestration layer managing multi-agent collaboration and sequencing",
      "Structured handover protocols for clean human-AI transitions",
      "Governance framework for oversight and auditability of AI-assisted decisions",
      "Chennai Regional Winner at TCS AI Friday Hackathon Season 2",
    ],
    architectureNotes:
      "Developed as a hackathon prototype defining a human-AI collaboration model. Focus on operating model design and orchestration patterns.",
    challenges: [
      {
        title: "Defining clear boundaries between human and AI responsibilities",
        solution:
          "Developed a task classification model that routes work based on complexity, risk, and AI confidence — with explicit human handover triggers for edge cases.",
      },
    ],
    confidential: false,
  },
]
