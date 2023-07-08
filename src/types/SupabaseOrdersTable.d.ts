interface order {
    order_id: UUID;
    created_at: created_at;
    status: order_status;
    user_id: UUID | 'guest';
    cart: cart_item[];
    customer_details: customer_details | null;
}

type order_status = 'unpaid' | 'paid' | 'shipped' | 'delivered' | 'canceled';

interface customer_details {
    address: address;
    email: email;
    name: string;
    phone: string | null;
    tax_exempt: string;
    tax_ids: string[];
}

interface cart_item {
    product: product;
    quantity: number;
}
