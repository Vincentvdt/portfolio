'use client'

import React, { useEffect } from 'react'
import { useTranslations } from 'next-intl'

const UnsupportedBrowserWarning = () => {
  const [isUnsupportedBrowser, setIsUnsupportedBrowser] =
    React.useState<boolean>(false)

  const t = useTranslations()

  useEffect(() => {
    // Check for ES2022 or critical API support
    const isModernBrowser =
      'at' in Array.prototype && // ES2022 'Array.prototype.at'
      'fetch' in window && // Fetch API
      'Promise' in window // Promises

    if (!isModernBrowser) {
      setIsUnsupportedBrowser(true)
    }
  }, [])

  if (!isUnsupportedBrowser) return null

  return (
    <div
      className="bg-dark fixed bottom-0 left-0 z-50 w-full p-3 text-center text-sm text-white"
      role="alert"
    >
      <p>{t('browserWarning')}</p>
    </div>
  )
}

export default UnsupportedBrowserWarning
