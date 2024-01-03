import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { TokenInterface } from './interface/interface';
import { resolvers, typeDefs} from './graphql/graphql';
import prisma from './db/Prisma';
require('dotenv').config();

const app = express();
const httpServer = http.createServer(app);
const port = 5000 | process.env.PORT as unknown as number;

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

  // graphql api console log
  console.log( `🚀 GraphQL server ready at http://localhost:${port}/graphql`)

}

startApolloServer(typeDefs, resolvers);