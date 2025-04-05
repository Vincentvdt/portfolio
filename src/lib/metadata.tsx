import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { baseUrl } from '@/app/sitemap'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  const keywordsRaw = t('keywords')
  const keywords = Array.isArray(keywordsRaw)
    ? keywordsRaw
    : keywordsRaw.split(',').map((kw: string) => kw.trim())

  const localeForOG = locale?.replace('-', '_') || 'en_US'

  const ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(
    t('openGraph.image.title')
  )}&description=${encodeURIComponent(t('openGraph.image.description'))}`

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title.default'),
      template: `%s | ${t('title.default')}`,
    },
    description: t('description'),
    keywords,
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      url: baseUrl,
      siteName: t('openGraph.siteName'),
      locale: localeForOG,
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: 'OG Image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      site: '@vincentvdt',
      creator: '@vincentvdt',
      images: [ogImageUrl],
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
