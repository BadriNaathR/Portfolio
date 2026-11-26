"use client"

import { useState } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight, Mail, Download, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons"
import { profile } from "@/data/profile"

type NodeId = "input" | "rag" | "orchestration" | "mcp" | "workflow" | "output"

const NODE_DESC: Record<NodeId, string> = {
  input:         "Ingests documents, REST APIs, and enterprise data as the AI system foundation.",
  rag:           "Chunks, embeds, and retrieves relevant context via vector search and reranking.",
  orchestration: "Central engine: LLM reasoning, agent planning, context window, and memory.",
  mcp:           "Bridges external systems via tool calling and the Model Context Protocol.",
  workflow:      "Coordinates multi-step agent execution and complex task orchestration pipelines.",
  output:        "Delivers structured responses, real-time streaming output, and evaluation hooks.",
}

export function Hero() {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null)
  const shouldReduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.08 } },
  }
  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  }

  function nodeStyle(id: NodeId) {
    const on = activeNode === id
    return {
      fill:       on ? "var(--bg-ch)"  : "var(--bg-c)",
      stroke:     on ? "var(--acc)"    : "var(--brd)",
      transition: "fill 0.18s, stroke 0.18s",
    }
  }

  const orchStyle = {
    fill:       activeNode === "orchestration" ? "var(--bg-ch)" : "var(--bg-s)",
    stroke:     "var(--acc)",
    transition: "fill 0.18s",
  }

  const enter = (id: NodeId) => () => setActiveNode(id)
  const leave = () => setActiveNode(null)

  return (
    <section className="hero" id="about">
      <div className="wrap">
        <div className="hero-grid">

          {/* ── Left: identity & CTAs ── */}
          <motion.div variants={container} initial="hidden" animate="visible">

            <motion.div variants={item} className="hero-eyebrow">
              <span className="hero-loc">
                <MapPin size={12} />
                {profile.location}
              </span>
              <span className="hero-available">
                <span className="hero-avail-dot" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1 variants={item} className="hero-name">
              Badrinaath <em>R</em>
            </motion.h1>

            <motion.div variants={item} className="hero-role-row">
              <span className="hero-role-title">{profile.title}</span>
              <span className="hero-role-sep">·</span>
              <span className="hero-role-sub">{profile.subtitle}</span>
            </motion.div>

            <motion.p variants={item} className="hero-desc">
              {profile.heroDescription}
            </motion.p>

            <motion.div variants={item} className="hero-ctas">
              <a href="#projects" className="btn-primary">
                Explore My Work
                <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={14} />
                Get In Touch
              </a>
            </motion.div>

            <motion.div variants={item} className="hero-links">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon size={14} />
                GitHub
              </a>
              <span className="hero-link-sep">·</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
              <span className="hero-link-sep">·</span>
              <a href={profile.resumePath} download className="accent-link">
                <Download size={13} />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: AI Engineering Architecture ── */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="vis-box">
              <div className="vis-toolbar">
                <div className="vis-dot" />
                <div className="vis-dot" />
                <div className="vis-dot" />
                <span className="vis-label">ai-architecture.ts</span>
              </div>

              <svg
                className="vis-svg"
                viewBox="0 0 400 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* ── Ambient glow behind Orchestration Engine ── */}
                <ellipse cx="200" cy="85" rx="84" ry="78" className="vis-glow" />
                <ellipse cx="200" cy="85" rx="52" ry="48"
                  style={{ fill: "color-mix(in srgb, var(--acc) 7%, transparent)" }}>
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite" />
                </ellipse>

                {/* ── Connection paths (data-flow lines) ── */}
                {/* Input Sources → Orchestration */}
                <path d="M108,48 C122,48 140,60 140,70"
                  className="vis-line-flow" strokeWidth="1" strokeDasharray="4 4" />
                {/* RAG Pipeline → Orchestration */}
                <path d="M108,123 C124,123 140,120 140,120"
                  className="vis-line-flow" strokeWidth="1" strokeDasharray="4 4" />
                {/* Orchestration → MCP & Tools */}
                <path d="M260,70 C276,70 292,56 292,48"
                  className="vis-line-flow" strokeWidth="1" strokeDasharray="4 4" />
                {/* Orchestration → Workflow Execution */}
                <path d="M260,120 C276,120 292,122 292,123"
                  className="vis-line-flow" strokeWidth="1" strokeDasharray="4 4" />
                {/* Orchestration → Intelligent Output */}
                <path d="M200,150 L200,173"
                  className="vis-line-flow" strokeWidth="1" strokeDasharray="4 4" />

                {/* ── Animated data-flow particles ── */}
                <circle r="2.5" className="vis-particle">
                  <animateMotion dur="2.2s" begin="0s" repeatCount="indefinite"
                    path="M108,48 C122,48 140,60 140,70" />
                  <animate attributeName="opacity" values="0;1;1;0" dur="2.2s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle r="2.5" className="vis-particle">
                  <animateMotion dur="1.9s" begin="0.55s" repeatCount="indefinite"
                    path="M108,123 C124,123 140,120 140,120" />
                  <animate attributeName="opacity" values="0;1;1;0" dur="1.9s" begin="0.55s" repeatCount="indefinite" />
                </circle>
                <circle r="2.5" className="vis-particle">
                  <animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite"
                    path="M260,70 C276,70 292,56 292,48" />
                  <animate attributeName="opacity" values="0;1;1;0" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
                </circle>
                <circle r="2.5" className="vis-particle">
                  <animateMotion dur="1.9s" begin="1.65s" repeatCount="indefinite"
                    path="M260,120 C276,120 292,122 292,123" />
                  <animate attributeName="opacity" values="0;1;1;0" dur="1.9s" begin="1.65s" repeatCount="indefinite" />
                </circle>
                <circle r="2.5" className="vis-particle">
                  <animateMotion dur="1.5s" begin="0.3s" repeatCount="indefinite"
                    path="M200,150 L200,173" />
                  <animate attributeName="opacity" values="0;1;1;0" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                </circle>

                {/* ══════════════════════════════════════
                    NODES
                ══════════════════════════════════════ */}

                {/* ── 1. Input Sources (top-left) ── */}
                <g style={{ cursor: "pointer" }} onMouseEnter={enter("input")} onMouseLeave={leave}>
                  <rect x="8" y="25" width="100" height="46" rx="8" strokeWidth="1"
                    style={nodeStyle("input")} />
                  <text x="58" y="43" textAnchor="middle" fontSize="9" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-primary">Input Sources</text>
                  <text x="58" y="58" textAnchor="middle" fontSize="7" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-dim">Docs · APIs · Data</text>
                </g>

                {/* ── 2. RAG Pipeline (bottom-left) ── */}
                <g style={{ cursor: "pointer" }} onMouseEnter={enter("rag")} onMouseLeave={leave}>
                  <rect x="8" y="100" width="100" height="46" rx="8" strokeWidth="1"
                    style={nodeStyle("rag")} />
                  <text x="58" y="118" textAnchor="middle" fontSize="9" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-primary">RAG Pipeline</text>
                  <text x="58" y="133" textAnchor="middle" fontSize="7" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-dim">Embed · Search · Rank</text>
                </g>

                {/* ── 3. AI Orchestration Engine (CENTER — primary focus) ── */}
                <g style={{ cursor: "pointer" }} onMouseEnter={enter("orchestration")} onMouseLeave={leave}>
                  <rect x="140" y="20" width="120" height="130" rx="10" strokeWidth="1"
                    style={orchStyle}>
                    <animate attributeName="stroke-opacity" values="0.35;0.85;0.35"
                      dur="2.6s" repeatCount="indefinite" />
                  </rect>

                  <text x="200" y="43" textAnchor="middle" fontSize="10.5" fontFamily="monospace"
                    fontWeight="700" dominantBaseline="middle" className="vis-text-accent">
                    AI Orchestration
                  </text>
                  <text x="200" y="58" textAnchor="middle" fontSize="8" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-dim">Engine</text>

                  <line x1="162" y1="68" x2="238" y2="68" className="vis-line" strokeWidth="0.5" />

                  <text x="200" y="82" textAnchor="middle" fontSize="7.5" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-dim">LLM Reasoning</text>
                  <text x="200" y="97" textAnchor="middle" fontSize="7.5" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-dim">Agent Planning</text>
                  <text x="200" y="112" textAnchor="middle" fontSize="7.5" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-dim">Context · Memory</text>

                  {/* Processing indicator dots */}
                  <circle cx="185" cy="132" r="2.2" className="vis-particle">
                    <animate attributeName="opacity" values="0.2;0.85;0.2" dur="1.3s" begin="0s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="132" r="2.2" className="vis-particle">
                    <animate attributeName="opacity" values="0.2;0.85;0.2" dur="1.3s" begin="0.26s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="215" cy="132" r="2.2" className="vis-particle">
                    <animate attributeName="opacity" values="0.2;0.85;0.2" dur="1.3s" begin="0.52s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* ── 4. MCP & Tool Integrations (top-right) ── */}
                <g style={{ cursor: "pointer" }} onMouseEnter={enter("mcp")} onMouseLeave={leave}>
                  <rect x="292" y="25" width="100" height="46" rx="8" strokeWidth="1"
                    style={nodeStyle("mcp")} />
                  <text x="342" y="43" textAnchor="middle" fontSize="9" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-primary">MCP & Tools</text>
                  <text x="342" y="58" textAnchor="middle" fontSize="7" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-dim">APIs · Tool Calling</text>
                </g>

                {/* ── 5. Workflow Execution (bottom-right) ── */}
                <g style={{ cursor: "pointer" }} onMouseEnter={enter("workflow")} onMouseLeave={leave}>
                  <rect x="292" y="100" width="100" height="46" rx="8" strokeWidth="1"
                    style={nodeStyle("workflow")} />
                  <text x="342" y="118" textAnchor="middle" fontSize="9" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-primary">Workflow Exec</text>
                  <text x="342" y="133" textAnchor="middle" fontSize="7" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-dim">Task Orchestration</text>
                </g>

                {/* ── 6. Intelligent Output (bottom-center) ── */}
                <g style={{ cursor: "pointer" }} onMouseEnter={enter("output")} onMouseLeave={leave}>
                  <rect x="140" y="173" width="120" height="46" rx="8" strokeWidth="1"
                    style={nodeStyle("output")} />
                  <text x="200" y="191" textAnchor="middle" fontSize="9" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-primary">Intelligent Output</text>
                  <text x="200" y="206" textAnchor="middle" fontSize="7" fontFamily="monospace"
                    dominantBaseline="middle" className="vis-text-dim">Responses · Streaming</text>
                </g>

                {/* ── Description area ── */}
                <line x1="8" y1="231" x2="392" y2="231"
                  className="vis-line" strokeWidth="0.5" />
                <rect x="8" y="235" width="384" height="37" rx="7" strokeWidth="0.5"
                  className="vis-node-dim" />
                <text
                  x="200" y="253"
                  textAnchor="middle" fontSize="7.5" fontFamily="monospace"
                  dominantBaseline="middle"
                  className={activeNode ? "vis-text-primary" : "vis-text-dim"}
                >
                  {activeNode
                    ? NODE_DESC[activeNode]
                    : "→ hover any node to explore the architecture"}
                </text>

              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
