import localFont from 'next/font/local'

const nohemi = localFont({
  src: [
    {
      path: '../assets/fonts/nohemi/Nohemi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nohemi/Nohemi-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nohemi/Nohemi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nohemi/Nohemi-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nohemi/Nohemi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nohemi/Nohemi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nohemi/Nohemi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nohemi/Nohemi-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/nohemi/Nohemi-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-nohemi',
  fallback: ['system-ui'],
  adjustFontFallback: 'Arial',
})

const franklinGothicHeavy = localFont({
  src: '../assets/fonts/franklin-gothic/franklin-gothic-heavy.woff2',
  weight: '600',
  style: 'normal',
  display: 'swap',
  variable: '--font-franklin-gothic-heavy',
  adjustFontFallback: 'Arial',
  preload: false,
})

const yoppaFude = localFont({
  src: '../assets/fonts/yoppa-fude/yoppa-fude.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-yoppa-fude',
  adjustFontFallback: 'Arial',
  preload: false,
})

export { nohemi, franklinGothicHeavy, yoppaFude }
