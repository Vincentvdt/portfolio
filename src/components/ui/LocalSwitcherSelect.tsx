import React, { useCallback, useTransition } from 'react'
import { Locale } from '@/i18n/config'
import { setUserLocale } from '@/i18n/locale'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

interface Props {
  defaultValue: Locale
  items: Array<{ value: string; label: string }>
}

const LocalSwitcherSelect = ({ defaultValue, items }: Props) => {
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
      className={clsx(
        'font-nohemi text-dark text-fluid-md flex items-center gap-1 font-bold uppercase'
      )}
      role="region"
      aria-live="polite"
    >
      {items.map((item, index) => (
        <React.Fragment key={item.value}>
          <button
            onClick={() => onChange(item.value)}
            className={clsx(
              isPending
                ? 'pointer-events-none opacity-60'
                : 'cursor-pointer opacity-100',
              defaultValue === item.value && 'text-light'
            )}
            aria-label={t('switchText', { locale: item.label })}
          >
            {item.label}
          </button>
          {index !== items.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </div>
  )
}

export default LocalSwitcherSelect
