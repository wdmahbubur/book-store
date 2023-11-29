import { create } from "zustand";

type State = {
  isSidebarOpen: boolean | undefined;
  alert?: boolean;
  alertType?: "success" | "error";
  alertMessage?: string;
};

type Action = {
  toggleSidebar: () => void;
  setSidebar: (value: boolean) => void;
  setAlert: (type: "success" | "error", message: string) => void;
  dismissAlert: () => void;
}


export const useStore = create<State & Action>((set) => ({
  isSidebarOpen: false,
  setSidebar: (value) => set(() => ({ isSidebarOpen: value })),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setAlert: (type, message) => set(() => ({ alertType: type, alertMessage: message, alert: true })),
  dismissAlert: () => set(() => ({ alert: false, alertType: undefined, alertMessage: undefined })),
}));

