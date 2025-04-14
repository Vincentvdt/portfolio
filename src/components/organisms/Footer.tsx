'use client'

import React, { useRef } from 'react'
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher'
import { Locale } from '@/i18n/config'
import { useLocale, useTranslations } from 'next-intl'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

const Footer = () => {
  const intlRef = useRef<HTMLDivElement | null>(null)

  const locale = useLocale()
  const t = useTranslations('Footer')

  useGSAP(() => {
    if (intlRef.current) {
      gsap.fromTo(
        intlRef.current,
        {
          x: 40,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          stagger: 0.1,
        }
      )
    }
  })

  return (
    <footer
      aria-labelledby="footer-heading"
      className="border-dark/10 mt-auto w-full border-t py-4 sm:py-6"
    >
      <h2 id="footer-heading" className="sr-only">
        {t('ariaLabel')}
      </h2>
      <div ref={intlRef} className="flex justify-start sm:justify-end">
        <LanguageSwitcher
          defaultValue={locale as Locale}
          items={[
            { value: 'en', label: 'EN' },
            { value: 'fr', label: 'FR' },
          ]}
        />
      </div>
    </footer>
  )
}

export default Footer
