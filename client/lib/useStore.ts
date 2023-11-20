import { create } from "zustand";

type State = {
  isSidebarOpen: boolean | undefined;
};

type Action = {
  toggleSidebar: () => void;
  setSidebar: (value: boolean) => void;
}


export const useStore = create<State & Action>((set) => ({
  isSidebarOpen: false,
  setSidebar: (value) => set(() => ({ isSidebarOpen: value })),
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
