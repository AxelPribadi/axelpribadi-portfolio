import './Nav.less'
import { useState, useEffect } from 'react'
import SunIcon from './icons/Sun'
import MoonIcon from './icons/Moon'

const links = ['Home', 'About', 'Projects', 'Contact']

function getTheme() {
  return document.documentElement.getAttribute('data-theme') as 'dark' | 'light'
}

export default function Nav() {
  const [theme, setTheme] = useState<'dark' | 'light'>(getTheme)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav">
      <div className="nav__logo">ᮃᮟᮨᮜ᮪<span>ᮕᮢᮤᮘᮓᮤ</span></div>

      <ul className="nav__links">
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div className="nav__actions">
        <button className="nav__theme-btn theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ul className={`nav__dropdown${menuOpen ? ' nav__dropdown--open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
