import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@lib/stripe';


export const POST = async (request: Request) => {
    const supabase = createServerComponentClient({ cookies });

    const body: any = await request.json();
    const { cartItems, metadata } = body;

    const productLineItems = cartItems.map((item: any) => ({
        price_data: {
            currency: 'eur',
            product_data: {
                name: item.product.title,
                images: [item.product.imageURL[0]],
            },
            unit_amount: item.product.price * 100,
        },
        quantity: item.quantity,
    }));
    const deliveryLineItems = [
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

    const customerEmailValue = metadata.email ? metadata.email : null;

    const totalLineItems = [...productLineItems, ...deliveryLineItems];

    // if (!userSession) return NextResponse.json({ error: 'You must be logged in to checkout' }, { status: 401 })

    try {
        // const order = await supabase.from('orders').insert({...})
        // const clearCart() = await supabase.from('cart').delete().match({ userId: userSession.user.id })...
        const { data: orderData }: { data: any } = await supabase //TODO: add checks if signup or login worked
            .from('orders')
            .insert([{ cart: cartItems }])
            .select()
            .single();
        metadata.orderId = orderData?.orderId; // add order id to metadata

        // for signup and checkout, create user and add order id to profile
        if (metadata.checkoutMode === 'signup and checkout') {
            const { data: signedUpUser } = await supabase.auth.signUp({
                email: metadata.email,
                password: metadata.password,
            });
            await supabase
                .from('profiles')
                .update({ orders: [orderData?.orderId] })
                .eq('profileId', signedUpUser?.user?.id);
            metadata.userId = signedUpUser?.user?.id; // add user id to metadata
        }

        // if user exists he may already have existing orders and we need to push the order id
        else if (metadata.checkoutMode === 'login and checkout') {
            const { data: loggedInUser } =
                await supabase.auth.signInWithPassword({
                    email: metadata.email,
                    password: metadata.password,
                });
            const { data: existingOrders } = await supabase
                .from('profiles')
                .select('orders')
                .eq('profileId', loggedInUser?.user?.id);
            // if user has existing orders, add the new order id to the array
            const updatedOrdersArray = existingOrders
                ? [...existingOrders, orderData?.orderId]
                : orderData?.orderId;
            await supabase
                .from('profiles')
                .update({ orders: updatedOrdersArray })
                .eq('profileId', loggedInUser?.user?.id);
        }

        const checkOutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: totalLineItems,
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_URL}/warenkorb/bestellung-erfolgreich`,
            cancel_url: `${process.env.NEXT_PUBLIC_URL}/warenkorb`,
            locale: 'de',
            client_reference_id: orderData?.orderId,
            shipping_address_collection: {
                allowed_countries: ['DE'],
            },
            metadata: metadata,
            customer_email: customerEmailValue,
        });

        return NextResponse.json({ url: checkOutSession.url });
    } catch (error) {
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
};
