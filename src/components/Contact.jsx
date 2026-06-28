import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiCopy, FiCheck, FiExternalLink } from 'react-icons/fi'

const CONTACTS = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'baranwalviva@gmail.com',
    action: 'copy',
    href: null,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/viva-baranwal-224151279',
    action: 'link',
    href: 'https://linkedin.com/in/viva-baranwal-224151279',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/vivabaranwal',
    action: 'link',
    href: 'https://github.com/vivabaranwal',
  },
]

function ContactCard({ contact, index }) {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    if (contact.action === 'copy') {
      navigator.clipboard.writeText(contact.value).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2200)
      })
    }
  }

  const Icon = contact.icon
  const ActionIcon = contact.action === 'copy' ? (copied ? FiCheck : FiCopy) : FiExternalLink

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -6, boxShadow: '0 12px 40px #F5A62322' }}
      style={{
        flex: 1,
        minWidth: '220px',
        background: '#0D0D0D',
        border: '1px solid #1A1A1A',
        borderRadius: '12px',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: contact.action === 'copy' ? 'pointer' : 'default',
        transition: 'box-shadow 0.25s ease',
      }}
      className="contact-card"
      onClick={contact.action === 'copy' ? handleClick : undefined}
    >
      {/* Icon box */}
      <div style={{
        width: '48px', height: '48px',
        background: '#F5A62322',
        border: '1px solid #F5A623',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F5A623',
        fontSize: '1.3rem',
      }}>
        <Icon />
      </div>

      <div>
        <p style={{ fontFamily: 'Inter', fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
          {contact.label}
        </p>
        {contact.action === 'link' ? (
          <a
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter', fontSize: '0.85rem',
              color: 'var(--text-body)', textDecoration: 'none',
              wordBreak: 'break-all',
            }}
            onMouseEnter={e => e.target.style.color = '#F5A623'}
            onMouseLeave={e => e.target.style.color = 'var(--text-body)'}
          >
            {contact.value}
          </a>
        ) : (
          <p style={{ fontFamily: 'Inter', fontSize: '0.85rem', color: 'var(--text-body)', wordBreak: 'break-all' }}>
            {contact.value}
          </p>
        )}
      </div>

      {/* Action button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={contact.action === 'link' ? () => window.open(contact.href, '_blank') : handleClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          border: '1px solid #F5A623',
          background: 'transparent',
          color: copied ? '#58CC02' : '#F5A623',
          fontFamily: 'Inter',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'color 0.2s, border-color 0.2s',
          alignSelf: 'flex-start',
          borderColor: copied ? '#58CC02' : '#F5A623',
        }}
      >
        <ActionIcon />
        {contact.action === 'copy' ? (copied ? 'Copied!' : 'Copy email') : 'Open →'}
      </motion.button>
    </motion.div>
  )
}

export default function Contact() {
  const [toastVisible, setToastVisible] = useState(false)

  return (
    <section
      style={{
        background: 'var(--bg)',
        padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Deco */}
      <div style={{
        position: 'absolute', top: '-60px', left: '-60px',
        width: '300px', height: '300px', borderRadius: '50%',
        border: '1px solid #F5A623', opacity: 0.08, pointerEvents: 'none',
      }} />

      <motion.h2
        className="contact-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
          color: 'var(--text-heading)',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '1rem',
        }}
      >
        LET'S BUILD SOMETHING MEANINGFUL
      </motion.h2>

      <motion.p
        className="contact-subheading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
          color: '#F5A623',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '3rem',
        }}
      >
        OPEN TO INTERNSHIPS, COLLABORATIONS, AND INTERESTING PROBLEMS.
      </motion.p>

      <div style={{
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap',
      }}>
        {CONTACTS.map((c, i) => (
          <ContactCard key={c.label} contact={c} index={i} />
        ))}
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            ✓ Email copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .contact-heading {
            font-size: clamp(1.8rem, 8vw, 3rem) !important;
          }
          .contact-subheading {
            font-size: clamp(0.7rem, 3vw, 1rem) !important;
          }
          .contact-card {
            width: 100% !important;
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  )
}
