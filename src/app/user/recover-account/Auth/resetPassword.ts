'use server';

import {
    createServerActionClient,
    createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const resetPassword = async (
    state: { message: string; errors?: {} },
    formData: FormData
) => {
    'use server';
    const supabase = createServerActionClient({ cookies });
    const enteredEmail = formData.get('email') as string;

    const { error } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', enteredEmail)
        .single();
    if (error) {
        return {
            message: 'Email nicht bekannt',
            errors: { error },
        };
    } else {
        const { error } =
            await supabase.auth.resetPasswordForEmail(enteredEmail);
        if (error) {
            console.log(error);
            return {
                message: 'Bitte kontaktiere unseren Kundendienst',
                errors: { error },
            };
        } else {
            return {
                message: 'Wiederherstellungsemail wurde versandt.',
                errors: {},
            };
        }
    }
};
