import { tracks, tracksPlaceholder } from '@/data/tracks'
import styles from './TracksSection.module.css'

export default function TracksSection() {
  return (
    <section id="tracks" className={`section ${styles.section}`} aria-labelledby="tracks-heading">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>// {tracksPlaceholder.heading}</p>
          <h2 id="tracks-heading" className={styles.heading}>{tracksPlaceholder.subheading}</h2>
        </header>

        {tracks.length === 0 ? (
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon} aria-hidden="true">⬡</div>
            <p className={styles.placeholderText}>{tracksPlaceholder.body}</p>
            <span className="badge-tba">Tracks Announced Soon</span>
          </div>
        ) : (
          <ul className={styles.grid} role="list">
            {tracks.map((track) => (
              <li key={track.id} className={styles.card}>
                <div className={styles.cardIcon} aria-hidden="true" style={{ color: track.accentColor }}>
                  ⬡
                </div>
                <h3 className={styles.cardTitle}>{track.name}</h3>
                <p className={styles.cardDesc}>{track.description}</p>
                <ul className={styles.tags} role="list">
                  {track.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>{tag}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
