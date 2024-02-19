type Book ={
        id: number,
        title: string,
        author: string,
        description: string | null,
        cover: string | null,
        genre: string | null,
        pages: number | null,
        rent: string | null,
        sell: string | null,
        stock: number | null,
        rentPrice: number | null,
        sellPrice: number | null,
        ISBN: string | null,
        sellerId: number,
}
export { Book };
