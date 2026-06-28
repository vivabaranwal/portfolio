import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { useTheme } from '../App'
import photo1 from '../assets/photo1.png'

export default function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 2rem',
        paddingTop: '80px',
      }}
    >
      {/* ── Background golden blob (decorative) ── */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          border: '1px solid #F5A623',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '1px solid #F5A623',
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      />

      {/* ── Cursive — floats ABOVE the name, only bottom edge slightly overlaps top of VIVA ── */}
      <motion.div
        className="hero-cursive"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={isMobile ? {
          position: 'relative',
          top: '-8vw',
          right: '4vw',
          zIndex: 30,
          fontFamily: 'Dancing Script, cursive',
          fontSize: 'clamp(1rem, 5vw, 1.8rem)',
          color: '#F5A623',
          fontWeight: 700,
          whiteSpace: 'normal',
          textAlign: 'center',
          textShadow: '0 0 30px #F5A62366',
          pointerEvents: 'none',
          marginBottom: '-8vw',
          alignSelf: 'center',
          transform: 'rotate(-8deg)',
        } : {
          position: 'absolute',
          top: 'calc(24% - 70px)',
          left: '41%',
          transform: 'translateX(-50%) rotate(-8deg)',
          zIndex: 15,
          fontFamily: 'Dancing Script, cursive',
          fontSize: 'clamp(1.8rem, 4vw, 4rem)',
          color: '#F5A623',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          textShadow: '0 0 30px #F5A62366, 0 0 60px #F5A62333',
          pointerEvents: 'none',
          marginBottom: '-1.2rem',
          alignSelf: 'center',
        }}
      >
        building ideas into products
      </motion.div>

      {/* ── Main name + photo block ── */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1538px', margin: '0 auto', textAlign: 'center' }}>

        {/* ── Giant name ── */}
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: isMobile ? 'clamp(18vw, 22vw, 200px)' : 'clamp(10vw, 13vw, 200px)',
            color: 'var(--text-heading)',
            letterSpacing: '-0.02em',
            lineHeight: 0.9,
            textTransform: 'uppercase',
            userSelect: 'none',
            position: 'relative',
            zIndex: 5,
          }}
        >
          VIVA<br />BARANWAL
        </motion.h1>

        {/* ── Photo — sits between A and N ── */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={isMobile ? {
            position: 'relative',
            width: '60vw',
            height: '75vw',
            margin: '-39vw auto 0 auto',
            zIndex: 10,
          } : {
            position: 'absolute',
            top: '-5%',
            left: '38.7%',
            transform: 'translateX(-50%)',
            width: '20%',
            aspectRatio: '20 / 33',
            minWidth: '160px',
            minHeight: '260px',
            zIndex: 10,
          }}
        >
          <img
            src={photo1}
            alt="Viva Baranwal"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              borderRadius: '4px',
            }}
          />
        </motion.div>
      </div>

      {/* ── Subtitle — clearly below the name block ── */}
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(0.75rem, 1.5vw, 1.05rem)',
          fontWeight: 300,
          color: 'var(--text-heading)',
          letterSpacing: '0.18em',
          marginTop: isMobile ? '2vw' : '8vw',
          textAlign: 'center',
          zIndex: 20,
          position: 'relative',
        }}
      >
        Full Stack Developer &nbsp;·&nbsp; AI Builder &nbsp;·&nbsp; Hackathon Finisher
      </motion.p>

      {/* ── Bottom row: social icons left, decorative circle right ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: 0,
          right: 0,
          padding: '0 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          zIndex: 20,
        }}
      >
        {/* Social icons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {[
            { icon: FiGithub, href: 'https://github.com/vivabaranwal', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/viva-baranwal-224151279', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: '#F5A623' }}
              className="hero-social-icon"
              style={{
                width: isMobile ? '44px' : '70px',
                height: isMobile ? '44px' : '70px',
                borderRadius: '50%',
                border: '2px solid #F5A623',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F5A623',
                fontSize: isMobile ? '1.2rem' : '3rem',
                textDecoration: 'none',
                transition: 'background-color 0.25s ease, color 0.25s ease',
                background: 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#000'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#F5A623'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Decorative rotating double-circle (bottom right) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'relative',
            width: '120px',
            height: '120px',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '2px solid #F5A623',
              opacity: 0.25,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              right: '15px',
              bottom: '15px',
              borderRadius: '50%',
              border: '1px solid #F5A623',
              opacity: 0.2,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '35px',
              left: '35px',
              right: '35px',
              bottom: '35px',
              borderRadius: '50%',
              background: '#F5A62322',
            }}
          />
        </motion.div>
      </div>


    </div>
  )
}