import { useState } from 'react'

const PROJECTS = [
  { id: 1, name: 'Rakshak AI', stack: ['React', 'FastAPI'], github: 'https://github.com/vivabaranwal/RakshakAI', description: 'Legal document analyzer.' },
  { id: 2, name: 'AI SOW Generator', stack: ['LangGraph', 'Gemini'], github: 'https://github.com/vivabaranwal/AI_SOW-Generator', description: 'Statement of work automation.' }
]

export default function Projects() {
  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h2>PROJECTS</h2>
      <div>
        {PROJECTS.map(p => (
          <div key={p.id} style={{ marginBottom: '2rem', borderLeft: '3px solid #F5A623', paddingLeft: '1rem' }}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div>
              {p.stack.map(s => <span key={s} style={{ marginRight: '0.5rem', background: '#333', padding: '0.2rem' }}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
