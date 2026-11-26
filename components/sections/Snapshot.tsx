import { profile } from "@/data/profile"

export function Snapshot() {
  return (
    <section className="snapshot">
      <div className="wrap">
        <div className="sec-label">01 &nbsp; Overview</div>
        <div className="snapshot-grid">
          <div>
            <h2 className="snapshot-h2">
              Building production AI systems,{" "}
              <em>not just prototypes.</em>
            </h2>
            <p className="snapshot-p">
              AI and Full-Stack Engineer at Tata Consultancy Services with 2 years of experience building
              enterprise Generative AI applications, knowledge discovery platforms, and agentic retrieval
              pipelines — contributed across both BFSI research and corporate AI initiatives.
            </p>
            <p className="snapshot-p">
              Outside enterprise work, I build independently and compete in AI hackathons — exploring
              workflow automation, applied LLM systems, and practical AI architectures. Three hackathon
              awards including a First Prize at the NVIDIA GSI Open Hackathon 2026.
            </p>
          </div>
          <div className="stats-grid">
            {profile.stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-num">{stat.value}</div>
                <div className="stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
