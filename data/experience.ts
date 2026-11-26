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
          "Part of the TCS Corporate Delivery Management team, contributing to the management and coordination of AI initiatives across TCS.",
          "Collaborate with stakeholders, technical teams and delivery leadership on enterprise AI initiatives.",
          "Engage with AI solution development, innovation and cross-business AI adoption initiatives.",
        ],
      },
      {
        title: "BFSI – SEAL Research & Innovation",
        period: "January 2025 – March 2026",
        bullets: [
          "Developed enterprise GenAI proof-of-concepts and applications using Python, FastAPI, LLMs and modern frontend technologies.",
          "Explored and implemented RAG-based knowledge retrieval, LLM integrations and tool-calling workflows.",
          "Contributed to enterprise AI playgrounds and internal innovation initiatives.",
          "Worked with technical architects, engineering teams and business stakeholders to explore and develop AI-driven solutions.",
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
      "Developed full-stack enterprise web applications using React, TypeScript, .NET, and MERN stack technologies.",
      "Led Phase 1 feature development for Power Pulse, implementing custom SDK authentication, SQL query optimization, and interactive Power BI visualizations.",
      "Built an Asset Management Portal with dynamic forms, global search, and CRUD workflows to streamline internal IT asset tracking.",
      "Developed a reusable React Starter Kit integrated with Diligence Fabric Client SDK to standardize project setup and accelerate developer onboarding.",
    ],
  },
]
