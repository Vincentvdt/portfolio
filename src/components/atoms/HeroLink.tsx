'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

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
      if (!timelineRef.current) {
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
      }
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
      className="border-light focus-visible:ring-light clip-margin relative inline-block transform-gpu overflow-clip rounded-full border-3 font-bold uppercase focus-visible:ring-2 focus-visible:outline-none"
    >
      <span
        ref={bgRef}
        className="bg-light absolute inset-0 z-0 origin-left scale-x-0 will-change-transform"
        aria-hidden="true"
      />
      <span
        ref={textRef}
        className="text-fluid-base text-light relative z-10 block px-4 py-1"
      >
        {text}
      </span>
    </a>
  )
}

export default HeroLink
