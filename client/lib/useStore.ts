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
  selectedChat: {
    id: string;
    name: string;
    avatar: string;
    status: string;
    last_message: string;
    last_message_time: string;
  };
};

type conversation = {
  id: string;
  name: string;
  avatar: string;
  status: string;
  last_message: string;
  last_message_time: string;
};


type Action = {
  toggleSidebar: () => void;
  setSidebar: (value: boolean) => void;
  setAlert: (type: "success" | "error", message: string) => void;
  dismissAlert: () => void;
  setUser: (user: State["user"]) => void;
  setIsAuthenticated: (value: boolean) => void;
  removeUser: () => void;
  setSelectedChat: (conv: conversation) => void;
};


export const useStore = create<State & Action>((set) => ({
  isSidebarOpen: false,
  alert: false,
  setSidebar: (value) => set(() => ({ isSidebarOpen: value })),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setAlert: (type, message) => set(() => ({ alertType: type, alertMessage: message, alert: true })),
  dismissAlert: () => set(() => ({ alert: false, alertType: undefined, alertMessage: undefined })),
  setUser: (user) => set(() => ({ user })),
  setIsAuthenticated: (value) => set(() => ({ isAuthenticated: value })),
  removeUser: () => set(() => ({ user: undefined, isAuthenticated: false })),
  selectedChat: { id: "", name: "", avatar: "", status: "", last_message: "", last_message_time: ""},
  setSelectedChat: (conv:conversation) => set(() => ({
    selectedChat: {
      id: conv.id,
      name: conv.name,
      avatar: conv.avatar,
      status: conv.status,
      last_message: conv.last_message,
      last_message_time: conv.last_message_time,
    },
  })),
}));

