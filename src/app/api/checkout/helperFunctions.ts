export const returnTotalLineItems = (body: checkoutBody): stripeLineItem[] => {
        const { cartItems } = body;
        const product_line_items = cartItems.map((item) => {
            const product_line_item: stripeLineItem = {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: `${item.product.title} - ${item.color}`,
                        images: [
                            item.product.imageURL_object.default_color
                                .imageURL_array[0],
                        ],
                    },
                    unit_amount: item.product.price * 100,
                },
                quantity: item.quantity,
            };
            return product_line_item;
        });
        const delivery_line_item: stripeLineItem[] = [
            {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Versand',
                    },
                    unit_amount: 4.99 * 100,
                },
                quantity: 1,
            },
        ];
        const total_line_items = [...product_line_items, ...delivery_line_item];
        return total_line_items;
};
    
