import React, { useCallback, useTransition } from 'react'
import { Locale } from '@/i18n/config'
import { setUserLocale } from '@/i18n/locale'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

interface Props {
  defaultValue: Locale
  items: Array<{ value: string; label: string }>
}

const LanguageSwitcher = ({ defaultValue, items }: Props) => {
  const [isPending, startTransition] = useTransition()

  const t = useTranslations('Locale')

  const onChange = useCallback((value: string) => {
    const locale = value as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }, [])

  return (
    <div
      className="text-dark text-fluid-md flex items-center gap-1 uppercase"
      role="group"
      aria-label={t('label')}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.value}>
          <button
            onClick={() => onChange(item.value)}
            className={clsx(
              'flex h-8 min-w-[2.5rem] items-center justify-center transition-opacity duration-200',
              isPending
                ? 'pointer-events-none opacity-60'
                : 'cursor-pointer opacity-100',
              defaultValue === item.value && 'text-light'
            )}
            aria-label={t('switch.aria', { locale: item.label })}
            aria-current={defaultValue === item.value ? 'true' : undefined}
          >
            {item.label}
          </button>
          {index !== items.length - 1 && (
            <span aria-hidden="true" className="flex h-8 items-center">
              /
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default LanguageSwitcher
