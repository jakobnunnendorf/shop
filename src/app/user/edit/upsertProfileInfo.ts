import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const upsertProfileInfo = async (formData: FormData) => {
    'use server';
    const supabase = createServerComponentClient({ cookies });
    const { data, error: profileIdError } = await supabase.auth.getUser();
    const profileId = data.user?.id;
    if (!profileId) {
        throw new Error(`Couldn't fetch profileId: ${profileIdError}`);
    }
    const delivery: Address = {
        city: (formData.get('deliveryCity') as string) || null,
        country: 'Deutschland',
        line1: (formData.get('deliveryLine1') as string) || null,
        line2: (formData.get('deliveryLine2') as string) || null,
        postalCode: (formData.get('deliveryPostalCode') as string) || null,
        state: null,
    };
    const billing: Address = {
        city: (formData.get('billingCity') as string) || null,
        country: 'Deutschland',
        line1: (formData.get('billingLine1') as string) || null,
        line2: (formData.get('billingLine2') as string) || null,
        postalCode: (formData.get('billingPostalCode') as string) || null,
        state: null,
    };
    const profile: Partial<Profile> = {
        profileId: profileId as UUID,
        firstName: (formData.get('firstName') as string) || undefined,
        lastName: (formData.get('lastName') as string) || undefined,
        email: (formData.get('email') as Email) || undefined,
        phone: (formData.get('phone') as string) || undefined,
        delivery:
            delivery.city ||
            delivery.line1 ||
            delivery.line2 ||
            delivery.postalCode
                ? delivery
                : undefined,
        billing:
            billing.city || billing.line1 || billing.line2 || billing.postalCode
                ? billing
                : undefined,
    };
    const { error } = await supabase.from('profiles').upsert(profile).select();
    if (error) {
        throw new Error(`Couldn't update profile: ${JSON.stringify(error)}`);
    } else {
        revalidatePath('/user');
        redirect('/user');
    }
};
