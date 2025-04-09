import { generateMetadata } from '@/lib/metadata'
import './globals.css'

import { nohemi, franklinGothicHeavy, yoppaFude } from '@/styles/fonts'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import clsx from 'clsx'

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
          'bg-red px-3 antialiased sm:px-5',
          nohemi.variable,
          franklinGothicHeavy.variable,
          yoppaFude.variable
        )}
      >
        <NextIntlClientProvider messages={messages} timeZone="Europe/Paris">
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export { generateMetadata }
