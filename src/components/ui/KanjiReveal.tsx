'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(useGSAP)

const KanjiReveal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null!)
  const textRef = useRef<HTMLDivElement>(null!)
  const kanjiRef = useRef<HTMLButtonElement>(null!)

  const t = useTranslations('Header')

  const { contextSafe } = useGSAP(
    {
      scope: containerRef,
      revertOnUpdate: true,
    },
    [containerRef, textRef]
  )

  const onClick = contextSafe(() => {
    setIsVisible((prev) => !prev)
  })

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 }
    )
  })

  useEffect(() => {
    if (textRef.current && kanjiRef.current) {
      // GSAP animation for the text visibility and kanji button
      gsap.to(textRef.current, {
        opacity: isVisible ? 1 : 0,
        duration: 0.8,
        ease: 'elastic.out',
        pointerEvents: isVisible ? 'unset' : 'none',
        y: isVisible ? 70 : 50,
      })

      gsap.to(kanjiRef.current, {
        rotate: isVisible ? 10 : 0,
        duration: 0.8,
        ease: 'elastic.out',
      })
    }
  }, [isVisible]) // Runs the effect when the visibility changes

  return (
    <div className="relative" ref={containerRef}>
      <button
        ref={kanjiRef}
        onClick={onClick}
        className="text-light z-40 cursor-pointer text-center text-4xl leading-normal font-bold uppercase"
        aria-label={t('kanjiLabel')}
        aria-expanded={isVisible ? 'true' : 'false'}
        role="button"
      >
        愛
      </button>

      <div
        ref={textRef}
        className="absolute-center z-30 flex items-center justify-center opacity-0"
        aria-live="polite" // Ensures screen readers announce content changes
      >
        <span className="font-yoppa-fude text-dark writing-mode-vertical-rl mx-auto text-center leading-[100%] uppercase">
          ハリファイ <br />
          フェヌイユ
        </span>
      </div>
    </div>
  )
}

export default KanjiReveal
