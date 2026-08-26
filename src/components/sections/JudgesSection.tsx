import { judges, mentors } from '@/data/judges'
import styles from './JudgesSection.module.css'

const hasContent = judges.length > 0 || mentors.length > 0

export default function JudgesSection() {
  return (
    <section id="judges" className={`section ${styles.section}`} aria-labelledby="judges-heading">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>// People</p>
          <h2 id="judges-heading" className={styles.heading}>Judges &amp; Mentors</h2>
        </header>

        {!hasContent ? (
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon} aria-hidden="true">👥</div>
            <p className={styles.placeholderText}>
              Our judges and mentors will be announced soon. Stay tuned!
            </p>
            <span className="badge-tba">Announced Soon</span>
          </div>
        ) : (
          <>
            {judges.length > 0 && (
              <div className={styles.group}>
                <h3 className={styles.groupHeading}>Judges</h3>
                <ul className={styles.grid} role="list">
                  {judges.map((person) => (
                    <li key={person.id} className={styles.card}>
                      <img src={person.photoUrl} alt={`Photo of ${person.name}`} className={styles.photo} loading="lazy" />
                      <p className={styles.name}>{person.name}</p>
                      <p className={styles.role}>{person.role}</p>
                      <p className={styles.org}>{person.organization}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {mentors.length > 0 && (
              <div className={styles.group}>
                <h3 className={styles.groupHeading}>Mentors</h3>
                <ul className={styles.grid} role="list">
                  {mentors.map((person) => (
                    <li key={person.id} className={styles.card}>
                      <img src={person.photoUrl} alt={`Photo of ${person.name}`} className={styles.photo} loading="lazy" />
                      <p className={styles.name}>{person.name}</p>
                      <p className={styles.role}>{person.role}</p>
                      <p className={styles.org}>{person.organization}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
