"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download, Sun, Moon } from "lucide-react"
import { profile } from "@/data/profile"

const navLinks = [
  { label: "About",        href: "#about"        },
  { label: "Projects",     href: "#projects"     },
  { label: "Experience",   href: "#experience"   },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact",      href: "#contact"      },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled]       = useState(false)
  const [theme, setTheme]             = useState<"dark" | "light">("dark")

  useEffect(() => {
    const stored  = localStorage.getItem("portfolio-theme")
    const current = document.documentElement.getAttribute("data-theme")
    if (stored === "light" || current === "light") setTheme("light")
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }
    try { localStorage.setItem("portfolio-theme", next) } catch (e) {}
  }

  useEffect(() => {
    const sections  = navLinks.map((l) => l.href.slice(1))
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  return (
    <>
      <nav className={`site-nav${scrolled ? " nav-scrolled" : ""}`}>
        <div className="wrap">
          <div className="nav-inner">

            {/* Logo */}
            <a href="/" className="nav-logo">
              <span className="nav-logo-mark">BR</span>
              <span className="nav-logo-name">
                Badrinaath <span className="nav-logo-accent">R.</span>
              </span>
            </a>

            {/* Desktop links */}
            <ul className="nav-links">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`nav-link${isActive ? " nav-link-active" : ""}`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="nav-pill-bg"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li>
                <a href={profile.resumePath} download className="nav-resume">
                  <Download size={13} />
                  Resume
                </a>
              </li>
            </ul>

            {/* Controls */}
            <div className="nav-controls">
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <button
                className="nav-mobile-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="nav-mobile-backdrop" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="nav-mobile-panel"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumePath}
                download
                onClick={() => setMobileOpen(false)}
                className="nav-mobile-resume"
              >
                <Download size={14} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
