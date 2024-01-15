'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const handleLogin = async (prevState: any, formData: FormData) => {
    'use server';
    const supabase = createServerActionClient({ cookies });
    const password = formData.get('password') as string;
    const email = formData.get('email') as string;

    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (!error) {
        revalidatePath('/user');
        redirect('/user');
        return { message: 'Erfolgreich eingeloggt.', errors: {} };
    } else {
        return { message: 'Es ist ein Fehler aufgetreten', errors: { error } };
    }
};
