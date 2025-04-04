import { MetadataRoute } from 'next'
import { baseUrl } from '@/app/sitemap'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/og/*'],
        disallow: ['/private'], // Adjust if needed
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
