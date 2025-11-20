export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Contact</h1>
          <p className="page-subtitle">お問い合わせ・ご質問はこちら</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content-section" style={{ textAlign: 'center' }}>
            <h2>📧 メールでのお問い合わせ</h2>
            <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              <a href="mailto:sou_kumagai@s.okayama-u.ac.jp" style={{ color: '#e62b1e', textDecoration: 'none' }}>
                sou_kumagai@s.okayama-u.ac.jp
              </a>
            </p>
            <p style={{ color: '#666' }}>ご返信まで3〜5営業日ほどお時間をいただく場合がございます。</p>
          </div>

          <div className="content-section">
            <h2>お問い合わせ内容例</h2>
            <ul>
              <li>🎤 登壇者・スタッフ応募について</li>
              <li>🎫 参加申込について</li>
              <li>🤝 協賛・後援について</li>
              <li>📰 メディア・取材について</li>
              <li>❓ その他のご質問</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
