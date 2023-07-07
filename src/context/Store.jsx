import { create } from 'zustand'

export const Store = create((set) => ({
  numPregunta: 1,
	isLoading: false,
  nextPregunta: () => set((state) => ({ numPregunta: state.numPregunta + 1 })),
	loadingTrue: () => set(() => ({ isLoading: true })),
	loadingFalse: () => set(() => ({ isLoading: false })),

}))