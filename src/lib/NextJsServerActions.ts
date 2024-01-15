'use server';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import supabase from '@utils/supabase';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';


export const getProfileId = async () => {
    const supabase = createServerActionClient({ cookies });
    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();

    return currentSession?.user?.id;
};

export const checkIfAdressExists = async (type: string, profileId: string) => {
    const { data: address } = await supabase
        .from('addresses')
        .select('*')
        .eq('userId', profileId)
        .eq('type', type)
        .single();
    return address ? true : false;
};

async function updateOrInsertAddress(
    type: string,
    newAdress: object,
    profileId: string
) {
    const addressExists = await checkIfAdressExists(type, profileId);

    const newAdressFiltered = Object.fromEntries(
        Object.entries(newAdress).filter(([value]) =>
            value ? value.length > 0 : false
        )
    );
    if (addressExists) {
        await supabase
            .from('addresses')
            .update(newAdressFiltered)
            .eq('userId', profileId)
            .eq('type', type);
    } else {
        await supabase.from('addresses').insert([
            {
                userId: profileId,
                type: type,
                ...newAdressFiltered,
            },
        ]);
    }
}

async function updateContactInfo(newProfileData: object, profileId: string) {
    const newProfileDataFiltered = Object.fromEntries(
        Object.entries(newProfileData).filter(([value]) =>
            value ? value.length > 0 : false
        )
    );
    await supabase
        .from('profiles')
        .update(newProfileDataFiltered)
        .eq('profileId', profileId);
}

export const UpdateProfileInfo = async (formData: FormData) => {
    const profileId = await getProfileId();

    const newProfile = {
        firstName: formData.get('newFirstName'),
        lastName: formData.get('newLastName'),
        email: formData.get('newEmail'),
        phone: formData.get('newPhone'),
    };

    const newDeliveryAddress = {
        street: formData.get('newDeliveryAddressStreet'),
        houseNumber: formData.get('newDeliveryAddressHouseNumber'),
        zipCode: formData.get('newDeliveryAddressZipCode'),
        city: formData.get('newDeliveryAddressCity'),
    };

    const billingSameAsDelivery =
        formData.get('billingSameAsDelivery') === 'on';

    if (profileId) {
        if (billingSameAsDelivery) {
            await updateOrInsertAddress(
                'billing',
                newDeliveryAddress,
                profileId
            );
        } else {
            const newBillingAddress = {
                street: formData.get('newBillingAddressStreet'),
                houseNumber: formData.get('newBillingAddressHouseNumber'),
                zipCode: formData.get('newBillingAddressZipCode'),
                city: formData.get('newBillingAddressCity'),
            };
            await updateOrInsertAddress(
                'billing',
                newBillingAddress,
                profileId
            );
        }
        await updateContactInfo(newProfile, profileId);
        await updateOrInsertAddress('delivery', newDeliveryAddress, profileId);
    }

    revalidatePath('/user');
};
