import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@lib/stripe';
import { metadata } from '@app/page';

const supabase = createServerComponentClient({ cookies });

export const POST = async (request: Request) => {
    const body: any = await request.json();

    const { cartItems } = body;

    // const userSession = await supabase.auth.getSession()

    // if (!userSession) return NextResponse.json({ error: 'You must be logged in to checkout' }, { status: 401 })

    try {
        // const order = await supabase.from('orders').insert({...})
        // const clearCart() = await supabase.from('cart').delete().match({ user_id: userSession.user.id })...

        const checkOutSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: cartItems.map((item: any) => ({
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: item.product.title,
                        images: [item.product.imageURL[0]],
                    },
                    unit_amount: item.product.price * 100,
                },
                quantity: item.quantity,
            })),
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_URL}/warenkorb/bestellung-erfolgreich`,
            cancel_url: `${process.env.NEXT_PUBLIC_URL}/warenkorb`,
            locale: 'de',
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
