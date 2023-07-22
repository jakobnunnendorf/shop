import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@lib/stripe';

export const POST = async (request: NextRequest) => {
    console.log('request', request);
    const supabase = createServerComponentClient({ cookies });

    const body: any = await request.json();
    console.log('body', body);
    const { cartItems }: { cartItems: cart_item[]; metadata: any } = body;
    console.log('cartItems', cartItems);
    console.log('metadata');

    const product_line_items = cartItems.map((item: cart_item) => {
        console.log('item', item);
        console.log(item.product.title);
        console.log([
            item.product.imageURL_object.default_color.imageURL_array[0],
        ]);
        console.log(item.product.price * 100);
        console.log(item.quantity);
        const product_line_item = {
            price_data: {
                currency: 'eur',
                product_data: {
                    name: item.product.title,
                    images: [
                        item.product.imageURL_object.default_color
                            .imageURL_array[0],
                    ],
                },
                unit_amount: item.product.price * 100,
            },
            quantity: item.quantity,
        };
        console.log('product_line_item', product_line_item);
        return product_line_item;
    });

    console.log('product_line_items', product_line_items);
    const delivery_line_item = [
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
    console.log('delivery_line_item', delivery_line_item);

    const total_line_items = [...product_line_items, ...delivery_line_item];
    console.log('total_line_items', total_line_items);

    try {
        const { data: orderData, error }: { data: any; error: any } =
            await supabase //TODO: add checks if signup or login worked
                .from('orders')
                .insert([{ cart: cartItems }])
                .select()
                .single();
        console.log('orderData', orderData);
        console.log('error', error);
        const metadata = { order_id: orderData?.order_id }; // add order id to metadata
        console.log('metadata', metadata);
        console.log(
            `${process.env.NEXT_PUBLIC_URL}/warenkorb/bestellung-erfolgreich`
        );
        const checkOutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: total_line_items,
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_URL}/warenkorb/bestellung-erfolgreich`,
            cancel_url: `${process.env.NEXT_PUBLIC_URL}/warenkorb`,
            locale: 'de',
            client_reference_id: orderData?.order_id,
            shipping_address_collection: {
                allowed_countries: ['DE'],
            },
            metadata: metadata,
        });
        console.log('checkOutSession', checkOutSession);

        return NextResponse.json({ url: checkOutSession.url });
    } catch (error) {
        console.log(error);
        console.error('Stripe error', error);
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
};
