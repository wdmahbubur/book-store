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
exports.login = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const Prisma_1 = __importDefault(require("../db/Prisma"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    // check duplicate email
    const existingUser = yield Prisma_1.default.users.findUnique({
        where: {
            email: user.email,
        },
    });
    if (existingUser) {
        throw new Error("Email already exists");
    }
    // hash password    
    const hashedPassword = yield bcrypt_1.default.hash(user.password, 10);
    const newUser = yield Prisma_1.default.users.create({
        data: {
            name: user.name,
            email: user.email,
            password: hashedPassword,
        },
    });
    return newUser;
});
exports.createUser = createUser;
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Prisma_1.default.users.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error("Invalid email or password");
    }
    return user;
});
exports.login = login;
//# sourceMappingURL=user.service.js.map