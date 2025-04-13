import localFont from 'next/font/local'

export const nohemi = localFont({
  src: [
    { path: '../app/fonts/nohemi/Nohemi-Thin.woff2', weight: '100' },
    { path: '../app/fonts/nohemi/Nohemi-ExtraLight.woff2', weight: '200' },
    { path: '../app/fonts/nohemi/Nohemi-Light.woff2', weight: '300' },
    { path: '../app/fonts/nohemi/Nohemi-Regular.woff2', weight: '400' },
    { path: '../app/fonts/nohemi/Nohemi-Medium.woff2', weight: '500' },
    { path: '../app/fonts/nohemi/Nohemi-SemiBold.woff2', weight: '600' },
    { path: '../app/fonts/nohemi/Nohemi-Bold.woff2', weight: '700' },
    { path: '../app/fonts/nohemi/Nohemi-ExtraBold.woff2', weight: '800' },
    { path: '../app/fonts/nohemi/Nohemi-Black.woff2', weight: '900' },
  ],
  variable: '--font-nohemi',
  style: 'normal',
  fallback: ['system-ui', 'Arial'],
  adjustFontFallback: 'Arial',
  display: 'swap',
  preload: false,
})

export const franklinGothicHeavy = localFont({
  src: '../app/fonts/franklin-gothic/franklin-gothic-heavy.woff2',
  variable: '--font-franklin-gothic-heavy',
  weight: '600',
  style: 'normal',
  fallback: ['system-ui', 'Arial'],
  adjustFontFallback: 'Arial',
  display: 'swap',
  preload: false,
})

export const yoppaFude = localFont({
  src: '../app/fonts/yoppa-fude/yoppa-fude.woff2',
  variable: '--font-yoppa-fude',
  weight: '400',
  style: 'normal',
  fallback: ['system-ui', 'Arial'],
  adjustFontFallback: 'Arial',
  display: 'swap',
  preload: false,
})
