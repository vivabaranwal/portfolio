import { useState, createContext, useContext } from 'react'
import './index.css'

export const ThemeContext = createContext(null)
export function useTheme() { return useContext(ThemeContext) }

export default function App() {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <h1 style={{ color: 'var(--text-heading)', padding: '2rem' }}>Portfolio Scaffold</h1>
      </div>
    </ThemeContext.Provider>
  )
}
