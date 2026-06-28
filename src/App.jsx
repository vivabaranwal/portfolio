import { useState, useEffect, createContext, useContext, useRef } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PortfolioIntro from './components/PortfolioIntro'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const ThemeContext = createContext(null)

export function useTheme() {
  return useContext(ThemeContext)
}

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
    document.body.style.backgroundColor = theme === 'dark' ? '#000000' : '#F5F5F0'
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  // Section refs for IntersectionObserver
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    achievements: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    const observers = []
    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (!ref.current) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(ref.current)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <Navbar activeSection={activeSection} />

        <section id="hero" ref={sectionRefs.hero}>
          <Hero />
        </section>

        <PortfolioIntro />

        <section id="about" ref={sectionRefs.about}>
          <About />
        </section>

        <section id="projects" ref={sectionRefs.projects}>
          <Projects />
        </section>

        <section id="experience" ref={sectionRefs.experience}>
          <Experience />
        </section>

        <section id="achievements" ref={sectionRefs.achievements}>
          <Achievements />
        </section>

        <section id="contact" ref={sectionRefs.contact}>
          <Contact />
        </section>

        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
