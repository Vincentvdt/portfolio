import localFont from 'next/font/local'
import { Geist, Geist_Mono } from 'next/font/google'

// Google Fonts
export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// Local Font
export const nohemi = localFont({
  src: '/fonts/Nohemi-VF-BF6438cc58ad63d.woff2',
  variable: '--font-nohemi',
})

export const ntEpika = localFont({
  src: [
    {
      path: '/fonts/NT Epika Bold (PERSONAL USE).woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/NT Epika Medium (PERSONAL USE).woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/NT Epika Regular (PERSONAL USE).woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/NT Epika Thin (PERSONAL USE).woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-nt-epika',
  display: 'swap',
})
