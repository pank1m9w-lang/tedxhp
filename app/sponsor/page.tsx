import Link from 'next/link'
import styles from './page.module.css'

export default function SponsorPage() {
  return (
    <main>
      <section className={styles.sponsorHero}>
        <div className="container">
          <h1 className={styles.heroTitle}>SPONSORSHIP PLAN</h1>
          <p className={styles.heroSubtitle}>スポンサープランのご案内</p>
          <p className={styles.heroTheme}>Roots for Well-being, Innovation</p>
          <p className={styles.heroDescription}>
            TEDx Tsushima Youthは完全に非営利で開催され、運営・登壇者サポートはすべてボランティアによって支えられています。<br />
            そのため、イベントの運営費・装飾・高校生スピーカー支援・アフターパーティーなど、皆さまからのご支援によって成り立っています。
          </p>
          <a href="#plans" className={styles.ctaButton}>支援プランを見る</a>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>TEDxというネットワークについて</h2>
          <p className={styles.sectionDescription}>
            TEDxは「Ideas Worth Spreading（広める価値のあるアイデア）」を共有するための世界的なネットワークです。<br />
            TEDx Tsushima Youthは、その理念のもと、地域の高校生や若者が自らのアイデアを発信する舞台を創ります。
          </p>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="https://www.canva.com/design/DAGzreszYSA/5ha1spfaUzHONaJNiZfmRQ/view" target="_blank" rel="noopener noreferrer" className={styles.canvaButton}>
              詳細資料を見る
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>なぜスポンサーが必要なのか</h2>
          <p className={styles.sectionDescription}>
            TEDx Tsushima Youth では、完全非営利で運営されており、スタッフ・登壇者の活動もボランティアです。<br />
            そのため、装飾や参加者用グッズ、アフターパーティーなどを支援してくださるスポンサーの存在が欠かせません。<br />
            <strong>スポンサーシップは「支援」だけでなく、「ともにTEDxを創る」パートナーシップです。</strong>
          </p>
        </div>
      </section>

      <section className={styles.section} id="plans">
        <div className="container">
          <h2 className={styles.sectionTitle}>SPONSOR PLAN</h2>
          <p className={styles.sectionSubtitle}>ご協賛プラン</p>

          <div className={styles.plansGrid}>
            <div className={styles.planCard}>
              <div className={styles.planIcon}>🎨</div>
              <h3 className={styles.planTitle}>会場装飾・ワークショップ費用支援</h3>
              <p className={styles.planDescription}>高校生がワクワクする空間を演出するための装飾・演出費用</p>
              <p className={styles.planPrice}>25,000円/口</p>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planIcon}>🍽</div>
              <h3 className={styles.planTitle}>Speaker向けアフターパーティー支援</h3>
              <p className={styles.planDescription}>登壇者のアフターパーティー飲食費</p>
              <p className={styles.planPrice}>25,000円/口</p>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planIcon}>💧</div>
              <h3 className={styles.planTitle}>Speaker / Audience向け飲料支援</h3>
              <p className={styles.planDescription}>約200本の水やお茶などの購入費用</p>
              <p className={styles.planPrice}>25,000円/口</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>SPONSOR BENEFITS</h2>
          <p className={styles.sectionSubtitle}>スポンサー特典</p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitNumber}>01</div>
              <p>2名までトーク・ワークショップに無料招待</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitNumber}>02</div>
              <p>アフターパーティーに1名あたり2,000円で参加可能</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitNumber}>03</div>
              <p>各種SNS・公式HP・会場内で企業ロゴ等をPR</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitNumber}>04</div>
              <p>岡山オリジナルの空間演出・装飾に貢献可能</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>AUDIENCE TICKET</h2>
          <p className={styles.sectionSubtitle}>参加チケット</p>

          <div className={styles.ticketInfo}>
            <div className={styles.ticketItem}>
              <p className={styles.ticketLabel}>talk＋ワークショップ参加</p>
              <p className={styles.ticketValue}>1,000円</p>
            </div>
            <div className={styles.ticketItem}>
              <p className={styles.ticketLabel}>アフターパーティー参加</p>
              <p className={styles.ticketValue}>5,000円<span className={styles.ticketNote}>（高校生以下無料）</span></p>
            </div>
            <div className={styles.ticketItem}>
              <p className={styles.ticketLabel}>支払方法</p>
              <p className={styles.ticketValue}>当日会場支払い</p>
            </div>
            <div className={styles.ticketItem}>
              <p className={styles.ticketLabel}>申し込み締切</p>
              <p className={styles.ticketValue}>12月12日まで</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>CONTACT</h2>
          <p className={styles.sectionSubtitle}>お問い合わせ</p>

          <div className={styles.contactInfo}>
            <p><strong>問い合わせ先：</strong>TEDx Tsushima Youth 実行委員会（岡山大学DS部）</p>
            <p><strong>電話：</strong><a href="tel:080-6305-4024">080-6305-4024</a></p>
            <p><strong>メール：</strong><a href="mailto:sou_kumagai@s.okayama-u.ac.jp">sou_kumagai@s.okayama-u.ac.jp</a></p>
          </div>
        </div>
      </section>
    </main>
  )
}
