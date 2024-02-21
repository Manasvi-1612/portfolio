import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header'
import { ThemeContext } from '@/context'

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
        {/* <Suspense fallback={<Loading />}> */}
        <ThemeContext>
          <div className='flex h-screen justify-between'>
            <main className="w-full">{children}</main>
            <Header />
          </div>
        </ThemeContext>
        {/* </Suspense> */}
      </body>
    </html>
  )
}
