"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { Brain, Layers, Server, Monitor, Database, Wrench } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { skillCategories } from "@/data/skills"

const categoryMeta: Record<string, { icon: LucideIcon; accent: boolean }> = {
  "Generative AI":              { icon: Brain,    accent: true  },
  "AI Frameworks":              { icon: Layers,   accent: true  },
  "Backend":                    { icon: Server,   accent: false },
  "Frontend":                   { icon: Monitor,  accent: false },
  "Databases & Infrastructure": { icon: Database, accent: false },
  "Developer Tools":            { icon: Wrench,   accent: false },
}

export function Skills() {
  const shouldReduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduce ? 0 : 0.07 } },
  }
  const rowVariant: Variants = {
    hidden: { opacity: 0, x: shouldReduce ? 0 : -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
  }

  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <RevealOnScroll>
          <div className="sec-label">03 &nbsp; Capabilities</div>
          <div className="skills-header">
            <h2 className="skills-h2">Engineering Stack</h2>
            <p className="skills-sub">
              Tools and technologies I use to design, build, and ship production-grade AI systems.
            </p>
          </div>
        </RevealOnScroll>

        <motion.div
          className="skills-stack"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {skillCategories.map((cat) => {
            const meta = categoryMeta[cat.label]
            const Icon = meta?.icon
            const isAccent = meta?.accent ?? false

            return (
              <motion.div
                key={cat.label}
                variants={rowVariant}
                className={`skill-row${isAccent ? " skill-row-accent" : ""}`}
              >
                <div className="skill-row-label">
                  {Icon && (
                    <div className={`skill-row-icon${isAccent ? " skill-row-icon-accent" : ""}`}>
                      <Icon size={15} />
                    </div>
                  )}
                  <span className="skill-row-name">{cat.label}</span>
                </div>
                <div className="skill-row-tags">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-tag${isAccent ? " skill-tag-accent" : ""}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
