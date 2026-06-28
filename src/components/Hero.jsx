import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--bg)' }}>
      <motion.h1 style={{ fontFamily: 'Anton, sans-serif', fontSize: '12vw', color: 'var(--text-heading)', textTransform: 'uppercase' }}>
        VIVA<br />BARANWAL
      </motion.h1>
    </div>
  )
}
