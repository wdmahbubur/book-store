import jwt from 'jsonwebtoken';
// generate jwt token
export const generateToken = (id: string) => {
    const secret : string = process.env.JWT_SECRET || 'secret';
    const token = jwt.sign({ id }, secret);
    return token;
};

// verify jwt token
const verifyToken = (token: string) => {
    const secret : string = process.env.JWT_SECRET || 'secret';
    const decode = jwt.verify(token, secret);
    return decode;
}