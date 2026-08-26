import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import styles from './Rules.module.css'

/**
 * Rules page
 *
 * PLACEHOLDER — official rules have not been provided.
 * Replace the placeholder content below with the actual ruleset.
 */
export default function Rules() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <div className={`container ${styles.content}`}>
          <Link to="/" className={styles.back}>← Back to home</Link>

          <header className={styles.header}>
            <p className={styles.eyebrow}>// Official</p>
            <h1 className={styles.heading}>Rules &amp; Guidelines</h1>
            <p className={styles.subtitle}>SAARTHI Hackathon 2026</p>
          </header>

          <div className={styles.placeholder}>
            <span className="badge-tba">Rules Coming Soon</span>
            <p>
              The official rules and guidelines for SAARTHI Hackathon 2026 will be published here.
              Please check back closer to the event date.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
