import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'sumuzhi',
    template: '%s — sumuzhi',
  },
  description: 'Personal blog by sumuzhi. Writing about frontend, JavaScript, and building things.',
  metadataBase: new URL('https://sumuzhi.github.io'),
  openGraph: {
    title: 'sumuzhi',
    description: 'Personal blog by sumuzhi.',
    url: 'https://sumuzhi.github.io',
    siteName: 'sumuzhi',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
