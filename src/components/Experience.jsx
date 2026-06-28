import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiCheck, FiLock, FiZap } from 'react-icons/fi'

const LEVELS = [
  {
    id: 1,
    label: 'LVL 1',
    status: 'completed', // 'completed' | 'inprogress' | 'locked'
    company: "Founders Club, SRMIST",
    role: 'Technical Lead',
    duration: '2024 – Present',
    dept: null,
    bullets: [
      "Lead the technical direction and infrastructure of one of SRM's most active entrepreneurship clubs",
      'Mentored 86 students across 15–17 technical project teams',
      'Directed end-to-end technical execution of Foundathon 2.0 — a domain-based hackathon with 20+ participants',
      'Venue SPOC for a club event with 500+ attendees — handled full logistics and coordination',
      'Coordinated club participation for Smart India Hackathon at the SRM level',
      'Won 3rd Place at MozoHack by SRMKZILLA (April 2026) — built and shipped under hackathon pressure',
    ],
    xp: '+400 XP · Leadership Mode Active ⚡',
    xpColor: '#58CC02',
    progress: 100,
  },
  {
    id: 2,
    label: 'LVL 2',
    status: 'completed',
    company: 'Brainvire',
    role: 'Software Engineering Intern',
    duration: 'June – July 2025 · 1 Month · Gujarat (Offline)',
    dept: 'Microsoft Department — .NET Core MVC, C#, MS SQL Server',
    bullets: [
      'Learned and applied Microsoft technology stack in a real corporate environment',
      'Contributed to software development tasks end to end',
      'First exposure to professional development workflows, code reviews, and team collaboration',
      'Built foundational understanding of enterprise-grade web development with ASP.NET Core MVC',
    ],
    xp: '+300 XP · .NET Stack Unlocked 🔓',
    xpColor: '#58CC02',
    progress: 100,
  },
  {
    id: 3,
    label: 'LVL 3',
    status: 'completed',
    company: 'Brainvire',
    role: 'AI Intern',
    duration: 'Dec 2025',
    dept: null,
    bullets: [
      'Built the AI SOW Generator — a full-stack AI pipeline using FastAPI, LangGraph, Pinecone, and Gemini',
      'Reduced a 2–3 week manual Statement of Work process to under 30 minutes end to end',
      'Integrated RAG pipeline pulling from a Pinecone knowledge base of historical project data',
      'Generated validated, downloadable SOW documents from client meeting transcripts automatically',
    ],
    xp: '+500 XP · RAG Pipelines Unlocked 🔓',
    xpColor: '#58CC02',
    progress: 100,
  },
  {
    id: 4,
    label: 'LVL 4',
    status: 'inprogress',
    company: 'Staqo Pvt. Ltd.',
    role: 'Software Engineering Intern — Onsite, Paid',
    duration: 'June – July 2026',
    dept: null,
    bullets: [
      'Building MediMind AI — a clinical intelligence layer for hospitals and clinics',
      'Designing role-specific AI workflows for receptionists, junior doctors, and senior doctors',
      'Building across reception, assessment, diagnosis, documentation, prescriptions, and follow-ups',
      'Targeting 100+ medical staff across 5 hospitals and clinics in production',
    ],
    xp: '+600 XP · Healthcare AI Active ⚡',
    xpColor: '#F5A623',
    progress: 60,
  },
  {
    id: 5,
    label: 'LVL 5',
    status: 'inprogress',
    company: 'IFQM',
    role: 'Intern',
    duration: 'June – Aug 2026',
    dept: null,
    bullets: [
      'Building a RAG-based, citation-aware multi-agent pipeline for business case study generation',
      'Pipeline: Researcher Agent → Writer Agent → Fact Checker Agent → Editorial Agent',
      'Outputs modeled on Harvard Business School and MIT Sloan Management Review standards',
      'Built on FastAPI + PostgreSQL + vector DB — transforms raw company reports in minutes',
    ],
    xp: '+800 XP · Multi-Agent Systems Active ⚡',
    xpColor: '#F5A623',
    progress: 40,
  },
]

function NodeIcon({ status }) {
  if (status === 'completed') return <FiCheck size={22} strokeWidth={3} />
  if (status === 'inprogress') return <FiZap size={20} />
  return <FiLock size={18} />
}

function XPBar({ progress, color }) {
  return (
    <div style={{
      width: '4px',
      height: '80px',
      background: '#1A1A1A',
      borderRadius: '4px',
      overflow: 'hidden',
      margin: '0 auto',
    }}>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        style={{
          width: '100%',
          background: color,
          borderRadius: '4px',
        }}
      />
    </div>
  )
}

function LevelNode({ level, index, isOpen, onToggle, isInView: inView }) {
  const borderColor = level.status === 'completed' ? '#58CC02'
    : level.status === 'inprogress' ? '#F5A623' : '#333333'
  const bgColor = level.status === 'completed' ? '#58CC02'
    : level.status === 'inprogress' ? '#F5A623' : '#1A1A1A'
  const textColor = (level.status === 'completed' || level.status === 'inprogress') ? '#000' : '#555'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {/* ── Node button ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2, type: 'spring', stiffness: 200 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', position: 'relative' }}
      >
        {/* Pulse ring for in-progress */}
        {level.status === 'inprogress' && (
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: '64px', height: '64px',
              borderRadius: '50%',
              border: '2px solid #F5A623',
              pointerEvents: 'none',
              top: 0, left: 0,
            }}
          />
        )}

        {/* Green glow for completed */}
        {level.status === 'completed' && (
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{
              position: 'absolute',
              width: '64px', height: '64px',
              borderRadius: '50%',
              boxShadow: '0 0 20px #58CC0288',
              pointerEvents: 'none',
            }}
          />
        )}

        <motion.button
          onClick={onToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: '64px', height: '64px',
            borderRadius: '50%',
            background: bgColor,
            border: `3px solid ${borderColor}`,
            color: textColor,
            cursor: level.status === 'locked' ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <NodeIcon status={level.status} />
        </motion.button>

        <span style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: '0.85rem',
          color: borderColor,
          letterSpacing: '0.08em',
        }}>
          {level.label}
        </span>
      </motion.div>

      {/* ── Expanded card ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden', width: '100%', maxWidth: '680px', marginTop: '1.2rem' }}
          >
            <div className="exp-card" style={{
              background: '#0D0D0D',
              borderLeft: `4px solid ${borderColor}`,
              borderRadius: '8px',
              padding: '1.5rem 2rem',
              marginBottom: '0.5rem',
            }}>
              <div className="exp-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h3 className="exp-card-text" style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '0.25rem' }}>
                    {level.company}
                  </h3>
                  <p className="exp-card-text" style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: '#F5A623', fontWeight: 600 }}>
                    {level.role}
                  </p>
                  <p className="exp-card-text" style={{ fontFamily: 'Inter', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {level.duration}
                  </p>
                </div>

                {/* XP badge */}
                <span className="exp-xp-badge" style={{
                  display: 'inline-block',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '999px',
                  background: `${level.xpColor}22`,
                  border: `1px solid ${level.xpColor}`,
                  color: level.xpColor,
                  fontFamily: 'Inter',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                }}>
                  {level.xp}
                </span>
              </div>

              {level.dept && (
                <p className="exp-card-text" style={{
                  fontFamily: 'Inter', fontSize: '0.85rem',
                  color: 'var(--text-muted)', marginBottom: '1rem',
                  fontStyle: 'italic',
                }}>
                  {level.dept}
                </p>
              )}

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {level.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    className="exp-card-text"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
                      fontFamily: 'Inter', fontSize: '0.9rem',
                      color: 'var(--text-body)', lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: borderColor, flexShrink: 0, marginTop: '0.1em', fontWeight: 700 }}>—</span>
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Experience() {
  const [openLevel, setOpenLevel] = useState(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.15 })

  const toggle = (id) => setOpenLevel(prev => prev === id ? null : id)

  return (
    <section
      style={{
        background: 'var(--bg)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Deco blobs */}
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '280px', height: '280px', borderRadius: '50%',
        border: '1px solid #58CC02', opacity: 0.08, pointerEvents: 'none',
      }} />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          color: 'var(--text-heading)',
          textTransform: 'uppercase',
          lineHeight: 0.9,
          marginBottom: '1rem',
        }}
      >
        WORK EXPERIENCE
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontFamily: 'Dancing Script, cursive',
          fontSize: '1.3rem',
          color: '#F5A623',
          marginBottom: '4rem',
        }}
      >
        Level up your understanding — click any node.
      </motion.p>

      {/* ── Level map ── */}
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0,
          maxWidth: '720px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {LEVELS.map((level, i) => (
          <div key={level.id} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LevelNode
              level={level}
              index={i}
              isOpen={openLevel === level.id}
              onToggle={() => toggle(level.id)}
              isInView={isInView}
            />

            {/* XP bar connector between nodes (not after last) */}
            {i < LEVELS.length - 1 && (
              <div style={{ margin: '0.75rem 0' }}>
                <XPBar
                  progress={LEVELS[i + 1].status === 'locked' ? 0 : level.progress}
                  color={level.xpColor}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-card {
            padding: 1rem !important;
          }
          .exp-card-text {
            font-size: 0.9rem !important;
          }
          .exp-xp-badge {
            white-space: normal !important;
            word-wrap: break-word !important;
          }
        }
      `}</style>
    </section>
  )
}
