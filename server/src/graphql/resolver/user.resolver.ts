import prisma from "../../db/Prisma";
import { generateToken, verifyToken, sendVerificationEmail } from "../../lib/userLib";
import { createUser, login } from "../../services/user.service";

export const userResolvers:any = {
    Query: {
        users: async () => {
            const users = await prisma.users.findMany();
            return users;
        },
        getAuthenticatedUser: async (_: any, _args: any, context: any) => {
            const id = Number(verifyToken(context.token));
            const user = await prisma.users.findUnique({
                where: {
                    id,
                },
            });
            return user;
        },
    },
    Mutation: {
        signUp: async (_: any, args: any, _context: any) => {
            const user = await createUser(args);
            if (!user) {
                throw new Error("Error creating user");
            }
            //sendVerificationEmail(user);
            return {
                message: "Your account has been created successfully!",
                user,
            };
        },
        login: async (_: any, args: any, _context: any) => {
            const user = await login(args.email, args.password);
            if (!user) {
                throw new Error("Error logging in");
            }

            const token = generateToken(user.id);

            return {
                message: "You have been logged in successfully!",
                token: token,
                user,
            };
        }
    },
}
