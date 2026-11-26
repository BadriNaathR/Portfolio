import { certifications } from "@/data/certifications"
import { ShieldCheck } from "lucide-react"

export function Certifications() {
  return (
    <section className="certs" id="certifications">
      <div className="wrap">
        <div className="sec-label">06 &nbsp; Certifications</div>
        <h2 className="certs-h2">Certifications</h2>
        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-card">
              <div className="cert-icon">
                <ShieldCheck size={16} />
              </div>
              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-name">{cert.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
