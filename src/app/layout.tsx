import { generateMetadata } from '@/lib/metadata'
import './globals.css'

import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { nohemi, satoshi, franklinGothicHeavy, yoppaFude } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
        className={`${satoshi.className} ${nohemi.variable} ${franklinGothicHeavy.variable} ${yoppaFude.variable} bg-red antialiased`}
      >
        <NextIntlClientProvider messages={messages} timeZone="Europe/Paris">
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export { generateMetadata }
