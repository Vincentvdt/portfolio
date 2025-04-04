import localFont from 'next/font/local'

// Local Font
export const nohemi = localFont({
  src: '../../public/fonts/Nohemi-VF.woff2',
  variable: '--font-nohemi',
  preload: false,
})

export const satoshi = localFont({
  src: '../../public/fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
  preload: false,
})

export const franklinGothicHeavy = localFont({
  src: '../../public/fonts/FRAHV.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-franklin-gothic-heavy',
  preload: false,
})

export const yoppaFude = localFont({
  src: '../../public/fonts/Yoppa_Fude.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-yoppa-fude',
  preload: false,
})
