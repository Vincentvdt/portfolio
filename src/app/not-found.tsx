'use client'

import React, { useRef } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import Header from '@/components/layout/Header'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Button from '@/components/ui/Button'
import LocalSwitcherSelect from '@/components/ui/LocalSwitcherSelect'
import { Locale } from '@/i18n/config'

gsap.registerPlugin(useGSAP)

const NotFound = () => {
  const locale = useLocale()
  const containerRef = useRef<HTMLDivElement>(null!)
  const t = useTranslations('NotFoundPage')

  useGSAP(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        {
          opacity: 0,
          y: 50,
          x: 15,
          skewX: 5,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          skewX: 0,
          duration: 1,
          delay: 0.2,
          stagger: 0.15,
          ease: 'power2.out',
        }
      )
    }
  })

  return (
    <>
      <Header />
      <main
        role="main"
        ref={containerRef}
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-start justify-center gap-6 px-4 py-10 text-left sm:items-center sm:text-center"
      >
        <h1 className="text-dark font-franklin-gothic-heavy text-fluid-3xl sm:text-fluid-7xl">
          {t('title.part1')} <br />
          {t('title.part2')}
        </h1>
        <h2 className="text-light font-yoppa-fude text-fluid-3xl sm:text-fluid-7xl">
          間違った場所
        </h2>
        <h3 className="text-dark font-franklin-gothic-heavy text-fluid-2xl sm:text-fluid-5xl">
          {t('text')}
        </h3>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Button text="Home" href="/" ariaLabel={t('accessibility.link')} />
          <LocalSwitcherSelect
            defaultValue={locale as Locale}
            items={[
              { value: 'en', label: 'EN' },
              { value: 'fr', label: 'FR' },
            ]}
          />
        </div>
      </main>
    </>
  )
}

export default NotFound
