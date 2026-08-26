import { prizes } from '@/data/prizes'
import styles from './PrizesSection.module.css'

// Sort: rank 1 centre (index 1), rank 2 left (index 0), rank 3 right (index 2)
const podiumOrder = [
  prizes.find((p) => p.rank === 2),
  prizes.find((p) => p.rank === 1),
  prizes.find((p) => p.rank === 3),
].filter(Boolean)

export default function PrizesSection() {
  return (
    <section id="prizes" className={`section ${styles.section}`} aria-labelledby="prizes-heading">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>// Prizes</p>
          <h2 id="prizes-heading" className={styles.heading}>Prize Pool</h2>
        </header>

        <div className={styles.podium} role="list" aria-label="Prize rankings">
          {podiumOrder.map((prize) => {
            if (!prize) return null
            const isFirst = prize.rank === 1
            return (
              <div
                key={prize.id}
                className={`${styles.tier} ${isFirst ? styles.tierFirst : ''}`}
                role="listitem"
              >
                <div className={styles.chest} aria-hidden="true">
                  {prize.rank === 1 ? '🏆' : prize.rank === 2 ? '🥈' : '🥉'}
                </div>
                <p className={styles.rank}>#{prize.rank} {prize.label}</p>
                <p className={styles.amount}>
                  {prize.amount === 'TBA' ? (
                    <span className="badge-tba">Prize TBA</span>
                  ) : (
                    prize.amount
                  )}
                </p>
                {prize.perks.length > 0 && (
                  <ul className={styles.perks} role="list">
                    {prize.perks.map((perk, i) => <li key={i}>{perk}</li>)}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
