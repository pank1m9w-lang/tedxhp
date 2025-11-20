import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'

export const metadata: Metadata = {
  title: 'TEDx Tsushima Youth 2025',
  description: 'TEDx Tsushima Youth 2025 - 2025年12月20日開催。高校生・大学生による革新的なアイデアを共有するイベント。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <BottomNav />
      </body>
    </html>
  )
}
