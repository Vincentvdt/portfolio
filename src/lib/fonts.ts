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
  src: '../../public/fonts/Nohemi-VF.woff2',
  variable: '--font-nohemi',
})

export const ntEpika = localFont({
  src: [
    {
      path: '../../public/fonts/NT-Epika-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NT-Epika-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NT-Epika-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NT-Epika-Thin.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-nt-epika',
  display: 'swap',
})
