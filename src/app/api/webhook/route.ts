import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@lib/stripe';


// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

export async function POST(req: Request) {
    const supabase = createServerComponentClient({ cookies });

    const sig = req.headers.get('stripe-signature') || '';

    const bodyInfoText: string = await req.text();
    const bodyInfo: any = JSON.parse(bodyInfoText);

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            bodyInfoText,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET || ''
        );
        if (bodyInfo.type === 'checkout.session.completed') {
            await supabase
                .from('orders')
                .update({
                    status: 'paid',
                    customerDetails: bodyInfo.data.object.customerDetails,
                })
                .eq('orderId', bodyInfo.data.object.metadata.orderId);
            if (
                bodyInfo.data.object.metadata.checkoutMode ===
                'signup and checkout'
            ) {
                await supabase
                    .from('profiles')
                    .update({ email: [bodyInfo.data.object.metadata.email] })
                    .eq('profileId', bodyInfo.data.object.metadata.userId);
            }
            // TODO: send email to customer
        }
    } catch (err) {
        await supabase
            .from('debugging')
            .insert([{ message: err, comment: 'error' }]);
        return NextResponse.json(
            { error: 'Something went wrong' },
            { status: 500 }
        );
    }

    return NextResponse.json(bodyInfo);
}
//4242424242424242
