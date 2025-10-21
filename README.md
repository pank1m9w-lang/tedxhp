# TEDx Tsushima Youth 2025

**Protopia: Roots for Well-being, Innovation**

公式ウェブサイト - Astro製の高性能静的サイト

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pank1m9w-lang/tedxhp)

## 🌟 概要

TEDx Tsushima Youth 2025は、2025年12月20日に岡山大学共育共創コモンズで開催される、若者主体のTEDxイベントです。

- **開催日**: 2025年12月20日
- **会場**: 岡山大学 共育共創コモンズ
- **テーマ**: Protopia - Roots for Well-being, Innovation

## 🚀 技術スタック

### モダンな実装

- **フレームワーク**: [Astro](https://astro.build) v5.14.5
- **言語**: TypeScript (Strict mode)
- **スタイリング**: モダンCSS (CSS Variables, Grid, Flexbox)
- **ビルドツール**: Vite
- **デプロイ**: Vercel
- **SEO**: Sitemap自動生成

### 主な特徴

✨ **パフォーマンス最適化**
- 静的サイト生成 (SSG)
- コード分割とツリーシェイキング
- CSS/JSの自動ミニファイ
- 画像遅延読み込み

🎨 **モダンなUI/UX**
- レスポンシブデザイン
- モバイルファーストアプローチ
- スムーズなアニメーション
- アクセシビリティ対応

🔧 **開発者体験**
- TypeScriptによる型安全性
- コンポーネントベース設計
- ホットモジュールリプレースメント
- ESLint / Prettier対応

## 📦 プロジェクト構造

\`\`\`
tedxhp/
├── public/               # 静的アセット
│   └── images/          # 画像ファイル
├── src/
│   ├── components/      # Astroコンポーネント
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── BottomNav.astro
│   ├── layouts/         # レイアウトテンプレート
│   │   └── BaseLayout.astro
│   ├── pages/           # ページ (ルーティング自動生成)
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── event.astro
│   │   ├── join.astro
│   │   ├── speakers.astro
│   │   ├── support.astro
│   │   ├── contact.astro
│   │   └── preparation.astro
│   ├── scripts/         # TypeScriptモジュール
│   │   ├── main.ts
│   │   ├── hero-interactions.ts
│   │   ├── navigation.ts
│   │   └── animations.ts
│   └── styles/          # グローバルスタイル
│       └── global.css
├── astro.config.mjs     # Astro設定
├── tsconfig.json        # TypeScript設定
├── package.json
└── vercel.json          # Vercelデプロイ設定
\`\`\`

## 🛠️ 開発

### 必要環境

- Node.js >= 18.0.0
- npm または yarn

### セットアップ

\`\`\`bash
# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.example .env
# .envファイルを編集してEmailJS認証情報を追加

# 開発サーバー起動 (http://localhost:4321)
npm run dev

# 本番ビルド
npm run build

# ビルドプレビュー
npm run preview
\`\`\`

### 環境変数設定

スポンサー申し込みフォームにEmailJSを使用しています。以下の環境変数を設定してください：

\`\`\`bash
# .env ファイルに追加
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=sponsor_application
PUBLIC_EMAILJS_REPLY_TEMPLATE_ID=sponsor_application_reply
\`\`\`

**EmailJS設定手順**:
1. [EmailJS](https://www.emailjs.com/)でアカウント作成
2. Email Serviceを追加（Gmail, Outlook等）
3. Email Templateを作成（`emailjs-sponsor-template.md`を参照）
4. Public Key, Service ID, Template IDを取得
5. `.env`ファイルに設定

詳細は`emailjs-sponsor-template.md`を参照してください。

## 🌐 デプロイ

### Vercel (推奨)

このプロジェクトはVercelで自動デプロイされます。

1. GitHubにプッシュ
2. Vercelが自動的にビルド&デプロイ
3. https://tedxyouth-okayama.vercel.app で公開

## 📝 ページ一覧

- `/` - ホーム (ヒーローセクション、インタラクティブ要素)
- `/about` - TEDxとは、イベント概要
- `/event` - イベント詳細、アクセス情報
- `/join` - 参加申込、登壇者・スタッフ募集
- `/speakers` - スピーカー紹介
- `/sponsor` - スポンサープラン、申し込みフォーム
- `/support` - 運営委員会、スポンサー情報
- `/contact` - お問い合わせ
- `/preparation` - 準備中ページ

## 🔄 旧サイトからの移行

### 主な改善点

| 項目 | Before (旧) | After (新) |
|------|------------|-----------|
| フレームワーク | Vanilla HTML/CSS/JS | Astro + TypeScript |
| ビルド | なし | Vite |
| パフォーマンス | 〜 | ⚡ 静的生成、最適化 |
| 開発体験 | - | コンポーネント、型安全 |
| SEO | 手動 | Sitemap自動生成 |
| デプロイ | 手動 | 自動 (Vercel) |

### 移行内容

✅ 全8ページをAstroコンポーネント化  
✅ JavaScriptをTypeScriptモジュールに変換  
✅ CSSをモダンな構造に再編成  
✅ 画像最適化とアセット管理  
✅ ビルドパイプライン構築  
✅ CI/CD設定 (GitHub Actions)

## 📄 ライセンス

MIT License

## 🔗 リンク

- **公式サイト**: https://tedxyouth-okayama.vercel.app
- **TED公式**: https://www.ted.com/
- **TEDx Program**: https://www.ted.com/about/programs-initiatives/tedx-program

---

**&copy; 2025 TEDx Tsushima Youth**  
*This independent TEDx event is operated under license from TED.*
