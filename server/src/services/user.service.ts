import bcrypt from 'bcrypt';
import prisma from '../db/Prisma';
import { User } from '../types/user.type';

const createUser = async (user: User) => {
    // check duplicate email
    const existingUser = await prisma.users.findUnique({
        where: {
            email: user.email,
        },
    });
    if (existingUser) {
        throw new Error("Email already exists");
    }
    // hash password    
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await prisma.users.create({
        data: {
            name: user.name,
            email: user.email,
            password: hashedPassword,
        },
    });
    return newUser;
}

const login = async (email: User["email"], password: User["password"]) => {
    const user = await prisma.users.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error("Invalid email or password");
    }
    return user;
}

export { createUser, login };