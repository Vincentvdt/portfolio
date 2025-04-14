import React from 'react'
import HeroLink from '@/components/atoms/HeroLink'
import { useTranslations } from 'next-intl'

const HeroBanner = () => {
  const t = useTranslations('HeroBanner')

  return (
    <div className="flex w-[1119px] flex-col items-center justify-center gap-1">
      <ul className="before:bg-light relative flex w-full flex-row items-start gap-2 before:absolute before:top-1/2 before:left-0 before:h-1 before:w-full before:-translate-y-1/2 before:rounded-l-full">
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

      <h1 className="text-fluid-h1 font-franklinGothicHeavy text-light relative text-center leading-[92%]! font-black">
        VINCENT
        <br />
        VIDOT
        <span
          aria-hidden="true"
          lang="ja"
          className="text-brown text-fluid-9xl font-regular font-yoppa-fude absolute-center top-[45%] w-full text-center uppercase"
        >
          ビンセント
        </span>
      </h1>
      <h2 className="text-dark text-fluid-2xl mt-[-20px] font-bold tracking-wider uppercase">
        Développeur fullstack | react & node.js
      </h2>
    </div>
  )
}

export default HeroBanner
