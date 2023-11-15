import { create } from "zustand";

type StoreType = {
  showCTA: boolean;
  playVideo: boolean,
  toggleShowCTA: () => void;
  togglePlayVideo: () => void;
  resetState: () => void;
  imageIndex : number;
};

const initialState = {
  showCTA: false,
  playVideo: false,
  imageIndex : 0,
};

export const store = create<StoreType>((set) => ({
  ...initialState,
  toggleShowCTA: () => {
    set((state) => ({ showCTA: !state.showCTA }));
  },

  togglePlayVideo: () => {
    set((state) => ({ playVideo: !state.playVideo }));
  },

  resetState: () => set(initialState),
}));
