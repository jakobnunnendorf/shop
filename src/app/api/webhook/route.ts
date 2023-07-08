import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@lib/stripe';


export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req: Request) {
    const supabase = createServerComponentClient({ cookies });

    const sig = req.headers.get('stripe-signature') || '';

    const body_info_text: string = await req.text();
    const body_info: any = JSON.parse(body_info_text);

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            body_info_text,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET || ''
        );
        if (body_info.type === 'checkout.session.completed') {
            await supabase
                .from('orders')
                .update({
                    status: 'paid',
                    customer_details: body_info.data.object.customer_details,
                })
                .eq('order_id', body_info.data.object.metadata.order_id);
            if (
                body_info.data.object.metadata.checkout_mode ===
                'signup_and_checkout'
            ) {
                await supabase
                    .from('profiles')
                    .update({ email: [body_info.data.object.metadata.email] })
                    .eq('profile_id', body_info.data.object.metadata.user_id);
            }
            // TODO: send email to customer
        }
    } catch (err) {
        console.log(err);
        await supabase
            .from('debugging')
            .insert([{ message: err, comment: 'error' }]);
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }

    return NextResponse.json(body_info);
}
//4242424242424242
