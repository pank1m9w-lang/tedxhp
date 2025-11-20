'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  const [showJoinButton, setShowJoinButton] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleHeroClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)
    if (newCount >= 3) {
      setShowJoinButton(true)
    }
  }

  return (
    <main>
      <section
        className={`${styles.hero} ${showJoinButton ? styles.heroRedBackground : ''}`}
        onClick={handleHeroClick}
      >
        <div className={styles.heroContainer}>
          <div className={styles.heroSplitLayout}>
            <div className={styles.heroLeft}>
              <div className={styles.heroVideoContainer}>
                <video className={styles.heroTreeVideo} autoPlay muted loop playsInline>
                  <source src="/images/imagetree.mp4" type="video/mp4" />
                </video>
              </div>
              <div className={styles.heroLeftText}>
                <h2 className={styles.heroLocationText}>岡山から、<br />より良い未来を<br />少しずつ形にしていく。</h2>
              </div>
            </div>

            <div className={styles.heroRight}>
              <h1 className={styles.heroTitle}>TEDx Tsushima <span className={styles.heroYouth}>Youth</span></h1>
              <div className={styles.heroThemeBox}>
                <p className={styles.heroTheme}>Protopia: Roots for Well-being, Innovation</p>
              </div>

              <div className={styles.heroDateSection}>
                <div className={styles.heroYear}>2025</div>
                <div className={styles.heroDate}>12/20</div>
                <div className={styles.heroVenueBox}>
                  <p>@岡山大学<br />共育共創コモンズ</p>
                </div>
              </div>

              <div className={styles.heroDescriptionSections}>
                <div className={styles.heroDescriptionItem}>
                  <h3>--- What is TEDx ?</h3>
                  <p>TEDの理念に共感し、地域発のアイデアを世界に共有するためのプラットフォーム。Ideas worth Spreading.という考え方のもと、地域から発信していくことの重要性を強調しています。</p>
                </div>

                <div className={styles.heroDescriptionItem}>
                  <h3>--- What is Youth ?</h3>
                  <p>TEDxの中でも、中高生をはじめとする10代の若者が主役のTEDxはTEDx Youthとして開催できます。岡山の若者が、岡山の地から、発信するアイデアにきっと驚かされます。</p>
                </div>

                <div className={styles.heroDescriptionItem}>
                  <h3>--- What is Protopia ?</h3>
                  <p>Protopiaとは、ユートピアでもディストピアでもなく、一歩ずつ良くしていく未来のことです。遠い未来をデザインするのではなく、現代に視点を置き、改善を繰り返していく未来のことです。</p>
                </div>
              </div>

              {showJoinButton && (
                <div className={styles.heroJoinButton}>
                  <Link href="/join" className="btn btn--join">JOIN</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
