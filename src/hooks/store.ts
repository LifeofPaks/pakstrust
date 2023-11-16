import { create } from "zustand";

type StoreType = {
  showCTA: boolean;
  playVideo: boolean,
  toggleShowCTA: () => void;
  togglePlayVideo: () => void;
  resetState: () => void;
  inverse : boolean;
  toggleInverse: () => void;
};

const initialState = {
  showCTA: false,
  playVideo: false,
  imageIndex : 0,
  inverse : false
};

export const store = create<StoreType>((set) => ({
  ...initialState,
  toggleShowCTA: () => {
    set((state) => ({ showCTA: !state.showCTA }));
  },

  togglePlayVideo: () => {
    set((state) => ({ playVideo: !state.playVideo }));
  },

  toggleInverse: () => {
    set((state) => ({ inverse: !state.inverse }));
  },

  resetState: () => set(initialState),
}));
