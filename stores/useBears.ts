import { create } from 'zustand';

type BearType = {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
};

export const useBears = create<BearType>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}));
