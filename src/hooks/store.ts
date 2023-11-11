import { create } from "zustand";

type StoreType = {
  showCTA: boolean;
  toggleShowCTA: () => void;
  resetState: () => void;
};

const initialState = {
  showCTA: false,
};

export const store = create<StoreType>((set) => ({
  ...initialState,
  toggleShowCTA: () => {
    set((state) => ({ showCTA: !state.showCTA }));
  },
  resetState: () => set(initialState),
}));
