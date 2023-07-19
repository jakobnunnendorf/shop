'use server';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

const supabase = createServerActionClient({ cookies });

export const get_profile_id = async () => {
    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();

    return currentSession?.user?.id;
};

export const check_if_adress_exists = async (
    type: string,
    profile_id: string
) => {
    const { data: address } = await supabase
        .from('addresses')
        .select('*')
        .eq('user_id', profile_id)
        .eq('type', type)
        .single();
    return address ? true : false;
};

async function update_or_insert_address(
    type: string,
    newAdress: object,
    profile_id: string
) {
    const address_exists = await check_if_adress_exists(type, profile_id);

    const newAdress_filtered = Object.fromEntries(
        Object.entries(newAdress).filter(([value]) =>
            value ? value.length > 0 : false
        )
    );
    if (address_exists) {
        await supabase
            .from('addresses')
            .update(newAdress_filtered)
            .eq('user_id', profile_id)
            .eq('type', type);
    } else {
        await supabase.from('addresses').insert([
            {
                user_id: profile_id,
                type: type,
                ...newAdress_filtered,
            },
        ]);
    }
}

async function updateContactInfo(newProfileData: object, profile_id: string) {
    const newProfileData_filtered = Object.fromEntries(
        Object.entries(newProfileData).filter(([value]) =>
            value ? value.length > 0 : false
        )
    );
    await supabase
        .from('profiles')
        .update(newProfileData_filtered)
        .eq('profile_id', profile_id);
}

export const UpdateProfileInfo = async (formData: FormData) => {
    const profile_id = await get_profile_id();

    const newProfile = {
        firstName: formData.get('newFirstName'),
        lastName: formData.get('newLastName'),
        email: formData.get('newEmail'),
        phone: formData.get('newPhone'),
    };

    const newDeliveryAddress = {
        street: formData.get('newDeliveryAddress_street'),
        house_number: formData.get('newDeliveryAddress_house_number'),
        zip_code: formData.get('newDeliveryAddress_zip_code'),
        city: formData.get('newDeliveryAddress_city'),
    };

    const billing_same_as_delivery =
        formData.get('billing_same_as_delivery') === 'on';

    if (profile_id) {
        if (billing_same_as_delivery) {
            await update_or_insert_address(
                'billing',
                newDeliveryAddress,
                profile_id
            );
        } else {
            const newBillingAddress = {
                street: formData.get('newBillingAddress_street'),
                house_number: formData.get('newBillingAddress_house_number'),
                zip_code: formData.get('newBillingAddress_zip_code'),
                city: formData.get('newBillingAddress_city'),
            };
            await update_or_insert_address(
                'billing',
                newBillingAddress,
                profile_id
            );
        }
        await updateContactInfo(newProfile, profile_id);
        await update_or_insert_address(
            'delivery',
            newDeliveryAddress,
            profile_id
        );
    }

    revalidatePath('/user');
};
