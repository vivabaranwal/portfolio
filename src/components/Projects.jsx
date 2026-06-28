import { useState } from 'react'

const PROJECTS = [
  { id: 1, name: 'Rakshak AI', github: 'https://github.com/vivabaranwal/RakshakAI', description: 'Legal document analyzer.' },
  { id: 2, name: 'AI SOW Generator', github: 'https://github.com/vivabaranwal/AI_SOW-Generator', description: 'Statement of work automation.' }
]

export default function Projects() {
  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h2>PROJECTS</h2>
      <div>
        {PROJECTS.map(p => (
          <div key={p.id} style={{ marginBottom: '2rem' }}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
