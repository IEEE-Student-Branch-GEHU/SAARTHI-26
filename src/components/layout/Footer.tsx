import { Link } from 'react-router-dom'
import { BRAND_SHORT_NAME, SOCIAL, EVENT_NAME, EVENT_DATES } from '@/config/site'
import styles from './Footer.module.css'

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Tracks',   href: '#tracks' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes',   href: '#prizes' },
  { label: 'FAQ',      href: '#faq' },
]

const LEGAL_LINKS = [
  { label: 'Rules',   to: '/rules' },
]

export default function Footer() {
  const year = EVENT_DATES.start.getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo} aria-label={`${BRAND_SHORT_NAME} — home`}>
            <span className={styles.logoMark} aria-hidden="true">⬡</span>
            <span className={styles.logoText}>{BRAND_SHORT_NAME}</span>
          </Link>
          <p className={styles.tagline}>{EVENT_NAME}</p>
          <p className={styles.tagline}>{EVENT_DATES.label}</p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation" className={styles.navBlock}>
          <p className={styles.colHeading}>Navigate</p>
          <ul role="list" className={styles.linkList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.footerLink}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Legal / info links */}
        <nav aria-label="Legal navigation" className={styles.navBlock}>
          <p className={styles.colHeading}>Info</p>
          <ul role="list" className={styles.linkList}>
            {LEGAL_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} className={styles.footerLink}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div className={styles.socialBlock}>
          <p className={styles.colHeading}>Follow Us</p>
          {SOCIAL.twitter || SOCIAL.instagram || SOCIAL.linkedin || SOCIAL.discord ? (
            <ul role="list" className={styles.socialList}>
              {SOCIAL.twitter    && <li><a href={SOCIAL.twitter}   className={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter / X</a></li>}
              {SOCIAL.instagram  && <li><a href={SOCIAL.instagram} className={styles.socialLink} target="_blank" rel="noopener noreferrer">Instagram</a></li>}
              {SOCIAL.linkedin   && <li><a href={SOCIAL.linkedin}  className={styles.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
              {SOCIAL.discord    && <li><a href={SOCIAL.discord}   className={styles.socialLink} target="_blank" rel="noopener noreferrer">Discord</a></li>}
            </ul>
          ) : (
            <p className={styles.tbaText}>Social links coming soon</p>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p className={styles.copyright}>
            © {year} {EVENT_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
