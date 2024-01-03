"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationEmail = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const postmark = require("postmark");
// generate jwt token
const generateToken = (id) => {
    try {
        const secret = process.env.JWT_SECRET || 'secret';
        const token = jsonwebtoken_1.default.sign({ id }, secret);
        return token;
    }
    catch (error) {
        console.log(error);
        throw new Error("Error generating token");
    }
};
exports.generateToken = generateToken;
// verify jwt token
const verifyToken = (token) => {
    try {
        if (!token)
            throw new Error("No token provided");
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
            const secret = process.env.JWT_SECRET || 'secret';
            const decode = jsonwebtoken_1.default.verify(token, secret);
            const id = decode.id;
            return id;
        }
        else {
            throw new Error("Invalid token");
        }
    }
    catch (error) {
        //console.log(error);
        throw new Error("Error verifying token");
    }
};
exports.verifyToken = verifyToken;
// send email to user to verify account using postmark api
const sendVerificationEmail = (user) => {
    try {
        const token = (0, exports.generateToken)(user.id);
        const POSTMARK_API_KEY = process.env.POSTMARK_API_KEY;
        const client = new postmark.ServerClient(POSTMARK_API_KEY);
        client.sendEmailWithTemplate({
            "From": "mahbub@looselycoupled.org",
            "To": user.email,
            "TemplateId": 1234567,
            "TemplateModel": {
                "product_name_Value": "Book Store",
                "name_Value": user.name,
                "product_url_Value": "http://localhost:5000",
                "action_url_Value ": "http://localhost:5000/verify-account?token=" + token,
                "sender_name_Value ": "Mahbubur Rahman",
                "company_name_Value": "XYZ Company",
                "company_address_Value": "Dhaka, Bangladesh",
            },
        });
    }
    catch (error) {
        console.log(error);
        throw new Error("Error sending email");
    }
};
exports.sendVerificationEmail = sendVerificationEmail;
//# sourceMappingURL=userLib.js.map