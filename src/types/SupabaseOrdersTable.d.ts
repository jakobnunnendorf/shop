interface Order {
    orderId: UUID;
    createdAt: CreatedAt;
    status: OrderStatus;
    userId: UUID | 'guest';
    cart: CartItem[];
    customerDetails: CustomerDetails | null;
}

type OrderStatus =
    | 'unbezahlt'
    | 'bezahlt'
    | 'versandt'
    | 'zugestellt'
    | 'storniert';

interface CustomerDetails {
    delivery: Address;
    billing: Address;
    email: Email;
    name: string;
    phone: string | null;
    taxExempt: string;
    taxIds: string[];
}

type CartItem = {
    productId: UUID;
    quantity: number;
    color: ColorKey | null;
};

type WishListItem = CartItem;
