import { education } from "@/data/education"

export function Education() {
  return (
    <section className="education" id="education">
      <div className="wrap">
        <div className="sec-label">06 &nbsp; Education</div>
        <h2 className="education-h2">Academic Background</h2>
        <div className="edu-list">
          {education.map((item, i) => (
            <div key={i} className="edu-item">
              <div className="edu-main">
                <div className="edu-degree">
                  {item.degree} <span className="edu-field">in {item.field}</span>
                </div>
                <div className="edu-institution">{item.institution}</div>
              </div>
              <div className="edu-meta">
                <div className="edu-period">{item.period}</div>
                <div className="edu-cgpa">CGPA &nbsp;{item.cgpa}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
