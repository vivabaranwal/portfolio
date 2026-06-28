import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', zIndex: 1000 }}>
      <div style={{ fontWeight: 'bold', color: '#F5A623' }}>VIVA BARANWAL</div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {NAV_LINKS.map(link => (
          <a key={link.label} href={link.href} style={{ textDecoration: 'none', color: '#ccc' }}>{link.label}</a>
        ))}
      </div>
    </nav>
  )
}
