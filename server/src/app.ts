import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { TokenInterface } from './interface/interface';
import { resolvers, typeDefs} from './graphql/graphql';
import prisma from './db/Prisma';
import { upload } from './lib/imageUpload';

require('dotenv').config();

const app = express();
app.use(cors());
const httpServer = http.createServer(app);
const port = process.env.PORT as unknown as number;

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

  app.get('/', (req, res) => {
    res.send('Server Running...!');
  });

  app.post('/image-upload', upload.single('image'), (req: any, res) => {
    res.json({ image: process.env.URL+'/public/images/'+req.file.filename });
  });

  app.use('/public', express.static('public'));
}

startApolloServer(typeDefs, resolvers);