import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const PROJECTS = [
  {
    id: 1,
    name: 'Rakshak AI',
    tag: 'AI · Legal Tech',
    stack: ['React', 'Vite', 'TailwindCSS', 'FastAPI', 'Python', 'SQLite', 'LLM', 'Zustand'],
    description:
      "Most people don't read their contracts. Rakshak AI does it for them. Upload any legal document and it automatically flags risky clauses, simplifies dense legal language, and lets you have a conversation with the document through a chat interface. Built full-stack from scratch — frontend to backend to LLM pipeline — and iterated based on real user feedback.",
    github: 'https://github.com/vivabaranwal/RakshakAI',
    linkLabel: 'View on GitHub →',
    badge: null,
    inProgress: false,
  },
  {
    id: 2,
    name: 'AI SOW Generator',
    tag: 'AI · Enterprise Automation',
    stack: ['FastAPI', 'LangGraph', 'Gemini', 'Pinecone', 'Streamlit', 'RAG', 'Python'],
    description:
      'Writing Statements of Work used to take account managers 2–3 weeks of back-and-forth. This system does it in under 30 minutes. Feed it a client meeting transcript, and it pulls from a Pinecone knowledge base of historical projects, extracts requirements, and generates a validated, downloadable SOW — end to end. Built during my internship at Brainvire, used by the team in production.',
    github: 'https://github.com/vivabaranwal/AI_SOW-Generator',
    linkLabel: 'View on GitHub →',
    badge: 'Built @ Brainvire AI Internship',
    inProgress: false,
  },
  {
    id: 3,
    name: 'MediMind AI',
    tag: 'AI · Healthcare',
    stack: ['React', 'FastAPI', 'Python', 'LLM', 'Full-Stack'],
    description:
      'Hospitals run on paper, WhatsApp, and memory. MediMind AI replaces that with a clinical intelligence layer — receptionists, junior doctors, and senior doctors each get AI-assisted workflows for reception, assessment, diagnosis, documentation, prescriptions, and follow-ups. Currently being built to support 100+ medical staff across 5 hospitals and clinics. This one\'s for real people in real wards.',
    github: 'https://github.com/vivabaranwal/MediMindAI',
    linkLabel: 'View on GitHub →',
    badge: 'Built @ Staqo Internship',
    inProgress: true,
  },
  {
    id: 4,
    name: 'AI Case Study Generator',
    tag: 'AI · Publishing · RAG',
    stack: ['FastAPI', 'PostgreSQL', 'RAG', 'LangGraph', 'Multi-Agent', 'Vector DB', 'Python'],
    description:
      'Building a RAG-based, citation-aware multi-agent pipeline that transforms raw company reports into publication-ready business case studies modeled on Harvard Business School and MIT Sloan standards. What used to take weeks of manual research now takes minutes.',
    github: 'https://github.com/vivabaranwal',
    linkLabel: 'View on GitHub →',
    badge: 'Built @ IFQM Internship',
    inProgress: true,
  },
  {
    id: 5,
    name: 'StartIn',
    tag: 'Full-Stack · Web',
    stack: ['Python', 'Flask', 'HTML', 'CSS'],
    description:
      "Built in a team of 3 during a hackathon. Campus placement portals are built for corporates, not startups. StartIn flips that — a recruitment platform where early-stage startups can find student talent for internships and hiring, and students can actually discover companies worth joining. Clean, functional, and built to solve a problem I felt personally.",
    github: 'https://github.com/lehanvats/startin-HackMozo',
    linkLabel: 'View on GitHub →',
    badge: null,
    inProgress: false,
  },
  {
    id: 6,
    name: 'Global Health Statistics Analysis',
    tag: 'AI · Data Analysis',
    stack: ['Python', 'DistilBERT', 'Hugging Face', 'Data Analysis'],
    description:
      'An AI-powered Q&A system that lets you interrogate global vaccination and disease trend data in plain English. Powered by DistilBERT for natural language understanding, it turns dense public health statistics into answers actual people can act on.',
    github: 'https://github.com/Viva03/Flairquest2',
    linkLabel: 'View on GitHub →',
    badge: null,
    inProgress: false,
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: hovered ? '#0D0D0D' : 'transparent',
          borderLeft: hovered ? '4px solid #F5A623' : '4px solid transparent',
          borderRadius: '8px',
          padding: 'clamp(1.2rem, 3vw, 2rem)',
          paddingTop: 'clamp(2.5rem, 4vw, 3rem)',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          gap: '2rem',
          alignItems: 'start',
          transition: 'background 0.25s ease, border-color 0.25s ease',
          position: 'relative',
          cursor: 'default',
        }}
      >
        {/* ── Left: Name + Tag ── */}
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
            {project.inProgress && (
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{
                  fontSize: '0.7rem', fontFamily: 'Inter', fontWeight: 600,
                  padding: '0.2rem 0.7rem', borderRadius: '999px',
                  border: '1px solid #F5A623', color: '#F5A623',
                  letterSpacing: '0.04em',
                }}
              >
                In Progress
              </motion.span>
            )}
            {project.badge && (
              <span style={{
                fontSize: '0.7rem', fontFamily: 'Inter', fontWeight: 600,
                padding: '0.2rem 0.7rem', borderRadius: '999px',
                border: '1px solid #F5A623', color: '#F5A623',
                letterSpacing: '0.04em',
              }}>
                {project.badge}
              </span>
            )}
          </div>

          <h3 className="project-name" style={{
            fontFamily: 'Anton, sans-serif',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
            color: '#F5A623',
            lineHeight: 1.1,
            marginBottom: '0.6rem',
          }}>
            {project.name}
          </h3>

          <span style={{
            display: 'inline-block',
            fontSize: '0.72rem',
            fontFamily: 'Inter',
            fontWeight: 600,
            padding: '0.25rem 0.75rem',
            borderRadius: '999px',
            border: '1px solid #F5A623',
            color: '#F5A623',
            letterSpacing: '0.06em',
          }}>
            {project.tag}
          </span>
        </div>

        {/* ── Center: Description ── */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(0.85rem, 1.1vw, 0.97rem)',
          lineHeight: 1.75,
          color: 'var(--text-body)',
        }}>
          {project.description}
        </p>

        {/* ── Right: Stack + Link ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
          <div className="project-tech-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.stack.map(tech => (
              <span
                key={tech}
                style={{
                  fontSize: '0.68rem',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  background: '#0D0D0D',
                  border: '1px solid #F5A623',
                  color: '#F5A623',
                  letterSpacing: '0.04em',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.a
            href={project.github || 'https://github.com/vivabaranwal'}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginTop: '0.5rem',
              padding: '0.5rem 1.1rem',
              borderRadius: '999px',
              border: '1px solid #F5A623',
              color: '#F5A623',
              fontFamily: 'Inter',
              fontSize: '0.8rem',
              fontWeight: 600,
              textDecoration: 'none',
              background: 'transparent',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#F5A623'
              e.currentTarget.style.color = '#000'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#F5A623'
            }}
          >
            <FiGithub />
            View on GitHub →
          </motion.a>
        </div>
      </motion.div>

      {/* Dashed golden divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        style={{
          borderTop: '1px dashed #F5A623',
          opacity: 0.25,
          margin: '0.5rem 0',
        }}
      />
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects-inner"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Deco */}
      <div style={{
        position: 'absolute', top: '5%', right: '-100px',
        width: '350px', height: '350px', borderRadius: '50%',
        border: '1px solid #F5A623', opacity: 0.08, pointerEvents: 'none',
      }} />

      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 'clamp(3.5rem, 8vw, 7rem)',
          color: 'var(--text-heading)',
          textTransform: 'uppercase',
          lineHeight: 0.9,
          marginBottom: '3rem',
        }}
      >
        PROJECTS
      </motion.h2>

      <div>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects-inner [style*="grid-template-columns: 1fr 2fr 1fr"] {
            grid-template-columns: 1fr !important;
            padding: 1.5rem !important;
          }
          .project-tech-stack {
            flex-wrap: wrap !important;
            gap: 6px !important;
          }
          .project-name {
            font-size: clamp(1.5rem, 6vw, 2.5rem) !important;
          }
          .projects-heading {
            font-size: clamp(3rem, 14vw, 5rem) !important;
          }
        }
      `}</style>
    </section>
  )
}
