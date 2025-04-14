import { generateMetadata } from '@/lib/metadata'
import './globals.css'

import { nohemi, franklinGothicHeavy, yoppaFude } from '@/styles/fonts'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import clsx from 'clsx'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={clsx(
          nohemi.variable,
          franklinGothicHeavy.variable,
          yoppaFude.variable,
          'bg-red font-nohemi px-3 antialiased sm:px-5'
        )}
      >
        <NextIntlClientProvider messages={messages} timeZone="Europe/Paris">
          <Header />
          <main>{children}</main>
          <Analytics />
          <SpeedInsights />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export { generateMetadata }
