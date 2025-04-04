'use client'

import { useLocale, useTranslations } from 'next-intl'
import Header from '@/components/layout/Header'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Button from '@/components/ui/Button'
import LocalSwitcherSelect from '@/components/ui/LocalSwitcherSelect'
import { Locale } from '@/i18n/config'

gsap.registerPlugin(useGSAP)

const links = [
  {
    name: 'linkedin',
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/vincentvdt/',
  },
  {
    name: 'github',
    label: 'Github',
    href: 'https://github.com/Vincentvdt',
  },
  {
    name: 'malt',
    label: 'Malt',
    href: 'https://www.malt.fr/profile/vincentvidot1',
  },
]

export default function ComingSoon() {
  const locale = useLocale()

  const mainRef = useRef<HTMLElement>(null!)
  const t = useTranslations('HomePage')

  useGSAP(() => {
    gsap.fromTo(
      mainRef.current?.children,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        stagger: 0.1,
      }
    )
  })

  return (
    <>
      <Header />
      <main
        role="main"
        ref={mainRef}
        className="flex max-w-none flex-1 flex-col justify-center gap-12 pb-4 sm:items-center"
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-brown font-franklin-gothic-heavy text-fluid-8xl sm:text-fluid-9xl relative max-w-[951px] tracking-[-6.4px] sm:text-center">
            {t('title')}
            <span className="absolute-center text-light font-yoppa-fude text-fluid-8xl white top-[70%]! left-[40%]! tracking-[-4.8px] whitespace-nowrap sm:top-[50%]! sm:left-[50%]!">
              もうすぐ
            </span>
          </h1>
          <h2 className="text-brown font-satoshi text-fluid-2xl self-stretch font-extrabold tracking-[-1.2px] italic sm:text-center">
            {t('subtitle')}
            <br />
            {t('subtitle2')}
          </h2>
        </div>

        <nav
          aria-label={t('accessibility.nav')}
          role="navigation"
          className="flex w-full flex-col items-start justify-start gap-4 sm:flex-row sm:items-center sm:justify-center"
        >
          {links.map(({ name, label, href }) => (
            <Button
              key={name}
              text={label}
              href={href}
              isExternal
              ariaLabel={t(`accessibility.links.${name}`)}
              className="sm:w-[160px]"
            />
          ))}
        </nav>

        <LocalSwitcherSelect
          defaultValue={locale as Locale}
          items={[
            {
              value: 'en',
              label: 'EN',
            },
            {
              value: 'fr',
              label: 'FR',
            },
          ]}
        />
      </main>
    </>
  )
}
