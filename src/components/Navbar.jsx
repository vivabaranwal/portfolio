import { useState } from 'react'
import { useTheme } from '../App'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', zIndex: 1000 }}>
      <div style={{ fontWeight: 'bold', color: '#F5A623' }}>VIVA BARANWAL</div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {NAV_LINKS.map(link => (
          <a key={link.label} href={link.href} style={{ textDecoration: 'none', color: '#ccc' }}>{link.label}</a>
        ))}
        <button onClick={toggleTheme} style={{ cursor: 'pointer', padding: '0.3rem 0.6rem', border: '1px solid #F5A623', background: 'transparent', color: '#F5A623' }}>
          {isDark ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  )
}
