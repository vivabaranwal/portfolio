const ACHIEVEMENTS = [
  { title: "Technical Lead â€” Founders Club, SRMIST (2024â€“Present)" },
  { title: '3rd Place â€” MozoHack by SRMKZILLA (Apr 2026)' }
]

export default function Achievements() {
  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h2>ACHIEVEMENTS</h2>
      <ul>
        {ACHIEVEMENTS.map((a, i) => <li key={i}>{a.title}</li>)}
      </ul>
    </section>
  )
}
