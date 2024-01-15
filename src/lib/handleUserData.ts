import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { convertAdressObjectToString } from './dataManipulation';
import supabase from '@utils/supabase';

export const kickOutIfNotLoggedInAsAdmin = async () => {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();
    const { data: userRole } = await supabase
        .from('profiles')
        .select('role')
        .eq('profileId', session?.user.id)
        .single();

    if (!session || userRole?.role !== 'admin') {
        redirect('/');
    }
};

export const returnCurrentSession = async () => {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();
    return currentSession;
};

interface AdressObject {
    delivery: Address | null;
    billing: Address | null;
}

export const returnCurrentUserId = async (): Promise<UUID | undefined> => {
    const currentSession = await returnCurrentSession();
    const userId = currentSession?.user.id as UUID | undefined;
    return userId;
};

export const returnAddressStrings = async (profileId: UUID) => {
    const { data: addresses, error } = (await supabase
        .from('profiles')
        .select('delivery, billing')
        .eq('profileId', profileId)
        .single()) as SbFetchResponseObject<AdressObject>;
    if (!addresses) {
        throw new Error(`Couldn't fetch addresses ${JSON.stringify(error)}`);
    }
    const { delivery, billing } = addresses;
    const deliveryString = convertAdressObjectToString(delivery);
    const billingString = convertAdressObjectToString(billing);
    return [deliveryString, billingString];
};
