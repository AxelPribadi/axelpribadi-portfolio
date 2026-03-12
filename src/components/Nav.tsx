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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <nav className="nav">
      <div className="nav__logo">ᮃᮟᮨᮜ᮪<span>ᮕᮢᮤᮘᮓᮤ</span></div>
      <ul className="nav__links">
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
        <li>
          <button className="nav__theme-btn theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </li>
      </ul>
    </nav>
  )
}
