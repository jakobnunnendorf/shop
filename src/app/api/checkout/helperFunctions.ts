import supabase from '@utils/supabase';

export const returnTotalLineItems = async (
    body: CheckoutBody
): Promise<StripeLineItem[]> => {
    const { cartItems } = body;

    let index = 0;
    const productLineItems: StripeLineItem[] = [];
    while (index < cartItems.length) {
        const cartItemId: UUID = cartItems[index].productId;
        const cartItemColor: string | null = cartItems[index].color;
        const cartItemQuantity: number = cartItems[index].quantity;

        const { data: productData, error } = (await supabase
            .from('products')
            .select('')
            .eq('id', cartItemId)
            .single()) as SbFetchResponseObject<Product>;

        if (!productData) {
            throw new Error(
                `Couldn't fetch productData: ${JSON.stringify(error)}`
            );
        }

        const productLineItem: StripeLineItem = {
            priceData: {
                currency: 'eur',
                productData: {
                    name: `${productData.title} - ${cartItemColor}`,
                    images: [
                        productData.imageURLObject.defaultColor
                            .imageURLArray[0] || '',
                    ],
                },
                unitAmount: productData.price * 100,
            },
            quantity: cartItemQuantity,
        };
        productLineItems.push(productLineItem);
    }

    const deliveryLineItem: StripeLineItem[] = [
        {
            priceData: {
                currency: 'eur',
                productData: {
                    name: 'Versand',
                },
                unitAmount: 4.99 * 100,
            },
            quantity: 1,
        },
    ];
    const totalLineItems = [...productLineItems, ...deliveryLineItem];
    return totalLineItems;
};
