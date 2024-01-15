interface CheckoutBody {
    cartItems: CartItem[];
    metadata?: CheckoutMetadata;
}
interface CheckoutMetadata {
    email: Email;
    password: string;
    userId?: UUID;
    orderId?: UUID | null;
}
interface StripeLineItem {
    priceData: {
        currency: 'eur';
        productData: {
            name: string;
            images?: string[];
        };
        unitAmount: number;
    };
    quantity: number;
}
