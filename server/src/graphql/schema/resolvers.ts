import prisma from "../../db/Prisma";

const resolvers = {
    Query: {
        users: async () => {
            const users = await prisma.users.findMany();
            return users;
        }
    },
    Mutation: {
        createUser: async (_: any, args: any, _context: any) => {
            const user = await prisma.users.create({
                data: {
                    name: args.name,
                    email: args.email,
                    password: args.password,
                },
            });
            return user;
        }
    },
}

export{resolvers} ;
