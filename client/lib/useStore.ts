import { create } from "zustand";

type Book ={
    id: number,
    title: string,
    author: string,
    description?: string | null,
    cover?: string | null,
    genre?: string | null,
    pages?: number | null,
    rent?: string | null,
    sell?: string | null,
    stock?: number | null,
    rentPrice?: number | null,
    sellPrice?: number | null,
    ISBN?: string | null,
    seller?: object | null,
    sellerId?: number,
}


type State = {
  isSidebarOpen: boolean | undefined;
  alert?: boolean;
  alertType?: "error" | "success" | "primary" | "warning" | "metal";
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
  books?: Book[];
  userBooks?: Book[];
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
  setAlert: (type: "error" | "success" | "primary" | "warning" | "metal" , message: string) => void;
  dismissAlert: () => void;
  setUser: (user: State["user"]) => void;
  setIsAuthenticated: (value: boolean) => void;
  removeUser: () => void;
  setSelectedChat: (conv: conversation) => void;
  setBooks: (books: Book[]) => void;
  setUserBooks: (books: Book[]) => void;
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
  books: [],
  setBooks: (books) => set(() => ({ books })),
  userBooks: [],
  setUserBooks: (books) => set(() => ({ userBooks: books })),
}));

