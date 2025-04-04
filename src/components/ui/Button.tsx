import React, { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

interface ButtonProps {
  text: string
  href: string
}

const ButtonCore = ({ text }: Pick<ButtonProps, 'text'>) => {
  const buttonRef = useRef<HTMLButtonElement>(null!)
  const underlineRef = useRef<HTMLDivElement>(null!)
  const { contextSafe } = useGSAP({ scope: buttonRef })

  // GSAP Animation
  const handleMouseEnter = contextSafe(() => {
    if (underlineRef.current) {
      gsap.to(underlineRef.current, {
        transformOrigin: 'left',
        scaleX: 1,
        duration: 0.3,
      })
    }
  })

  const handleMouseLeave = contextSafe(() => {
    if (underlineRef.current) {
      gsap.to(underlineRef.current, {
        transformOrigin: 'right',
        scaleX: 0,
        duration: 0.3,
      })
    }
  })

  return (
    <button
      ref={buttonRef}
      data-href={buttonRef.current?.getAttribute('data-href')} // Store the href
      className="text-light font-franklin-gothic-heavy relative mx-auto block cursor-pointer text-center text-3xl leading-[160%] tracking-[-0.8px] uppercase"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <div
        ref={underlineRef}
        className="bg-light absolute bottom-0 left-0 h-[10px] w-full scale-x-0"
      ></div>
    </button>
  )
}

const NextButton = ({ text, href }: ButtonProps) => (
  <Link href={href} passHref>
    <ButtonCore text={text} />
  </Link>
)
const ExternalButton = ({ text, href }: ButtonProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex-1">
    <ButtonCore text={text} />
  </a>
)

const Button = ({
  text,
  href,
  isExternal,
}: ButtonProps & { isExternal?: boolean }) =>
  isExternal ? (
    <ExternalButton text={text} href={href} />
  ) : (
    <NextButton text={text} href={href} />
  )

export default Button
