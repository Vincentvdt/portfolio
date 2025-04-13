'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

const KanjiReveal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null!)
  const svgRef = useRef<SVGSVGElement>(null!)
  const kanjiRef = useRef<HTMLSpanElement>(null!)
  const hiddenTextRef = useRef<HTMLDivElement>(null!)

  const { contextSafe } = useGSAP({ scope: containerRef })
  const t = useTranslations('Header')

  useGSAP(() => {
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        rotate: 360,
        duration: 15,
        ease: 'linear',
        repeat: -1,
        transformOrigin: '50% 50%',
      })
    }
  }, [])

  const handleOnClick = contextSafe(() => setIsOpen((prevState) => !prevState))

  useEffect(() => {
    if (hiddenTextRef.current) {
      gsap.killTweensOf(hiddenTextRef.current)
      gsap.killTweensOf(kanjiRef.current)

      if (isOpen) {
        gsap.fromTo(
          hiddenTextRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 80, duration: 0.5, ease: 'power2.out' }
        )
        gsap.to(kanjiRef.current, {
          rotate: 20,
          duration: 1,
          ease: 'elastic.out',
        })
      } else {
        gsap.to(kanjiRef.current, { rotate: 0, duration: 0.15 })
        gsap.to(hiddenTextRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: 'power2.in',
        })
      }
    }
  }, [isOpen])

  const handleMouseEnter = contextSafe(() => {
    if (kanjiRef.current) {
      gsap.to(kanjiRef.current, {
        scale: 0.9,
        duration: 0.25,
        ease: 'power1.out',
      })
    }
  })

  const handleMouseLeave = contextSafe(() => {
    if (kanjiRef.current) {
      gsap.to(kanjiRef.current, {
        scale: 1,
        duration: 0.25,
        ease: 'power1.out',
      })
    }
  })

  return (
    <div
      ref={containerRef}
      aria-expanded={isOpen}
      aria-label={t('kanjiTooltip')}
      className="font-yoppa-fude relative flex h-[70px] w-[70px] cursor-pointer items-center justify-center"
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={kanjiRef} className="text-light text-fluid-4xl uppercase">
        愛
      </span>

      <div
        ref={hiddenTextRef}
        aria-hidden={!isOpen}
        className="writing-mode-vertical-rl text-dark text-fluid-xs pointer-events-none absolute font-medium opacity-0"
      >
        <p>ハリファイ</p>
        <p>フェヌイユ</p>
      </div>

      <svg
        className="pointer-events-none absolute"
        viewBox="0 0 140 140"
        width="70"
        height="70"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
      >
        <desc>
          Text path showing &#34;VINCENT VIDOT FULLSTACK DEVELOPER&#34;
        </desc>
        <defs>
          <path
            id="circlePath"
            d="M70,70 m-60,0 a60,60 0 1,1 120,0 a60,60 0 1,1 -120,0"
          />
        </defs>
        <text
          className="fill-light text-fluid-xs font-medium"
          letterSpacing="2px"
          wordSpacing="4px"
          textAnchor="middle"
        >
          <textPath href="#circlePath" startOffset="50%">
            VINCENT VIDOT FULLSTACK DEVELOPER
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default KanjiReveal
