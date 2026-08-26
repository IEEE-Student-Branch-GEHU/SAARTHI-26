import { EVENT_NAME, EVENT_DATES, EVENT_THEME, VENUE } from '@/config/site'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section id="about" className={`section ${styles.section}`} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Text column */}
          <div className={styles.textCol}>
            <p className={styles.eyebrow}>// About the Event</p>
            <h2 id="about-heading" className={styles.heading}>What is {EVENT_NAME}?</h2>
            <p className={styles.body}>
              SAARTHI is a {EVENT_DATES.durationHours}-hour Open Innovation hackathon where
              students and developers come together to build solutions that matter. Bring any
              idea — the only theme is innovation.
            </p>
            <p className={styles.body}>
              The name SAARTHI means <em>"guide"</em> — and that is our promise: to guide the next
              generation of builders toward creating meaningful technology.
            </p>

            <dl className={styles.facts}>
              <div className={styles.factItem}>
                <dt className={styles.factLabel}>Date</dt>
                <dd className={styles.factValue}>{EVENT_DATES.label}</dd>
              </div>
              <div className={styles.factItem}>
                <dt className={styles.factLabel}>Theme</dt>
                <dd className={styles.factValue}>{EVENT_THEME}</dd>
              </div>
              <div className={styles.factItem}>
                <dt className={styles.factLabel}>Duration</dt>
                <dd className={styles.factValue}>{EVENT_DATES.durationHours} Hours</dd>
              </div>
              <div className={styles.factItem}>
                <dt className={styles.factLabel}>Venue</dt>
                <dd className={styles.factValue}>
                  {VENUE.confirmed ? (
                    VENUE.name
                  ) : (
                    <span>
                      {VENUE.name}&nbsp;
                      <span className="badge-tba" aria-label="Venue to be confirmed">TBA</span>
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </div>

          {/* Visual column — Phase 4 will add an animated voxel element here */}
          <div className={styles.visualCol} aria-hidden="true">
            <div className={styles.visualPlaceholder}>
              <span className={styles.bigHex}>⬡</span>
              <span className={styles.visualLabel}>
                {EVENT_THEME}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
