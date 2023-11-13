type User = {
    id: number,
    name: string | null,
    email: string,
    password: string | Buffer,
};

export { User };