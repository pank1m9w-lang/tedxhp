import styles from './page.module.css'

export default function SupportPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Support</h1>
          <p className="page-subtitle">実行委員会・協賛・後援について</p>
        </div>
      </section>

      <section className={styles.supportContent}>
        <div className="container">
          <div className={styles.organizersSection}>
            <h2>実行委員会</h2>
            <div className={styles.organizersIntro}>
              <p>TEDx Tsushima Youth実行委員会は、岡山の学生を中心とした有志により運営されています。私たちは地域の若者たちが持つアイデアの力を信じ、それを世界に発信する場を提供します。</p>
            </div>

            <div className={styles.teamStructure}>
              <h3>運営体制</h3>
              <div className={styles.teamGrid}>
                <div className={`${styles.teamCard} ${styles.teamCardLeader}`}>
                  <div className={styles.teamCardIcon}>👑</div>
                  <h4 className={styles.teamCardTitle}>実行委員長</h4>
                  <p className={styles.teamCardName}>笹野健斗</p>
                  <p className={styles.teamCardDescription}>イベント全体の統括・企画立案</p>
                </div>

                <div className={`${styles.teamCard} ${styles.teamCardContent}`}>
                  <div className={styles.teamCardIcon}>🎯</div>
                  <h4 className={styles.teamCardTitle}>コンテンツ責任者</h4>
                  <p className={styles.teamCardName}>熊谷素生</p>
                  <p className={styles.teamCardDescription}>スピーカー選定・プログラム構成</p>
                </div>

                <div className={`${styles.teamCard} ${styles.teamCardPr}`}>
                  <div className={styles.teamCardIcon}>📢</div>
                  <h4 className={styles.teamCardTitle}>PR担当</h4>
                  <p className={styles.teamCardName}>一楽菜月</p>
                  <p className={styles.teamCardDescription}>広報・SNS運営・デザイン</p>
                </div>

                <div className={`${styles.teamCard} ${styles.teamCardMentoring}`}>
                  <div className={styles.teamCardIcon}>🌱</div>
                  <h4 className={styles.teamCardTitle}>メンタリング担当</h4>
                  <p className={styles.teamCardName}>竹原野々花、藤田いろ葉</p>
                  <p className={styles.teamCardDescription}>スピーカーサポート・指導</p>
                </div>

                <div className={`${styles.teamCard} ${styles.teamCardTechnical}`}>
                  <div className={styles.teamCardIcon}>🎬</div>
                  <h4 className={styles.teamCardTitle}>オペレーション・テクニカル担当</h4>
                  <p className={styles.teamCardName}>磯川楽丸、加藤竜一</p>
                  <p className={styles.teamCardDescription}>会場運営・配信・音響・照明</p>
                </div>

                <div className={`${styles.teamCard} ${styles.teamCardPartnership}`}>
                  <div className={styles.teamCardIcon}>🤝</div>
                  <h4 className={styles.teamCardTitle}>パートナーシップ担当</h4>
                  <p className={styles.teamCardName}>吉田絃</p>
                  <p className={styles.teamCardDescription}>協賛企業対応・連携企画</p>
                </div>

                <div className={`${styles.teamCard} ${styles.teamCardExpo}`}>
                  <div className={styles.teamCardIcon}>🎓</div>
                  <h4 className={styles.teamCardTitle}>OU万博連携担当</h4>
                  <p className={styles.teamCardName}>三好陽菜、久保茉織</p>
                  <p className={styles.teamCardDescription}>岡山大学万博との連携企画</p>
                </div>

                <div className={`${styles.teamCard} ${styles.teamCardWorkshop}`}>
                  <div className={styles.teamCardIcon}>💡</div>
                  <h4 className={styles.teamCardTitle}>ワークショップ担当</h4>
                  <p className={styles.teamCardName}>越智勇翔、礒野楓也</p>
                  <p className={styles.teamCardDescription}>ワークショップ企画・運営</p>
                </div>
              </div>
            </div>

            <div className={styles.teamMessage}>
              <h3>実行委員会からのメッセージ</h3>
              <blockquote>
                <p>Utopia is a destination. Protopia is a process.</p>
                <p>私たちは、人間精神の誇りにかけて、静的な理想郷ではなく、動的な「生成」のプロセスに価値を見出します。問題を解決すれば、また新しい問題が生まれる。それでいい。その連続的な改善の中にこそ、人間性の本質と未来へのリアルな希望があります。</p>
                <p>ようこそ。未来を「より良くしていくためのアイデア」が交差する、知性の実験室へ。</p>
                <cite>— TEDx Tsushima Youth 2025 実行委員会</cite>
              </blockquote>
            </div>
          </div>

          <div className={styles.partnershipsSection}>
            <h2>協力・後援・協賛</h2>

            <div className={styles.mainPartners}>
              <h3>運営協力</h3>
              <div className={styles.partnerCard}>
                <div className={styles.partnerLogo}>🏫</div>
                <div className={styles.partnerInfo}>
                  <h4>岡山大学 DS部</h4>
                  <p className={styles.partnerRole}>運営協力</p>
                  <p>コンテンツ全般の企画・運営をサポートいただいています。</p>
                </div>
              </div>
            </div>

            <div className={styles.sponsorsSection}>
              <h3>協賛・共催</h3>
              <div className={styles.sponsorsGrid}>
                <div className={styles.sponsorItem}>
                  <div className={styles.sponsorLogo}>🚀</div>
                  <h4>OI-Start</h4>
                  <p className={styles.sponsorType}>協賛</p>
                </div>

                <div className={styles.sponsorItem}>
                  <div className={styles.sponsorLogo}>🏛️</div>
                  <h4>岡山県教育委員会</h4>
                  <p className={styles.sponsorType}>共催</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
