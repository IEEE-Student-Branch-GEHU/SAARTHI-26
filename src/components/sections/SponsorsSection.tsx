import { sponsors, sponsorTierOrder } from '@/data/sponsors'
import styles from './SponsorsSection.module.css'

export default function SponsorsSection() {
  const hasSponsor = sponsors.length > 0

  return (
    <section id="sponsors" className={`section ${styles.section}`} aria-labelledby="sponsors-heading">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>// Partners</p>
          <h2 id="sponsors-heading" className={styles.heading}>Sponsors &amp; Partners</h2>
        </header>

        {!hasSponsor ? (
          <div className={styles.placeholder}>
            <p className={styles.placeholderText}>
              Sponsorship information will be announced soon.
            </p>
            <span className="badge-tba">Coming Soon</span>
          </div>
        ) : (
          <div className={styles.tiers}>
            {sponsorTierOrder.map(({ tier, label }) => {
              const tieredSponsors = sponsors.filter((s) => s.tier === tier)
              if (tieredSponsors.length === 0) return null
              return (
                <div key={tier} className={styles.tier}>
                  <p className={styles.tierLabel}>{label}</p>
                  <ul className={`${styles.grid} ${styles[`grid_${tier}`]}`} role="list">
                    {tieredSponsors.map((sponsor) => (
                      <li key={sponsor.id}>
                        <a
                          href={sponsor.websiteUrl}
                          className={styles.sponsorCard}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${sponsor.name} website`}
                        >
                          <img src={sponsor.logoUrl} alt={sponsor.name} className={styles.logo} loading="lazy" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
