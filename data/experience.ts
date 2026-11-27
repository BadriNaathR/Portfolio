export interface SubRole {
  title: string
  period: string
  bullets: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  location: string
  period: string
  current: boolean
  bullets: string[]
  subroles?: SubRole[]
}

export const experience: ExperienceItem[] = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "System Engineer (Prime)",
    location: "Chennai, India",
    period: "January 2025 – Present",
    current: true,
    bullets: [],
    subroles: [
      {
        title: "Corporate Delivery Management",
        period: "April 2026 – Present",
        bullets: [
          "Developing enterprise AI applications focused on knowledge discovery, information retrieval, and intelligent enterprise workflows.",
          "Building backend services and AI orchestration workflows using Python, FastAPI, LangGraph, and OpenAI-based LLM integrations.",
          "Implementing LLM integration, knowledge retrieval, and data-processing capabilities across full-stack enterprise applications.",
          "Collaborating with cross-functional engineering teams on enterprise AI development and adoption initiatives.",
        ],
      },
      {
        title: "BFSI – SEAL Research & Innovation",
        period: "January 2025 – March 2026",
        bullets: [
          "Established and configured a centralized LLM access layer using LiteLLM for enterprise AI initiatives within TCS.",
          "Integrated Azure-hosted LLM endpoints into LiteLLM, enabling centralized model access through a shared gateway.",
          "Configured API key provisioning and tracked token consumption across multiple locations to support usage monitoring and budget visibility.",
          "Developed Generative AI applications and proof-of-concept solutions using Python, FastAPI, LLM integrations, and RAG-based workflows.",
        ],
      },
    ],
  },
  {
    company: "Unlimited Innovations Pvt. Ltd.",
    role: "Software Engineer Trainee",
    location: "Chennai, India",
    period: "June 2024 – December 2024",
    current: false,
    bullets: [
      "Developed full-stack enterprise web applications using React, TypeScript, .NET, and MERN technologies.",
      "Led Phase 1 feature development for Power Pulse, integrating custom SDK authentication, SQL optimization, and Power BI visualizations.",
      "Built an Asset Management Portal with dynamic forms, global search, and CRUD functionality.",
      "Developed a reusable React Starter Kit integrated with Diligence Fabric Client SDK to standardize project setup and improve developer onboarding.",
    ],
  },
]
