import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/styles/base.scss"
import DesktopNavigation from '@/ui/DesktopNavigation/DesktopNavigation'
import TopNavigation from '@/ui/TopNavigation/TopNavigation'

const inter = Inter({ subsets: ['latin'], preload: true })

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Spotify clone from folzy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DesktopNavigation />
        <div className='layout-col'>
          <TopNavigation />
          {children}
        </div>
      </body>
    </html>
  )
}
