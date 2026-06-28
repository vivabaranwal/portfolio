import { useState } from 'react'

const LEVELS = [
  { id: 1, label: 'LVL 1', company: "Founders Club", role: 'Technical Lead' },
  { id: 2, label: 'LVL 2', company: 'Brainvire', role: 'Software Intern' }
]

export default function Experience() {
  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h2>WORK EXPERIENCE</h2>
      <div>
        {LEVELS.map(lvl => (
          <div key={lvl.id}>
            <span>{lvl.label}</span> - {lvl.company} ({lvl.role})
          </div>
        ))}
      </div>
    </section>
  )
}
