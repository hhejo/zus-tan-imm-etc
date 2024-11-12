import { create } from 'zustand';

type Count = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const useCountStore = create<Count>((set, get) => ({
  count: 0,
  increase: () => {
    const { count } = get();
    set({ count: count + 1 });
  },
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));
