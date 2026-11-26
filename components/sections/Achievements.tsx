import { achievements } from "@/data/achievements"

const rankClass: Record<string, string> = {
  "1st Prize": "rank-1st",
  "National Runner-up": "rank-2nd",
  "Chennai Regional Winner": "rank-reg",
  "Technical Advisor": "rank-adv",
}

const rankEmoji: Record<string, string> = {
  "1st Prize": "🏆",
  "National Runner-up": "🥈",
  "Chennai Regional Winner": "⭐",
  "Technical Advisor": "👥",
}

export function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="wrap">
        <div className="sec-label">05 &nbsp; Achievements</div>
        <h2 className="achievements-h2">Hackathons &amp; Recognition</h2>
        <p className="achievements-sub">
          Competing at scale, building under pressure, and advising peers across the AI engineering community.
        </p>
        <div className="ach-grid">
          {achievements.map((item, i) => (
            <div key={i} className={i === 0 ? "ach-card ach-card-featured" : "ach-card"}>
              <div className="ach-rank-row">
                <span className={`rank-pill ${rankClass[item.rank] ?? "rank-adv"}`}>
                  {rankEmoji[item.rank]} {item.rank}
                </span>
                {item.featured && <span className="ach-featured">Featured</span>}
              </div>
              <div>
                <div className="ach-event">{item.event}</div>
                <div className="ach-proj">{item.project}</div>
              </div>
              <div className="ach-desc">{item.description}</div>
              {item.highlight && (
                <div className="ach-highlight">{item.highlight}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
