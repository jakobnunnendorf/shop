interface IReview {
    reviewId: UUID;
    rating: number;
    createdAt: Date;
    comment: string;
    userId: UUID;
    productId: UUID;
}

interface IUserDetails {
    avatar: null | string;
    orders: IOrder[] | null;
    bewertungen: IReview | null;
    email: string;
    firstName: string;
    lastName: null | string;
    password: string;
    defaultShippingAdress: null | IAdress;
    defaultBillingAdress: null | IAdress;
    phoneNumber: null | string;
    userID: UUID;
    wishList: IProduct[] | null;
    settings: ISettings;
}

interface ISettings {
    darkMode: boolean;
}
interface IProductReview {
    reviewID: string
    rating: number
    createdAt: Date
    comment: string
    userID: string
    productID: string
}
