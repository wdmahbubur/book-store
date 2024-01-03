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
exports.userResolvers = void 0;
const Prisma_1 = __importDefault(require("../../db/Prisma"));
const userLib_1 = require("../../lib/userLib");
const user_service_1 = require("../../services/user.service");
exports.userResolvers = {
    Query: {
        users: () => __awaiter(void 0, void 0, void 0, function* () {
            const users = yield Prisma_1.default.users.findMany();
            return users;
        }),
        getAuthenticatedUser: (_, _args, context) => __awaiter(void 0, void 0, void 0, function* () {
            const id = Number((0, userLib_1.verifyToken)(context.token));
            const user = yield Prisma_1.default.users.findUnique({
                where: {
                    id,
                },
            });
            return user;
        }),
    },
    Mutation: {
        signUp: (_, args, _context) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield (0, user_service_1.createUser)(args);
            if (!user) {
                throw new Error("Error creating user");
            }
            //sendVerificationEmail(user);
            return {
                message: "Your account has been created successfully!",
                user,
            };
        }),
        login: (_, args, _context) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield (0, user_service_1.login)(args.email, args.password);
            if (!user) {
                throw new Error("Error logging in");
            }
            const token = (0, userLib_1.generateToken)(user.id);
            return {
                message: "You have been logged in successfully!",
                token: token,
                user,
            };
        })
    },
};
//# sourceMappingURL=user.resolver.js.map