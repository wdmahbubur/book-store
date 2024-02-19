import { User } from '../types/user.type';
declare const createUser: (user: User) => Promise<{
    id: number;
    email: string;
    name: string | null;
    phone_number: string | null;
    password: string;
    role_name: string;
    isConfirmed: boolean;
    avatar: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const login: (email: User["email"], password: User["password"]) => Promise<{
    id: number;
    email: string;
    name: string | null;
    phone_number: string | null;
    password: string;
    role_name: string;
    isConfirmed: boolean;
    avatar: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export { createUser, login };
