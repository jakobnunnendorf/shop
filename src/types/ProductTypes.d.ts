interface iProduct {
    id: string;
    created_at: Date;
    title: string;
    imageURL: string;
    description: string | null;
    price: string;
    stock: number;
    category: string;
    compatibleModels: string | null;
    reviews: null | string;
    dimensions: {
        width: null | number;
        height: null | number;
        depth: null | number;
    };
}

interface productsFetchResponse {
    id: string;
    created_at: Date;
    title: string;
    imageURL: string[];
    description: string;
    price: string;
    stock: number;
    category: string;
    compatibleModels: string | null;
    reviews: string | null;
    dimensions: null;
}