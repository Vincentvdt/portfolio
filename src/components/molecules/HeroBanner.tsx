import React from 'react'
import HeroLink from '@/components/atoms/HeroLink'
import { useTranslations } from 'next-intl'

const HeroBanner = () => {
  const t = useTranslations('HeroBanner')

  return (
    <div>
      <ul className="flex flex-row items-start gap-1">
        <li className="flex">
          <HeroLink
            text={'Linkedin'}
            href="https://www.linkedin.com/in/vincentvdt/"
            ariaLabel={t('links.ariaLabel', { link: 'Linkedin' })}
          />
        </li>
        <li className="flex">
          <HeroLink
            text={'Malt'}
            href="https://www.malt.fr/profile/vincentvidot1"
            ariaLabel={t('links.ariaLabel', { link: 'Malt' })}
          />
        </li>
        <li className="flex">
          <HeroLink
            text={'Github'}
            href="https://www.github.com/vincentvdt"
            ariaLabel={t('links.ariaLabel', { link: 'Github' })}
          />
        </li>
      </ul>
    </div>
  )
}

export default HeroBanner
