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
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/vincentvdt/',
  },
  {
    name: 'Github',
    href: 'https://github.com/Vincentvdt',
  },
  {
    name: 'Malt',
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
        ref={mainRef}
        className="flex flex-1 flex-col items-center justify-center gap-12 px-5"
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-brown font-franklin-gothic-heavy relative w-[951px] text-center text-9xl leading-[90%] tracking-[-6.4px]">
            {t('title')}
            <span className="absolute-center text-light font-yoppa-fude text-8xl leading-[160%] tracking-[-4.8px]">
              もうすぐ
            </span>
          </h1>
          <h2 className="text-brown font-satoshi self-stretch text-center text-2xl leading-[160%] font-extrabold tracking-[-1.2px] italic">
            {t('subtitle')}
            <br />
            {t('subtitle2')}
          </h2>
        </div>
        <nav className="flex w-[540px] items-center justify-between">
          {links.map(({ name, href }, index) => (
            <Button key={index} text={name} href={href} isExternal={true} />
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
