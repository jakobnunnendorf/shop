import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@lib/stripe';
import { returnTotalLineItems } from '../helperFunctions';

export const POST = async (request: NextRequest) => {
    const supabase = createServerComponentClient({ cookies });
    const body = (await request.json()) as checkoutBody;

    const totalLineItems = returnTotalLineItems(body);
    const metadata = body.metadata || null;

    try {
        if (metadata) {
            const { data: signup, error } = await supabase.auth.signUp({
                email: metadata.email,
                password: metadata.password,
            });
            if (signup && !error) {
                const { data: orderData, error: sbOrderError } = (await supabase
                    .from('orders')
                    .insert([
                        {
                            cart: body.cartItems,
                            user_id: signup?.user?.id,
                        },
                    ])
                    .select()
                    .single()) as sb_fetchResponseObject<order>;

                if (signup.user?.id) {
                    await supabase
                        .from('profiles')
                        .update({ orders: [orderData?.order_id] })
                        .eq('profile_id', signup?.user?.id);
                    metadata.user_id = signup?.user?.id as UUID;
                    metadata.order_id = orderData?.order_id || null;
                }

                if (!sbOrderError) {
                    const checkOutSession =
                        await stripe.checkout.sessions.create({
                            payment_method_types: ['card'],
                            line_items: totalLineItems,
                            mode: 'payment',
                            success_url: `${process.env.NEXT_PUBLIC_URL}/warenkorb/bestellung-erfolgreich`,
                            cancel_url: `${process.env.NEXT_PUBLIC_URL}/warenkorb`,
                            locale: 'de',
                            client_reference_id: orderData?.order_id,
                            shipping_address_collection: {
                                allowed_countries: ['DE'],
                            },
                            metadata: { ...metadata },
                            customer_email: metadata
                                ? metadata.email
                                : undefined,
                        });
                    return NextResponse.json({ url: checkOutSession.url });
                } else {
                    throw new Error(`${sbOrderError}`);
                }
            } else {
                throw new Error(`${error}`);
            }
        }
    } catch (error) {
        return NextResponse.json(
            { error: `Something went wrong ${error}` },
            { status: 500 }
        );
    }
};
