import './Footer.less'
import GitHubIcon from './icons/footer/GitHub'
import LinkedInIcon from './icons/footer/LinkedIn'
import HuggingFaceIcon from './icons/footer/HuggingFace'
import EmailIcon from './icons/footer/Email'

const navLinks = ['Home', 'About', 'Projects', 'Contact']

const socialLinks = [
  { label: 'GitHub',      icon: <GitHubIcon />,      href: 'https://github.com/AxelPribadi',           external: true  },
  { label: 'LinkedIn',    icon: <LinkedInIcon />,    href: 'https://www.linkedin.com/in/axel-pribadi/', external: true  },
  { label: 'HuggingFace', icon: <HuggingFaceIcon />, href: 'https://huggingface.co/pvtax',              external: true  },
  { label: 'Email',       icon: <EmailIcon />,       href: '#contact',                                  external: false },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">

          {/* Brand */}
          <div className="footer__brand">
            <span className="footer__logo">ᮃᮟᮨᮜ᮪<span>ᮕᮢᮤᮘᮓᮤ</span></span>
            <p className="footer__copy">© {new Date().getFullYear()} · Built with React</p>
          </div>

          {/* Nav */}
          <nav className="footer__nav">
            <span className="footer__nav-label">Quick Links</span>
            <ul>
              {navLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="footer__social">
            <span className="footer__nav-label">Connect</span>
            <ul>
              {socialLinks.map(({ label, icon, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}
