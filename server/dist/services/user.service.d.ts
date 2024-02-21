import { User } from '../types/user.type';
declare const createUser: (user: User) => Promise<{
    id: number;
    email: string;
    name: string | null;
    phone_number: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    isConfirmed: boolean;
    role_name: string;
    avatar: string | null;
}>;
declare const login: (email: User["email"], password: User["password"]) => Promise<{
    id: number;
    email: string;
    name: string | null;
    phone_number: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    isConfirmed: boolean;
    role_name: string;
    avatar: string | null;
}>;
export { createUser, login };
