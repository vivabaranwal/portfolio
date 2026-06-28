import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import photo2 from '../assets/photo2.png'

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <footer
      style={{
        background: '#000',
        borderTop: '1px solid #1A1A1A',
        padding: isMobile
          ? '4rem 1.5rem 14rem'
          : 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem) 3rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Deco */}
      <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid #F5A623', opacity: 0.08, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '220px', height: '220px', borderRadius: '50%', border: '1px solid #F5A623', opacity: 0.07, pointerEvents: 'none' }} />

      {/* THANK YOU */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: isMobile ? 'clamp(3rem, 18vw, 8rem)' : 'clamp(6rem, 15vw, 18rem)',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          lineHeight: 0.85,
          letterSpacing: '-0.02em',
          marginBottom: isMobile ? '0' : '1.5rem',
          whiteSpace: 'nowrap',
        }}
      >
        THANK YOU
      </motion.h2>

      {/* Cursive */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={isMobile ? {
          fontFamily: 'Dancing Script, cursive',
          fontSize: 'clamp(1rem, 4vw, 1.8rem)',
          color: '#F5A623',
          fontWeight: 700,
          textShadow: '0 0 20px #F5A62344',
          position: 'absolute',
          bottom: '90px',
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: 30,
          margin: 0,
          padding: '0 1rem',
        } : {
          fontFamily: 'Dancing Script, cursive',
          fontSize: 'clamp(1.3rem, 3vw, 2.2rem)',
          color: '#F5A623',
          fontWeight: 700,
          marginBottom: '3rem',
          textShadow: '0 0 20px #F5A62344',
          position: 'relative',
          zIndex: 20,
        }}
      >
        "Not just coding — creating things that matter."
      </motion.p>

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={isMobile ? {
          position: 'absolute',
          right: '18%',
          bottom: '120px',
          width: '110px',
          height: '220px',
          zIndex: 10,
        } : {
          position: 'absolute',
          right: '25%',
          bottom: '-20px',
          width: '240px',
          height: '500px',
          zIndex: 10,
        }}
      >
        <img src={photo2} alt="Viva Baranwal - Casual" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
      </motion.div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={isMobile ? {
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.7rem',
          color: '#555555',
          letterSpacing: '0.08em',
          position: 'absolute',
          bottom: '35px',
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: 30,
          margin: 0,
          padding: '0 1rem',
        } : {
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.8rem',
          color: '#555555',
          letterSpacing: '0.08em',
        }}
      >
        © 2026 Viva Baranwal
      </motion.p>
    </footer>
  )
}