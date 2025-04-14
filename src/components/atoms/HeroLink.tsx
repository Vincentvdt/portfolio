'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'

interface HeroButtonProps {
  text: string
  href: string
  ariaLabel: string
}

const HeroLink = ({ text, href, ariaLabel }: HeroButtonProps) => {
  const containerRef = useRef<HTMLAnchorElement | null>(null)
  const bgRef = useRef<HTMLSpanElement | null>(null)
  const textRef = useRef<HTMLSpanElement | null>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useGSAP(
    () => {
      timelineRef.current = gsap.timeline({
        paused: true,
        defaults: { duration: 0.2, ease: 'power2.out' },
      })

      timelineRef.current.to(bgRef.current, { scaleX: 1.02 }, 0).to(
        textRef.current,
        {
          color:
            getComputedStyle(document.documentElement).getPropertyValue(
              '--color-red'
            ) || '#EB2603',
        },
        0.05
      )
    },
    { scope: containerRef, dependencies: [] }
  )

  const handleEnter = () => timelineRef.current?.play()
  const handleLeave = () => timelineRef.current?.reverse()

  return (
    <a
      ref={containerRef}
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      onClick={() => containerRef.current?.blur()}
      className="border-light bg-red focus-visible:ring-light clip-margin relative inline-flex w-[115px] transform-gpu items-center justify-center overflow-clip rounded-full border-3 font-bold uppercase focus-visible:ring-2 focus-visible:outline-none"
    >
      <span
        ref={bgRef}
        className="bg-light absolute inset-0 z-0 origin-left scale-x-0 will-change-transform"
      />
      <span
        ref={textRef}
        className="text-fluid-base text-light relative z-10 mb-[-2.5px] block px-2.5 py-0.5"
      >
        {text}
      </span>
    </a>
  )
}

export default HeroLink
