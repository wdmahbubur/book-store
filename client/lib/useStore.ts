import { create } from "zustand";

type State = {
  isSidebarOpen: boolean | undefined;
  alert?: boolean;
  alertType?: "success" | "error";
  alertMessage?: string;
  user?: {
    id: string;
    name: string;
    email: string;
    image: string;
    phone_number?: string;
    role_name: string; 
  },
  isAuthenticated?: boolean;
};

type Action = {
  toggleSidebar: () => void;
  setSidebar: (value: boolean) => void;
  setAlert: (type: "success" | "error", message: string) => void;
  dismissAlert: () => void;
  setUser: (user: State["user"]) => void;
  setIsAuthenticated: (value: boolean) => void;
  removeUser: () => void;
}


export const useStore = create<State & Action>((set) => ({
  isSidebarOpen: false,
  setSidebar: (value) => set(() => ({ isSidebarOpen: value })),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setAlert: (type, message) => set(() => ({ alertType: type, alertMessage: message, alert: true })),
  dismissAlert: () => set(() => ({ alert: false, alertType: undefined, alertMessage: undefined })),
  setUser: (user) => set(() => ({ user })),
  setIsAuthenticated: (value) => set(() => ({ isAuthenticated: value })),
  removeUser: () => set(() => ({ user: undefined, isAuthenticated: false })),
}));

