import { User } from '../types/user.type';
export declare const generateToken: (id: number) => string;
export declare const verifyToken: (token: string) => any;
export declare const sendVerificationEmail: (user: User) => void;
