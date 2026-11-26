import { experience } from "@/data/experience"

export function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="wrap">
        <div className="sec-label">04 &nbsp; Experience</div>
        <h2 className="experience-h2">Professional Experience</h2>
        <div className="exp-timeline">
          {experience.map((item, i) => (
            <div key={i} className="exp-item">
              <div className={`exp-dot${item.current ? " current" : ""}`} />
              <div className="exp-header">
                <div>
                  <div className="exp-co">{item.company}</div>
                  <div className="exp-role">{item.role}</div>
                </div>
                <div className="exp-meta">
                  <div className="exp-period">{item.period}</div>
                  {item.current && (
                    <div className="exp-current">
                      <span className="pulse" />
                      Current
                    </div>
                  )}
                </div>
              </div>

              {item.subroles && item.subroles.length > 0 ? (
                <div className="exp-subroles">
                  {item.subroles.map((sub, j) => (
                    <div key={j} className="exp-subrole">
                      <div className="exp-subrole-header">
                        <span className="exp-subrole-title">{sub.title}</span>
                        <span className="exp-subrole-period">{sub.period}</span>
                      </div>
                      <ul className="exp-bullets">
                        {sub.bullets.map((bullet, k) => (
                          <li key={k}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="exp-bullets">
                  {item.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
