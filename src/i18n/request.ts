import { getRequestConfig } from 'next-intl/server'
import { Formats } from 'next-intl'

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = 'en'

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})

export const formats = {
  dateTime: {
    short: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  },
  number: {
    precise: {
      maximumFractionDigits: 5,
    },
  },
  list: {
    enumeration: {
      style: 'long',
      type: 'conjunction',
    },
  },
} satisfies Formats
