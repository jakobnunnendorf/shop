
import { UUID } from 'crypto';

interface iReview {
    reviewID: UUID;
    rating: number;
    createdAt: Date;
    comment: string;
    userID: UUID;
    productID: UUID;
}

interface iUserDetails {
    avatar: null | string;
    orders: iOrder[] | null;
    bewertungen: iReview | null;
    email: string;
    firstName: string;
    lastName: null | string;
    password: string;
    defaultShippingAdress: null | iAdress;
    defaultBillingAdress: null | iAdress;
    phoneNumber: null | string;
    userID: UUID;
    wishList: iProduct[] | null;
    settings: iSettings;
}

interface iSettings {
    darkMode: boolean;
}
interface iProductReview {
    reviewID: string
    rating: number
    createdAt: Date
    comment: string
    userID: string
    productID: string
}
