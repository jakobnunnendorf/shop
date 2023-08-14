/*
    This component is used to display the user information for the current logged user or for a specific user by passing his/her ID as a prop.
*/
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function UserInfoPanel({
    user_id,
}: {
    user_id?: string | undefined;
}) {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();

    if (user_id == undefined) user_id = currentSession?.user?.id; // if the prop hasn't been passed then use the current logged user's ID

    const { data: profile, error: profileFetchError } = await supabase
        .from('profiles')
        .select('*')
        .eq('profile_id', user_id)
        .single();

    const fetchAddressData = async () => {
        const { data: deliveryAddress, error: deliveryAddressFetchError } =
            await supabase
                .from('addresses')
                .select('*')
                .eq('type', 'delivery')
                .single();

        const { data: billingAddress, error: billingAddressFetchError } =
            await supabase
                .from('addresses')
                .select('*')
                .eq('type', 'billing')
                .single();

        if (
            deliveryAddressFetchError ||
            profileFetchError ||
            billingAddressFetchError
        ) {
        }

        let deliveryAddress_string;
        let billingAddress_string;

        if (
            !(deliveryAddress?.street?.length > 0) ||
            !(deliveryAddress?.house_number?.length > 0) ||
            !(deliveryAddress?.zip_code?.length > 0) ||
            !(deliveryAddress?.city?.length > 0) ||
            !deliveryAddress
        ) {
            deliveryAddress_string = '';
        } else {
            deliveryAddress_string = `${deliveryAddress?.street} ${deliveryAddress?.house_number}, ${deliveryAddress?.zip_code} ${deliveryAddress?.city}`;
        }

        if (
            !(billingAddress?.street?.length > 0) ||
            !(billingAddress?.house_number?.length > 0) ||
            !(billingAddress?.zip_code?.length > 0) ||
            !(billingAddress?.city?.length > 0) ||
            !billingAddress
        ) {
            billingAddress_string = '';
        } else {
            billingAddress_string = `${billingAddress?.street} ${billingAddress?.house_number}, ${billingAddress?.zip_code} ${billingAddress?.city}`;
        }

        if (
            deliveryAddress_string.length > 0 &&
            billingAddress_string === deliveryAddress_string
        ) {
            billingAddress_string = 'Identisch mit Lieferadresse';
        }

        return { deliveryAddress_string, billingAddress_string };
    };
    const { deliveryAddress_string, billingAddress_string } =
        await fetchAddressData();

    const information_grid = (
        <section className='relative grid h-full w-full grid-cols-12 gap-8 rounded-3xl border p-8 text-xl lg:w-fit'>
            <div className='col-span-6 '>
                <span className='font-bold'>Vorname: </span>
                <br />
                {profile?.firstName}
            </div>
            <div className='col-span-6 '>
                <span className='font-bold'>
                    Nachname: <br />
                </span>
                {profile?.lastName}
            </div>
            <div className='col-span-12 lg:col-span-6 '>
                <span className='font-bold'>
                    Email: <br />
                </span>
                {profile?.email}
            </div>
            <div className='col-span-6 '>
                <span className='font-bold'>
                    Telefon: <br />
                </span>
                {profile?.phone}
            </div>
            <div className='col-span-12 '>
                <span className='font-bold'>Lieferadresse:</span>
                <br /> {deliveryAddress_string}
            </div>
            <div className='col-span-12 '>
                <span className='font-bold'>Rechnungsadresse:</span>
                <br /> {billingAddress_string}
            </div>
        </section>
    );

    return information_grid;
}
