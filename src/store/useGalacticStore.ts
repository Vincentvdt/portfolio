import { create } from 'zustand'

interface GalacticState {
  starCount: number
  launchStar: (by?: number) => void
}

export const useGalacticStore = create<GalacticState>((set) => ({
  starCount: 0,
  launchStar: (by = 1) => set((state) => ({ starCount: state.starCount + by })),
}))
