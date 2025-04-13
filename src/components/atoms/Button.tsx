import React, { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

gsap.registerPlugin(useGSAP)

interface ButtonProps {
  text: string
  href: string
  className?: string
  isExternal?: boolean
  ariaLabel: string
}

const ButtonCore = ({
  text,
  className,
}: Pick<ButtonProps, 'text' | 'className'>) => {
  const buttonRef = useRef<HTMLSpanElement>(null!)
  const underlineRef = useRef<HTMLSpanElement>(null!)

  const { contextSafe } = useGSAP({ scope: buttonRef })

  const animateIn = contextSafe(() =>
    gsap.to(underlineRef.current, {
      transformOrigin: 'left',
      scaleX: 1,
      duration: 0.3,
    })
  )

  const animateOut = contextSafe(() =>
    gsap.to(underlineRef.current, {
      transformOrigin: 'right',
      scaleX: 0,
      duration: 0.3,
    })
  )

  return (
    <span
      ref={buttonRef}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      onTouchStart={animateIn}
      onTouchEnd={animateOut}
      className={clsx(
        'text-light font-franklin-gothic-heavy text-fluid-3xl relative inline-block w-full cursor-pointer text-left tracking-[-0.8px] uppercase sm:text-center',
        className
      )}
    >
      <span className="relative inline-block">
        {text}
        <span
          ref={underlineRef}
          aria-hidden="true"
          className="bg-light pointer-events-none absolute -bottom-1 left-0 h-[10px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out"
        />
      </span>
    </span>
  )
}

const Button = ({
  isExternal,
  text,
  href,
  className,
  ariaLabel,
}: ButtonProps) => {
  const t = useTranslations('Accessibility')

  const sharedClass = clsx('w-full sm:min-w-[160px]', className)
  const coreClass = 'text-left sm:text-center'

  return isExternal ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={sharedClass}
    >
      <ButtonCore text={text} className={coreClass} />
      <span className="sr-only">{t('srOnly')}</span>
    </a>
  ) : (
    <Link href={href} passHref className={sharedClass} aria-label={ariaLabel}>
      <ButtonCore text={text} className={coreClass} />
      <span className="sr-only">{t('srOnly')}</span>
    </Link>
  )
}

export default Button
