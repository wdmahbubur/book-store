"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const graphql_1 = require("./graphql/graphql");
const Prisma_1 = __importDefault(require("./db/Prisma"));
require('dotenv').config();
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const port = process.env.PORT;
function startApolloServer(typeDefs, resolvers) {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new server_1.ApolloServer({
            typeDefs,
            resolvers,
            plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        });
        yield server.start();
        app.use('/graphql', (0, cors_1.default)(), express_1.default.json(), (0, express4_1.expressMiddleware)(server, {
            context: ({ req }) => __awaiter(this, void 0, void 0, function* () { return ({ token: req.headers.authorization }); }),
        }));
        yield new Promise((resolve) => httpServer.listen({ port }, resolve));
        console.log(`🚀 Server ready at port ${port}`);
        Prisma_1.default.$connect().then(() => {
            console.log('🚀 Database connected');
        });
        // graphql api console log
        console.log(`🚀 GraphQL server ready at http://localhost:${port}/graphql`);
        app.get('/', (req, res) => {
            res.send('Server Running...!');
        });
    });
}
startApolloServer(graphql_1.typeDefs, graphql_1.resolvers);
//# sourceMappingURL=app.js.map