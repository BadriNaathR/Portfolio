import { profile } from "@/data/profile"
import { Mail, MapPin, ArrowRight } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons"

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="sec-label">07 &nbsp; Contact</div>
        <div className="contact-grid">
          <div>
            <h2 className="contact-h2">
              Let&apos;s Build Something <em>Intelligent.</em>
            </h2>
            <p className="contact-p">
              I&apos;m open to discussing enterprise AI projects, engineering roles, and technical collaborations. Reach out and let&apos;s talk.
            </p>
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={14} />
              Send a Message
              <ArrowRight size={13} />
            </a>
          </div>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="clink">
              <span className="clink-icon"><Mail size={15} /></span>
              <div>
                <div className="clink-label">Email</div>
                <div className="clink-val">{profile.email}</div>
              </div>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="clink">
              <span className="clink-icon"><LinkedinIcon size={15} /></span>
              <div>
                <div className="clink-label">LinkedIn</div>
                <div className="clink-val">linkedin.com/in/badrinaathr</div>
              </div>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="clink">
              <span className="clink-icon"><GithubIcon size={15} /></span>
              <div>
                <div className="clink-label">GitHub</div>
                <div className="clink-val">github.com/BadriNaathR</div>
              </div>
            </a>
            <div className="clink" style={{ cursor: "default" }}>
              <span className="clink-icon"><MapPin size={15} /></span>
              <div>
                <div className="clink-label">Location</div>
                <div className="clink-val">{profile.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
