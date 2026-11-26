export interface Achievement {
  rank: string
  event: string
  project: string
  description: string
  highlight?: string
  featured: boolean
}

export const achievements: Achievement[] = [
  {
    rank: "National Winner",
    event: "NVIDIA GSI Open Hackathon 2026",
    project: "LifeShield AI",
    description:
      "Won First Prize at the NVIDIA GSI Open Hackathon 2026 — a national-level competition across NVIDIA's partner ecosystem in India, including teams from EY, Infosys, HCL, TCS (250+ teams alone), and other major companies. Selected among 20 finalists from 200+ teams at the NVIDIA Bengaluru finals.",
    highlight: "Awarded NVIDIA Jetson Orin Nano Developer Kit",
    featured: true,
  },
  {
    rank: "National Runner-up",
    event: "TCS AI Friday Hackathon – Season 2",
    project: "D³ (Detect – Decide – Deliver)",
    description:
      "Recognized at the National Finals for D³, an AI-driven credit card dispute intelligence solution designed around evidence-aware digital twins, evidence graphs, agentic investigation, and incremental decision re-evaluation.",
    featured: true,
  },
  {
    rank: "Chennai Regional Winner",
    event: "TCS AI Friday Hackathon – Season 2",
    project: "HARMONY-SAMANVAY",
    description:
      "Built HARMONY-SAMANVAY, a human-AI collaboration operating model focused on intelligent task allocation, agent orchestration, handovers, and governance.",
    featured: false,
  },
  {
    rank: "Technical Advisor",
    event: "TCS AI Friday Hackathon",
    project: "Advisory",
    description:
      "Provided architectural and implementation guidance to 150+ participating teams on Generative AI design, RAG pipelines, agentic workflows, and enterprise solution development.",
    featured: false,
  },
]
