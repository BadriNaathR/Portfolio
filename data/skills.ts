export interface SkillCategory {
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Generative AI & Agentic Systems",
    skills: ["LLMs", "RAG", "AI Agents", "Agentic Workflows", "Prompt Engineering", "Tool Calling"],
  },
  {
    label: "AI Frameworks & Gateways",
    skills: ["LangChain", "LangGraph", "LiteLLM", "Azure OpenAI", "OpenAI APIs"],
  },
  {
    label: "Backend & APIs",
    skills: ["FastAPI", "REST APIs", "Node.js", "SQLAlchemy", "Pydantic", "SSE"],
  },
  {
    label: "Frontend",
    skills: ["React", "Angular", "Tailwind CSS"],
  },
  {
    label: "Databases & DevOps Tools",
    skills: ["PostgreSQL", "MongoDB", "Neo4j", "Docker Compose", "Git", "GitHub", "Postman"],
  },
]
