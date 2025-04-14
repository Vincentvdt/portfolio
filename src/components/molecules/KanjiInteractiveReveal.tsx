'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

const KanjiInteractiveReveal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const kanjiRef = useRef<HTMLSpanElement | null>(null)
  const hiddenTextRef = useRef<HTMLDivElement | null>(null)

  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const rotationTweenRef = useRef<gsap.core.Tween | null>(null)
  const t = useTranslations('Header')

  useGSAP(() => {
    if (svgRef.current)
      rotationTweenRef.current = gsap.to(svgRef.current, {
        rotate: -360,
        duration: 15,
        ease: 'linear',
        repeat: -1,
        transformOrigin: '50% 50%',
      })
  })

  useGSAP(() => {
    timelineRef.current = gsap.timeline({
      paused: true,
      defaults: { duration: 1, ease: 'elastic.inOut' },
    })

    timelineRef.current
      .to(
        hiddenTextRef.current,
        {
          opacity: 1,
          y: 90,
        },
        0
      )
      .to(kanjiRef.current, { rotate: 20 }, '<')
  })

  const handleOnClick = () => {
    setIsOpen((prevState) => !prevState)
    if (!isOpen) {
      timelineRef.current?.play()
    } else {
      timelineRef.current?.reverse()
    }
  }

  const handleOnMouseEnter = () => {
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        scale: 0.8,
        ease: 'power2.out',
      })
    }
  }
  const handleOnMouseLeave = () => {
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        scale: 1,
        ease: 'power2.out',
      })

      if (rotationTweenRef.current?.isActive()) {
        handleOnMouseUp()
      }
    }
  }

  const handleOnMouseDown = () => {
    if (svgRef.current && rotationTweenRef.current) {
      gsap.to(rotationTweenRef.current, {
        timeScale: 40,
        duration: 1.5,
        ease: 'expoScale(1,2,power2.in)',
        overwrite: true,
      })
    }
  }

  const handleOnMouseUp = () => {
    if (svgRef.current && rotationTweenRef.current) {
      gsap.to(rotationTweenRef.current, {
        timeScale: 1,
        duration: 1.5,
        ease: 'expoScale(1,2,power2.out)',
        overwrite: true,
      })
    }
  }

  return (
    <div
      ref={containerRef}
      aria-expanded={isOpen}
      aria-label={t('kanjiTooltip')}
      className="font-yoppa-fude relative flex h-[90px] w-[90px] cursor-pointer items-center justify-center"
      onClick={handleOnClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
    >
      <span ref={kanjiRef} className="text-light text-fluid-4xl uppercase">
        愛
      </span>

      <div
        ref={hiddenTextRef}
        aria-hidden={!isOpen}
        className="writing-mode-vertical-rl text-dark text-fluid-sm pointer-events-none absolute font-medium opacity-0"
      >
        <p>ハリファイ</p>
        <p>フェヌイユ</p>
      </div>

      <svg
        className="pointer-events-none absolute origin-center will-change-transform"
        viewBox="0 0 180 180"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
      >
        <desc>Text path showing &#34;VINCENT VIDOT FULLSTACK DEV&#34;</desc>
        <defs>
          <path
            id="circlePath"
            d="M90,90 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
          />
        </defs>
        <text
          className="fill-light"
          fontWeight="bold"
          fontSize="20px"
          letterSpacing="2px"
          wordSpacing="4px"
          textAnchor="middle"
        >
          <textPath
            href="#circlePath"
            startOffset="50%"
            dominantBaseline="middle"
          >
            VINCENT VIDOT FULLSTACK DEV
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default KanjiInteractiveReveal
