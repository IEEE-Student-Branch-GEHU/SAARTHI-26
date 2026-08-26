import { useState } from 'react'
import { faqs } from '@/data/faq'
import styles from './FAQSection.module.css'

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className={`section ${styles.section}`} aria-labelledby="faq-heading">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>// Questions</p>
          <h2 id="faq-heading" className={styles.heading}>FAQ</h2>
        </header>

        <dl className={styles.list}>
          {faqs.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <dt>
                  <button
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-btn-${item.id}`}
                    onClick={() => toggle(item.id)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.icon} aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  className={styles.answer}
                  hidden={!isOpen}
                >
                  <div className={styles.answerInner}>
                    <p>{item.answer}</p>
                    {!item.confirmed && (
                      <span className={`badge-tba ${styles.tbaBadge}`} aria-label="Answer subject to change">Subject to change</span>
                    )}
                  </div>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
