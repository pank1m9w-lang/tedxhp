export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About</h1>
          <p className="page-subtitle">TEDx Tsushima Youth について</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content-section">
            <h2>TEDx とは</h2>
            <p>TEDxは、TEDの理念「Ideas worth spreading」に基づき、世界中で独自に開催されるイベントです。地域のコミュニティが主体となって運営し、革新的なアイデアを共有する場を提供しています。</p>
          </div>

          <div className="content-section">
            <h2>TEDx Tsushima Youth について</h2>
            <p>TEDx Tsushima Youthは、岡山県で開催される若者向けのTEDxイベントです。高校生や大学生が中心となり、次世代のアイデアや視点を共有します。</p>
          </div>
        </div>
      </section>
    </main>
  )
}
