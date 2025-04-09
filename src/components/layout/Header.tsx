'use client'

import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import KanjiReveal from '@/components/ui/KanjiReveal'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'

gsap.registerPlugin(useGSAP)

const Header = () => {
  const containerRef = useRef<HTMLDivElement>(null!)

  const t = useTranslations('Header')

  useGSAP(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current?.children,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.1,
        }
      )
    }
  })

  return (
    <header className="flex w-full justify-between self-stretch py-5">
      <div
        ref={containerRef}
        className="font-nohemi flex flex-col items-start gap-0.5"
      >
        <Link href="/">
          <p className="text-light text-fluid-lg font-bold uppercase">
            Vincent VIDOT
          </p>
        </Link>
        <p className="text-dark text-fluid-sm font-extrabold uppercase">
          {t('role')}
        </p>
      </div>
      <KanjiReveal />
    </header>
  )
}

export default Header
