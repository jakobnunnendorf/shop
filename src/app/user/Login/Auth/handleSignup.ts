'use server';

import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { AuthError, PostgrestError } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface Errors {
    passwordsDontMatch?: boolean;
    addedProfileError?: PostgrestError | null;
    userSignupError?: AuthError | null;
}

export const handleSignup = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string; errors: Errors }> => {
    const password = formData.get('password') as string;
    const repeatPassword = formData.get('repeatPassword') as string;
    if (password !== repeatPassword) {
        return {
            message: 'Passwörter stimmen nicht überein.',
            errors: { passwordsDontMatch: true },
        };
    }
    const supabase = createServerActionClient({ cookies });
    const email = formData.get('email') as string;
    const { data: userSignupData, error: userSignupError } =
        await supabase.auth.signUp({
            email: email,
            password: password,
        });
    const userId = userSignupData?.user?.id;
    const profile_data = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        phone: formData.get('phone') as string,
    };
    const { error: addedProfileError } = await supabase
        .from('profiles')
        .update(profile_data)
        .eq('profileId', userId);
    if (!userSignupError && !addedProfileError) {
        redirect('/user/signup-success');
    } else {
        return {
            message: 'Es ist ein Fehler aufgetreten.',
            errors: { addedProfileError, userSignupError },
        };
    }
};
