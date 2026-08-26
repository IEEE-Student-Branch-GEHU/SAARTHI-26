import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className={styles.main}>
        <div className={`container ${styles.content}`}>
          <div className={styles.code} aria-hidden="true">404</div>
          <h1 className={styles.heading}>Block Not Found</h1>
          <p className={styles.body}>
            This block doesn't exist in our world. Head back to the portal.
          </p>
          <Link to="/" className={styles.btn}>← Return Home</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
