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
        duration: 0.6,
        opacity: isVisible ? 1 : 0,
        ease: 'bounce.out',
        pointerEvents: isVisible ? 'unset' : 'none',
        y: isVisible ? 90 : 60, // Adjust y value to control vertical position
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
        className="text-light text-fluid-4xl z-40 cursor-pointer text-center leading-normal font-bold uppercase"
        aria-label={t('kanjiTooltip')}
        aria-expanded={isVisible ? 'true' : 'false'}
      >
        愛
      </button>

      <div
        ref={textRef}
        className="absolute top-[10px] left-[50%] z-30 mt-2 translate-x-[-50%] translate-y-[-50%] opacity-0" // top-full to place below, mt-2 for spacing
        aria-live="polite" // Ensures screen readers announce content changes
      >
        <span
          aria-hidden={!isVisible}
          className="font-yoppa-fude text-dark writing-mode-vertical-rl text-fluid-base mx-auto text-center uppercase"
        >
          ハリファイ <br />
          フェヌイユ
        </span>
      </div>
    </div>
  )
}

export default KanjiReveal
