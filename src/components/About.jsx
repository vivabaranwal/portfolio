import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const BULLETS = [
  'B.Tech Computer Science @ SRMIST, Chennai (2024–2028)',
  "Technical Lead, Founders Club SRM — mentored 86 students across 17 teams",
  'Shipped AI products across 3 internships in 1 year',
  '3rd place at MozoHack by SRMKZILLA (Apr 2026)',
  'Obsessed with the gap between "working demo" and "real product"',
  'I don\'t just write code — I own problems end to end.',
]

function SquigglyLines() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <svg
      ref={ref}
      viewBox="0 0 300 400"
      width="100%"
      height="100%"
      fill="none"
      style={{ opacity: 0.35 }}
    >
      {[
        'M20,50 C80,10 200,90 280,50 C360,10 440,90 520,50',
        'M20,120 C100,80 220,160 280,120 C340,80 420,160 520,120',
        'M20,200 C60,140 180,260 260,200 C340,140 400,260 500,200',
        'M40,290 C120,230 200,350 280,290 C360,230 440,350 520,290',
        'M20,370 C80,310 200,430 280,370 C360,310 440,430 520,370',
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="#F5A623"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  )
}

export default function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section
      id="about-inner"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '4rem',
        alignItems: 'start',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top-right deco circle */}
      <div style={{
        position: 'absolute', top: '-60px', right: '-60px',
        width: '250px', height: '250px', borderRadius: '50%',
        border: '1px solid #F5A623', opacity: 0.1, pointerEvents: 'none',
      }} />

      {/* ── Left: content ── */}
      <div ref={containerRef}>
        <motion.h2
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            color: 'var(--text-heading)',
            textTransform: 'uppercase',
            lineHeight: 0.9,
            marginBottom: '2.5rem',
          }}
        >
          ABOUT ME
        </motion.h2>

        <motion.ul
          style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          {BULLETS.map((bullet, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
                color: 'var(--text-body)',
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: '#F5A623', fontWeight: 700, flexShrink: 0, marginTop: '0.1em' }}>—</span>
              {bullet}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* ── Right: animated SVG squiggles ── */}
      <motion.div
        className="about-svg"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{
          width: 'clamp(180px, 22vw, 280px)',
          height: 'clamp(260px, 35vw, 420px)',
          flexShrink: 0,
          alignSelf: 'center',
        }}
      >
        <SquigglyLines />
      </motion.div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #about-inner {
            grid-template-columns: 1fr !important;
            padding: 3rem 1.5rem !important;
          }
          .about-heading {
            font-size: clamp(3rem, 14vw, 5rem) !important;
          }
          .about-svg {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
