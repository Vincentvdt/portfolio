'use server'

import { cookies } from 'next/headers'
import { defaultLocale } from '@/i18n/config'
import { Locale } from 'use-intl'

const COOKIE_NAME = 'locale'

export async function getUserLocale(): Promise<Locale> {
  const cookie = (await cookies()).get(COOKIE_NAME)?.value
  return cookie && ['en', 'fr'].includes(cookie)
    ? (cookie as Locale)
    : defaultLocale
}

export async function setUserLocale(locale: Locale): Promise<void> {
  ;(await cookies()).set(COOKIE_NAME, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year expiration
  })
}
