import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar'
import { ThemeContext } from '@/context'
import Loader from '@/components/Loader'
import { Suspense } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Suspense fallback={<Loader />}>
          <ThemeContext>
            <div className='flex h-screen justify-between'>
              <main>{children}</main>
              <SideBar />
            </div>
          </ThemeContext>
        </Suspense>
      </body>
    </html>
  )
}
