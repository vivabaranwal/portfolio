import { motion } from 'framer-motion'
import photo1 from '../assets/photo1.png'

export default function Hero() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--bg)', position: 'relative' }}>
      
      <motion.div
        style={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: '3rem',
          color: '#F5A623',
          transform: 'rotate(-8deg)',
          zIndex: 15
        }}
      >
        building ideas into products
      </motion.div>

      <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
        <motion.h1 style={{ fontFamily: 'Anton, sans-serif', fontSize: '10vw', color: 'var(--text-heading)', textTransform: 'uppercase', zIndex: 5 }}>
          VIVA<br />BARANWAL
        </motion.h1>

        <motion.div
          style={{
            position: 'absolute',
            top: '-8%',
            left: '38.7%',
            transform: 'translateX(-50%)',
            width: '20vw',
            height: '33vw',
            zIndex: 10
          }}
        >
          <img src={photo1} alt="Viva Baranwal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
      </div>
    </div>
  )
}
