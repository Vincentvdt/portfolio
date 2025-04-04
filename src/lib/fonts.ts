import localFont from 'next/font/local'

// Local Font
export const nohemi = localFont({
  src: '../../public/fonts/Nohemi-VF.woff2',
  variable: '--font-nohemi',
})

export const satoshi = localFont({
  src: '../../public/fonts/Satoshi-Variable.woff2',
  variable: '--font-satoshi',
})

export const franklinGothicHeavy = localFont({
  src: '../../public/fonts/FRAHV.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-franklin-gothic-heavy',
})

export const yoppaFude = localFont({
  src: '../../public/fonts/Yoppa_Fude.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-yoppa-fude',
})
