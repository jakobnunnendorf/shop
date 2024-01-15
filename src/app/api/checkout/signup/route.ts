import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@lib/stripe';
import { returnTotalLineItems } from '../helperFunctions';

export const POST = async (request: NextRequest) => {
    const supabase = createServerComponentClient({ cookies });
    const body = (await request.json()) as CheckoutBody;

    const totalLineItems = await returnTotalLineItems(body);
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
                            userId: signup?.user?.id,
                        },
                    ])
                    .select()
                    .single()) as SbFetchResponseObject<Order>;

                if (signup.user?.id) {
                    await supabase
                        .from('profiles')
                        .update({ orders: [orderData?.orderId] })
                        .eq('profileId', signup?.user?.id);
                    metadata.userId = signup?.user?.id as UUID;
                    metadata.orderId = orderData?.orderId || null;
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
                            client_reference_id: orderData?.orderId,
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
