import { create } from 'zustand';



export const Store = create((set) => ({
	numPregunta: 0,
	isLoading: false,
	isPrize: false,
	setNumPregFromLS: (data) => set(() => ({numPregunta: Number(data)})),
	nextPregunta: () =>
		set((state) => ({ numPregunta: state.numPregunta + 1 })),
	loadingTrue: () => set(() => ({ isLoading: true })),
	loadingFalse: () => set(() => ({ isLoading: false })),
	prizeTrue: () => set(() => ({ isPrize: true })),
	prizeFalse: () => set(() => ({ isPrize: false })),
}));
