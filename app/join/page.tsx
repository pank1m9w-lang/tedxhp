import Link from 'next/link'

export default function JoinPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Join Us</h1>
          <p className="page-subtitle">TEDx Tsushima Youth 2025 への参加申込</p>
        </div>
      </section>

      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>参加申込</h2>
            <p>2025年12月20日に開催される TEDx Tsushima Youthを共に作ってくれるメンバーを募集しています。</p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link href="/audience" className="btn btn--primary btn--large">オーディエンス参加申し込み</Link>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7N4lHShGCdFtatdGy0G61GD52V3GhUvGSQtIbZBaZzlMoYA/viewform?usp=header" className="btn btn--secondary btn--large" target="_blank" rel="noopener noreferrer">登壇者・スタッフ応募はこちら</a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div className="content-section">
              <h3>🎫 会場参加</h3>
              <p>岡山大学共育共創コモンズでの現地参加</p>
              <ul>
                <li>スピーカーとの直接交流</li>
                <li>ワークショップ参加</li>
                <li>アフターパーティー参加</li>
              </ul>
            </div>

            <div className="content-section" style={{ opacity: 0.6 }}>
              <h3>💻 オンライン参加</h3>
              <p>オンライン参加は今回は実施いたしません</p>
              <ul>
                <li>会場参加のみとなります</li>
                <li>YouTubeライブ配信予定なし</li>
              </ul>
            </div>
          </div>

          <div className="content-section">
            <h2>会場アクセス</h2>
            <h3>📍 岡山大学 共育共創コモンズ</h3>
            <p><strong>住所：</strong> 〒700-8530 岡山県岡山市北区津島中2丁目1-1</p>
            <p><strong>交通：</strong> JR津山線「法界院駅」徒歩約10分、岡山駅からバス約20分「岡大西門」下車徒歩5分</p>
          </div>
        </div>
      </section>
    </main>
  )
}
