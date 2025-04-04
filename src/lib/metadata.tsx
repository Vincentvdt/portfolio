import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { baseUrl } from '@/app/sitemap'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title.default'), // Localized title
      template: `%s | ${t('title.default')}`,
    },
    description: t('description'), // Localized description
    keywords: t('keywords'), // Localized keywords (must be in JSON as an array)
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      url: baseUrl,
      siteName: t('openGraph.siteName'),
      locale: locale?.replace('-', '_'), // Convert 'fr-FR' to 'fr_FR'
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      site: '@vincentvdt',
      creator: '@vincentvdt',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
