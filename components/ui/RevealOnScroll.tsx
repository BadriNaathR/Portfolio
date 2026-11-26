"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: string
}

export function RevealOnScroll({ children, delay = 0, className = "", as = "div" }: RevealOnScrollProps) {
  const shouldReduce = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

