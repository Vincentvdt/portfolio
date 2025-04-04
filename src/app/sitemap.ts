import type { MetadataRoute } from 'next'

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://vincentvdt.fr'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
