"use client"

import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons"
import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-inner">
          <span className="footer-copy">© 2026 Badrinaath R</span>
          <div className="footer-icons">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={16} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

