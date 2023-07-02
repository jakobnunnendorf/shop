import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@lib/stripe';

// const supabase = createServerComponentClient({ cookies });

export const POST = async (request: Request) => {
    const supabase = createServerComponentClient({ cookies });

    const body: any = await request.json();
    const { cartItems, metadata } = body;

    const product_line_items = cartItems.map((item: any) => ({
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

    const total_line_items = [...product_line_items, ...delivery_line_item];

    // if (!userSession) return NextResponse.json({ error: 'You must be logged in to checkout' }, { status: 401 })

    try {
        // const order = await supabase.from('orders').insert({...})
        // const clearCart() = await supabase.from('cart').delete().match({ user_id: userSession.user.id })...
        const { data: orderData } = (await supabase //TODO: add checks if signup or login worked
            .from('orders')
            .insert([{ cart: cartItems }])) as any;
        metadata.order_id = orderData?.order_id; // add order id to metadata

        // for signup_and_checkout, create user and add order id to profile
        if (metadata.checkout_mode === 'signup_and_checkout') {
            const { data: signed_up_user } = await supabase.auth.signUp({
                email: metadata.email,
                password: metadata.password,
            });
            await supabase
                .from('profiles')
                .update({ orders: [orderData?.order_id] })
                .eq('profile_id', signed_up_user?.user?.id);
            metadata.user_id = signed_up_user?.user?.id; // add user id to metadata
        }

        // if user exists he may already have existing orders and we need to push the order id
        else if (metadata.checkout_mode === 'login_and_checkout') {
            const { data: logged_in_user } =
                await supabase.auth.signInWithPassword({
                    email: metadata.email,
                    password: metadata.password,
                });
            const { data: existingOrders } = await supabase
                .from('profiles')
                .select('orders')
                .eq('profile_id', logged_in_user?.user?.id);
            // if user has existing orders, add the new order id to the array
            const updated_Orders_Array = existingOrders
                ? [...existingOrders, orderData?.order_id]
                : orderData?.order_id;
            await supabase
                .from('profiles')
                .update({ orders: updated_Orders_Array })
                .eq('profile_id', logged_in_user?.user?.id);
        }

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

        return NextResponse.json({ url: checkOutSession.url });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }
};
