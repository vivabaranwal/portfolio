import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
import { useTheme } from '../App'

const TAGLINES = {
  hero: 'TURNING CONCEPTS INTO SCALABLE TECH',
  about: 'BUILDING EVERYDAY',
  projects: 'SHIPPING REAL THINGS',
  experience: 'THE JOURNEY SO FAR',
  achievements: 'STACKING WINS',
  contact: "LET'S BUILD SOMETHING",
}

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ activeSection }) {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const smoothScroll = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const isDark = theme === 'dark'

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: scrolled
            ? isDark ? 'rgba(0,0,0,0.85)' : 'rgba(245,245,240,0.85)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid #1a1a1a' : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left tagline */}
        <div style={{ flex: '0 0 auto', maxWidth: '320px' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={activeSection}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: 'Anton, sans-serif',
                fontSize: 'clamp(0.65rem, 1.1vw, 0.85rem)',
                color: '#F5A623',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {TAGLINES[activeSection] || TAGLINES.hero}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Center nav links (desktop) */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: isDark ? '#CCCCCC' : '#333333',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'color 0.2s ease',
                position: 'relative',
              }}
              onMouseEnter={e => e.target.style.color = '#F5A623'}
              onMouseLeave={e => e.target.style.color = isDark ? '#CCCCCC' : '#333333'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: toggle + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Dark/light pill toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: '52px',
              height: '28px',
              borderRadius: '999px',
              border: '2px solid #F5A623',
              background: isDark ? '#F5A623' : 'transparent',
              cursor: 'pointer',
              position: 'relative',
              transition: 'background 0.3s ease',
              flexShrink: 0,
            }}
          >
            <motion.div
              animate={{ x: isDark ? 0 : 20 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              style={{
                position: 'absolute',
                top: '2px',
                left: '2px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: isDark ? '#000' : '#F5A623',
              }}
            />
          </button>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#F5A623',
              fontSize: '1.5rem',
              display: 'none',
            }}
            className="show-mobile"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              zIndex: 999,
              background: isDark ? 'rgba(0,0,0,0.97)' : 'rgba(245,245,240,0.97)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid #1a1a1a',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: isDark ? '#FFFFFF' : '#111111',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  borderBottom: '1px solid #1a1a1a',
                  paddingBottom: '0.8rem',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive helpers (injected via style tag) */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
