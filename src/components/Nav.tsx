import { useState, useRef, useEffect } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav>
      <a className="nav-logo" href="#hero">
        H<span>.</span>A
      </a>
      <ul className="nav-links">
        <li><a href="#about">Profil</a></li>
        <li><a href="#skills">Stack</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#experience">Expérience</a></li>
        <li><a href="#formation">Formation</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-actions">
        <div className="nav-dropdown" ref={dropdownRef}>
          <button
            className={`nav-dropdown-btn${open ? ' active' : ''}`}
            onClick={() => setOpen(prev => !prev)}
            aria-haspopup="true"
            aria-expanded={open}
          >
            Documents
            <svg className="nav-dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {open && (
            <div className="nav-dropdown-menu">
              <a
                className="nav-dropdown-item"
                href="/docs/Hector_ADJAKPA_CV_CDI.pdf"
                download="CV_Hector_Adjakpa.pdf"
              >
                <span className="dropdown-icon"></span>
                <span>
                  <span className="dropdown-label">Curriculum Vitae</span>
                  <span className="dropdown-hint">PDF</span>
                </span>
              </a>
              <a
                className="nav-dropdown-item"
                href="/lettre-recommandation.pdf"
                download="Lettre_Recommandation_Hector_Adjakpa.pdf"
              >
                <span className="dropdown-icon"></span>
                <span>
                  <span className="dropdown-label">Lettre de recommandation</span>
                  <span className="dropdown-hint">PDF</span>
                </span>
              </a>
              <a
                className="nav-dropdown-item"
                href="/docs/Lettre_de_motivation.pdf"
                download="Lettre_Motivation_Hector_Adjakpa.pdf"
              >
                <span className="dropdown-icon"></span>
                <span>
                  <span className="dropdown-label">Lettre de motivation</span>
                  <span className="dropdown-hint">PDF</span>
                </span>
              </a>
            </div>
          )}
        </div>
        <a className="nav-cta" href="mailto:hector.adjakpa@gmail.com">
          Disponible
        </a>
      </div>
    </nav>
  )
}
