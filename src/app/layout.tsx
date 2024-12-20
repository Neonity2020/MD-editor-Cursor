import '@/app/globals.css'
import Providers from '@/components/Providers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Markdown 编辑器',
  description: '一个简单的 Markdown 编辑器',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased" suppressHydrationWarning>
        <Providers>
          <main className="min-h-screen px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}