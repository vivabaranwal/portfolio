import { motion } from 'framer-motion'

const ACHIEVEMENTS = [
  {
    title: '3rd Place — MozoHack by SRMKZILLA (Apr 2026)',
    description:
      "Competed in SRMKZILLA's flagship hackathon and shipped a complete working solution under time pressure. Top 3 out of all competing teams.",
  },
  {
    title: "Technical Lead — Founders Club, SRMIST (2024–Present)",
    description:
      "Took ownership of all technical decisions for one of SRM's most active clubs. Built systems, mentored teams, ran events.",
  },
  {
    title: 'Foundathon 2.0 Organizer',
    description:
      'Conceived and executed a domain-based hackathon from scratch — end-to-end technical coordination, team management, and logistics for 20+ participants.',
  },
  {
    title: '500+ Scale Event Operations',
    description:
      "Handled venue coordination and logistics as SPOC for a large-scale tech event. Also coordinated SRM's Smart India Hackathon participation.",
  },
  {
    title: '5 Internships — Brainvire (×2) · Staqo · IFQM · Founders Club',
    description:
      'Shipped across Microsoft tech, RAG pipelines, healthcare AI, multi-agent publishing systems, and full-stack — all before finishing second year.',
  },
  {
    type: 'certs',
    title: 'Certifications',
    certs: [
      { name: 'Python for Data Science — NPTEL', link: '#' },
      { name: 'Data Science Internship — Corizo (Wipro DICE verified)', link: '#' },
      { name: 'Python & Personality Development — IIT Hyderabad (Enduro)', link: '#' },
      { name: 'Data Science Hackathon — IIT Madras (Apr 2025)', link: '#' },
      { name: 'Oracle Java SE 17 — In Progress', link: '#' },
      { name: 'Gen AI & ML — IIT Kanpur E&ICT Academy — In Progress', link: '#' },
    ],
  },
]

export default function Achievements() {
  return (
    <section
      style={{
        background: 'var(--bg)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Deco */}
      <div style={{
        position: 'absolute', top: '10%', right: '-100px',
        width: '320px', height: '320px', borderRadius: '50%',
        border: '1px solid #F5A623', opacity: 0.08, pointerEvents: 'none',
      }} />

      <motion.h2
        className="achievements-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 'clamp(3.5rem, 8vw, 7rem)',
          color: 'var(--text-heading)',
          textTransform: 'uppercase',
          lineHeight: 0.9,
          marginBottom: '3rem',
        }}
      >
        ACHIEVEMENTS
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {ACHIEVEMENTS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
          >
            <motion.div
              className="achievements-row"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={{
                rest: { x: 0, background: 'transparent' },
                hover: { x: 6, background: '#0D0D0D' },
              }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.2rem',
                padding: 'clamp(1.1rem, 2.5vw, 1.6rem) clamp(1rem, 3vw, 1.5rem)',
                borderRadius: '8px',
                background: 'transparent',
                transition: 'background 0.2s ease, transform 0.2s ease',
                cursor: 'default',
              }}
            >
              <motion.div
                className="achievement-triangle"
                variants={{
                  rest: { rotate: 0, filter: 'drop-shadow(0 0 0px transparent)', opacity: 0.5 },
                  hover: { rotate: 180, filter: 'drop-shadow(0 0 6px #F5A623) drop-shadow(0 0 12px #F5A62388)', opacity: 1 },
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ flexShrink: 0, width: '14px', height: '14px', marginTop: '4px' }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="7,1 13,13 1,13"
                    fill="none"
                    stroke="#F5A623"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <div style={{ width: '100%' }}>
                <h3 className="achievements-title" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
                  fontWeight: 700,
                  color: '#F5A623',
                  marginBottom: '0.6rem',
                  lineHeight: 1.4,
                }}>
                  {item.title}
                </h3>

                {item.type === 'certs' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {item.certs.map((cert, ci) => (
                      <div
                        key={ci}
                        className="cert-row"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '0.5rem 0',
                          borderBottom: ci < item.certs.length - 1 ? '1px solid #1A1A1A' : 'none',
                        }}
                      >
                        <span style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: 'clamp(0.8rem, 1.1vw, 0.92rem)',
                          color: 'var(--text-body)',
                          lineHeight: 1.5,
                        }}>
                          {cert.name}
                        </span>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-btn"
                          style={{
                            border: '1px solid #F5A623',
                            color: '#F5A623',
                            background: 'transparent',
                            borderRadius: '20px',
                            padding: '4px 12px',
                            fontSize: '0.75rem',
                            cursor: 'pointer',
                            fontFamily: 'Inter, sans-serif',
                            whiteSpace: 'nowrap',
                            textDecoration: 'none',
                            transition: 'background 0.2s ease, color 0.2s ease',
                            flexShrink: 0,
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = '#F5A623'
                            e.currentTarget.style.color = '#000'
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.color = '#F5A623'
                          }}
                        >
                          View Certificate →
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="achievements-description" style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(0.8rem, 1.1vw, 0.92rem)',
                    color: 'var(--text-body)',
                    lineHeight: 1.65,
                  }}>
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid #1A1A1A', margin: '0 1.5rem' }} />
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .achievements-heading {
            font-size: clamp(2rem, 12vw, 4rem) !important;
          }
          .achievements-row {
            padding: 1rem !important;
            gap: 0.75rem !important;
          }
          .achievements-title {
            font-size: 1rem !important;
          }
          .achievements-description {
            font-size: 0.85rem !important;
          }
          .cert-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.4rem !important;
          }
          .cert-btn {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  )
}