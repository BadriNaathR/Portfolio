export interface SkillCategory {
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Generative AI",
    skills: ["LLMs", "RAG", "Hybrid RAG", "AI Agents", "Agentic Workflows", "Prompt Engineering", "Tool Calling", "MCP"],
  },
  {
    label: "AI Frameworks",
    skills: ["LangChain", "Azure OpenAI", "Chroma", "FAISS"],
  },
  {
    label: "Backend",
    skills: ["Python", "FastAPI", "REST APIs", "SQLAlchemy", "Pydantic", "Celery", "Node.js"],
  },
  {
    label: "Frontend",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Databases & Infrastructure",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker Compose"],
  },
  {
    label: "Developer Tools",
    skills: ["Git", "GitHub", "Postman", "Codex CLI", "Gemini CLI"],
  },
]
