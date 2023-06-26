interface iProduct {
    id: string;
    created_at: Date;
    title: string;
    imageURL: string;
    description: string | null;
    price: string;
    stock: number;
    category: string;
    compatibleModels: Array<string>;
    reviews: null | Array<iReview>;
    dimensions: {
        width: null | number;
        height: null | number;
        depth: null | number;
    };
}
