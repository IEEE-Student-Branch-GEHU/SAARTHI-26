import { timeline } from '@/data/timeline'
import styles from './TimelineSection.module.css'

export default function TimelineSection() {
  return (
    <section id="timeline" className={`section ${styles.section}`} aria-labelledby="timeline-heading">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>// Schedule</p>
          <h2 id="timeline-heading" className={styles.heading}>Timeline</h2>
        </header>

        <ol className={styles.list}>
          {timeline.map((event, idx) => (
            <li
              key={event.id}
              className={`${styles.item} ${event.active ? styles.active : ''} ${event.completed ? styles.completed : ''}`}
            >
              <div className={styles.connector} aria-hidden="true">
                <div className={styles.dot} />
                {idx < timeline.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <div className={styles.dateRow}>
                  <span className={styles.date}>{event.date}</span>
                  {!event.confirmed && (
                    <span className="badge-tba" aria-label="Date to be confirmed">TBA</span>
                  )}
                </div>
                <h3 className={styles.phase}>{event.phase}</h3>
                <p className={styles.description}>{event.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
