import { REGISTRATION_URL, REGISTRATION_OPEN, EVENT_DATES, EVENT_THEME } from '@/config/site'
import { usePortalCanvas } from '@/hooks/usePortalCanvas'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const canvasRef = usePortalCanvas({ interactive: true })

  return (
    <section
      id="hero"
      className={styles.hero}
      aria-labelledby="hero-heading"
    >
      {/* ── Canvas portal — decorative, aria-hidden ─────────────────────── */}
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        aria-hidden="true"
      />

      {/* ── Hero content — always readable HTML ─────────────────────────── */}
      <div className={`container ${styles.content}`}>

        {/* Eyebrow label */}
        <p className={styles.eyebrow} aria-hidden="true">
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Open Innovation Hackathon</span>
          <span className={styles.eyebrowLine} />
        </p>

        {/* Primary heading — h1, one per page */}
        <h1 id="hero-heading" className={styles.heading}>
          <span className={styles.headingMain}>SAARTHI</span>
          <span className={styles.headingSub}>Hackathon 2026</span>
        </h1>

        {/* Event meta pills */}
        <div className={styles.meta} role="list" aria-label="Event details">
          <span className={styles.metaItem} role="listitem">
            <span className={styles.metaDot} aria-hidden="true" />
            <time dateTime="2026-11-02/2026-11-04">{EVENT_DATES.label}</time>
          </span>
          <span className={styles.metaSep} aria-hidden="true">·</span>
          <span className={styles.metaItem} role="listitem">
            <span className={styles.metaDot} aria-hidden="true" />
            {EVENT_THEME}
          </span>
          <span className={styles.metaSep} aria-hidden="true">·</span>
          <span className={styles.metaItem} role="listitem">
            <span className={styles.metaDot} aria-hidden="true" />
            {EVENT_DATES.durationHours}h of Hacking
          </span>
        </div>

        {/* CTAs */}
        <div className={styles.actions}>
          {REGISTRATION_OPEN && REGISTRATION_URL ? (
            <a
              id="hero-register-btn"
              href={REGISTRATION_URL}
              className={styles.primaryBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.primaryBtnRing} aria-hidden="true" />
              Enter the Hackathon
              <span className={styles.primaryBtnArrow} aria-hidden="true">→</span>
            </a>
          ) : (
            <button
              id="hero-register-btn"
              className={styles.primaryBtnDisabled}
              disabled
              aria-disabled="true"
            >
              Registration Opens Soon
            </button>
          )}
          <a href="#about" className={styles.secondaryBtn}>
            Learn More
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  )
}
