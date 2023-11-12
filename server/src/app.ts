import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { TokenInterface } from './interface/interface';
import { resolvers } from './graphql/schema/resolvers';
import { typeDefs } from './graphql/schema/schema';
import prisma from './db/Prisma';

const app = express();
const httpServer = http.createServer(app);
const port = 5000;

async function startApolloServer(typeDefs: any, resolvers: any) {

  const server = new ApolloServer<TokenInterface>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.authorization }),
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at port ${port}`);

  prisma.$connect().then(() => {
    console.log('🚀 Database connected');
  });

}

startApolloServer(typeDefs, resolvers);