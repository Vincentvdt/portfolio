import React from 'react'
import { useTranslations } from 'next-intl'
import KanjiInteractiveReveal from '@/components/molecules/KanjiInteractiveReveal'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CustomLink from '@/components/atoms/CustomLink'

gsap.registerPlugin(useGSAP)

const Header = () => {
  const t = useTranslations('Header')

  return (
    <header
      className="flex w-full items-start justify-between self-stretch px-0 py-2"
      aria-label={t('ariaLabel')}
    >
      <nav aria-label={t('navigation.ariaLabel')}>
        <ul className="flex items-start gap-12">
          <li>
            <CustomLink
              text={t('navigation.home.label')}
              href="/public"
              ariaLabel={t('navigation.home.ariaLabel')}
            />
          </li>
          <li>
            <CustomLink
              text={t('navigation.projects.label')}
              href="/public"
              ariaLabel={t('navigation.projects.ariaLabel')}
            />
          </li>
        </ul>
      </nav>
      <div className="flex items-start gap-[168px]">
        <div className="flex flex-row items-center gap-12">
          <div className="text-light flex flex-col items-start gap-0.5 uppercase">
            <h2>Living</h2>
            <p className="font-semibold">
              [<span className="font-bold">{t('living')}</span>]
            </p>
          </div>

          <div className="text-light flex flex-col items-start gap-0.5 uppercase">
            <h2>Contact</h2>
            <p className="font-semibold">
              [
              <a
                className="cursor-pointer font-bold"
                href="mailto:vincent.vidot3@gmail.com"
                aria-label="Email Vincent Vidot"
              >
                vincent.vidot3@gmail.com
              </a>
              ]
            </p>
          </div>
        </div>
        <KanjiInteractiveReveal />
      </div>
    </header>
  )
}

export default Header
