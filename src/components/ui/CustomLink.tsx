import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

interface LinkProps {
  text: string
  href: string
  ariaLabel: string
  className?: string
}

const CustomLink = ({ text, href, ariaLabel, className }: LinkProps) => (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={clsx(
        'text-light text-fluid-base font-semibold uppercase',
        className
      )}
    >
      {text}
    </Link>
  )

export default CustomLink
