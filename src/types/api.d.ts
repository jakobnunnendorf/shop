interface checkoutBody {
    cartItems: cart_item[];
    metadata?: checkoutMetadata;
}
interface checkoutMetadata {
    email: email;
    password: string;
    user_id?: UUID;
    order_id?: UUID | null;
}
interface stripeLineItem {
    price_data: {
        currency: 'eur';
        product_data: {
            name: string;
            images?: string[];
        };
        unit_amount: number;
    };
    quantity: number;
}
