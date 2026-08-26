import { STATS } from '@/config/site'
import styles from './StatsBar.module.css'

export default function StatsBar() {
  return (
    <div className={styles.bar} aria-label="Key event statistics">
      <div className={`container ${styles.inner}`}>
        {STATS.map((stat) => (
          <div key={stat.id} className={styles.stat}>
            <span className={styles.value}>
              {'prefix' in stat && stat.prefix ? stat.prefix : ''}
              {stat.value > 0 ? stat.value.toLocaleString() : '—'}
              {stat.suffix}
            </span>
            <span className={styles.label}>{stat.label}</span>
            {!stat.confirmed && (
              <span className={`badge-tba ${styles.tbaBadge}`} aria-label="To be announced">TBA</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
