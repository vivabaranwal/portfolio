import { motion } from 'framer-motion'
import { useTheme } from '../App'

export default function PortfolioIntro() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="portfolio-intro-section"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        minHeight: '60vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Golden deco blob top-left ── */}
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '300px', height: '300px',
        borderRadius: '50%', border: '1px solid #F5A623', opacity: 0.1,
        pointerEvents: 'none',
      }} />

      {/* ── Left: CSS crescent ── */}
      <motion.div
        className="portfolio-intro-crescent"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 'clamp(160px, 20vw, 260px)',
            height: 'clamp(160px, 20vw, 260px)',
            borderRadius: '50%',
            background: 'transparent',
            boxShadow: 'clamp(18px, 3vw, 28px) clamp(-18px, -3vw, -28px) 0 #F5A623',
            opacity: 0.22,
          }}
        />
      </motion.div>

      {/* ── Right: content ── */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ flex: 1, maxWidth: '680px' }}
      >
        <h2
          className="portfolio-intro-heading"
          style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(3rem, 7vw, 7rem)',
            color: 'var(--text-heading)',
            lineHeight: 0.95,
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          MY PORTFOLIO
        </h2>

        <p
          className="portfolio-intro-body"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
            lineHeight: 1.8,
            color: 'var(--text-body)',
            marginBottom: '2.5rem',
            maxWidth: '560px',
          }}
        >
          I&apos;m a second-year CS student at SRMIST who&apos;s already shipped AI products across
          three internships — in legal tech, healthcare, and enterprise automation. One pipeline I
          built cut a 2–3 week manual process down to under 30 minutes. I don&apos;t wait to be
          given problems. I find them, build for them, and iterate until they&apos;re solved.
        </p>

        {/* CTA button */}
        <motion.a
          href="#projects"
          onClick={scrollToProjects}
          animate={{ boxShadow: ['0 0 0 0 #F5A62333', '0 0 0 14px #F5A62311', '0 0 0 0 #F5A62300'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #F5A62344' }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-block',
            padding: '0.9rem 2.2rem',
            borderRadius: '999px',
            background: '#F5A623',
            color: '#000',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
        >
          Explore my work →
        </motion.a>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-intro-section {
            padding: 4rem 1.5rem !important;
            flex-direction: column !important;
          }
          .portfolio-intro-heading {
            font-size: clamp(3rem, 12vw, 5rem) !important;
          }
          .portfolio-intro-body {
            text-align: left !important;
            font-size: 0.95rem !important;
          }
          .portfolio-intro-crescent {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
