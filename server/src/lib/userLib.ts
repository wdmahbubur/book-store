import jwt from 'jsonwebtoken';
const postmark = require("postmark")
import { User } from '../types/user.type';

// generate jwt token
export const generateToken = (id: number) => {
    try {
        const secret : string = process.env.JWT_SECRET || 'secret';
        const token = jwt.sign({ id }, secret);
        return token;
    }
    catch (error) {
        console.log(error);
        throw new Error("Error generating token");
    }
    
};

// verify jwt token
export const verifyToken = (token: string) => {
    const secret : string = process.env.JWT_SECRET || 'secret';
    const decode = jwt.verify(token, secret);
    return decode;
}

// send email to user to verify account using postmark api
export const sendVerificationEmail = (user: User) => {
    try{
        const token = generateToken(user.id);
        const POSTMARK_API_KEY:any = process.env.POSTMARK_API_KEY;
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
    } catch (error) {
        console.log(error);
        throw new Error("Error sending email");
    }
}
