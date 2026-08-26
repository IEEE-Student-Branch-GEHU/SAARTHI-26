import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { BRAND_SHORT_NAME, REGISTRATION_URL, REGISTRATION_OPEN } from '@/config/site'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Tracks',   href: '#tracks' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes',   href: '#prizes' },
  { label: 'FAQ',      href: '#faq' },
] as const

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1))

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false)
  const [menuOpen,      setMenuOpen]      = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  /* Detect scroll to apply frosted-glass effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={styles.nav} aria-label="Primary navigation">
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label={`${BRAND_SHORT_NAME} — home`}>
            <span className={styles.logoMark} aria-hidden="true">⬡</span>
            <span className={styles.logoText}>{BRAND_SHORT_NAME}</span>
          </Link>

          {/* Desktop links */}
          <ul className={styles.links} role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.slice(1)
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`${styles.link} ${activeId === sectionId ? styles.active : ''}`}
                    aria-current={activeId === sectionId ? 'true' : undefined}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Register CTA */}
          <div className={styles.cta}>
            {REGISTRATION_OPEN && REGISTRATION_URL ? (
              <a
                href={REGISTRATION_URL}
                className={styles.registerBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            ) : (
              <span className={styles.registerBtnDisabled} title="Registration opens soon">
                Register Soon
              </span>
            )}
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list" className={styles.mobileLinks}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={styles.mobileLink}
                onClick={handleNavClick}
              >
                {label}
              </a>
            </li>
          ))}
          {REGISTRATION_OPEN && REGISTRATION_URL ? (
            <li>
              <a
                href={REGISTRATION_URL}
                className={styles.mobileRegisterBtn}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                Register Now
              </a>
            </li>
          ) : (
            <li>
              <span className={styles.mobileRegisterBtnDisabled}>Registration Opens Soon</span>
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}
