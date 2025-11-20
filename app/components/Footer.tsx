import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src="/images/tedx-logo-white-new.png" alt="TEDx Tsushima Youth" className={styles.footerLogoImg} />
          </div>
          <div className={styles.footerInfo}>
            <p>&copy; 2025 TEDx Tsushima Youth. All rights reserved.</p>
            <p>This independent TEDx event is operated under license from TED.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
