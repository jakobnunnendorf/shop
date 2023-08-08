// TODO: implement type safety and check for validity of inputs
// TODO: add a field for additional address information

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useContext, useEffect, useState } from 'react';
import {
    ProfileInfoContext,
    ProfileInfoContextType,
} from '@globalState/ProfileInfoContext';
import { UpdateProfileInfo } from '@lib/NextJsServerActions';

interface currentAddresses {
    deliveryAddress: address;
    billingAddress: address;
}

export default function UpdateProfile() {
    // fetch pre existing profile data just to display as placeholders
    const [sameAsDelivery, setSameAsDelivery] = useState<boolean>(false);
    const [currentProfileInfo, setCurrentProfileInfo] =
        useState<profile | null>(null);
    const [currentAddresses, setCurrentAddresses] =
        useState<currentAddresses | null>(null);
    useEffect(() => {
        const supabase = createClientComponentClient();
        const getCurrentProfileInfo = async () => {
            const { data } = (await supabase
                .from('profiles')
                .select()
                .single()) as { data: profile };
            setCurrentProfileInfo(data);
        };
        const getCurrentAddresses = async () => {
            const { data: deliveryAddress } = (await supabase
                .from('addresses')
                .select()
                .eq('type', 'delivery')
                .single()) as { data: address };
            const { data: billingAddress } = (await supabase
                .from('addresses')
                .select()
                .eq('type', 'billing')
                .single()) as { data: address };
            setCurrentAddresses({
                deliveryAddress: deliveryAddress,
                billingAddress: billingAddress,
            });
        };

        getCurrentProfileInfo();
        getCurrentAddresses();
    }, []);

    const { toggleEditProfile } = useContext(
        ProfileInfoContext
    ) as ProfileInfoContextType;

    const profile_inputs = (
        <div className='grid grid-cols-12 gap-8 '>
            <div className='col-span-6'>
                <span className='font-bold'>Vorname: </span>
                <br />
                <input
                    type='text'
                    placeholder={currentProfileInfo?.firstName || 'Vorname'}
                    className='rounded-lg border px-2'
                    name='newFirstName'
                />
            </div>
            <div className='col-span-6'>
                <span className='font-bold'>
                    Nachname: <br />
                </span>
                <input
                    type='text'
                    placeholder={currentProfileInfo?.lastName || 'Nachname'}
                    className='rounded-lg border px-2'
                    name='newLastName'
                />
            </div>
            <div className='col-span-12 lg:col-span-6'>
                <span className='font-bold'>
                    Email: <br />
                </span>
                <input
                    type='text'
                    placeholder={currentProfileInfo?.email}
                    className='rounded-lg border px-2'
                    name='newEmail'
                />
            </div>
            <div className='col-span-6'>
                <span className='font-bold'>
                    Telefon: <br />
                </span>
                <input
                    type='text'
                    placeholder={currentProfileInfo?.phone || 'Telefon'}
                    className='rounded-lg border px-2'
                    name='newPhone'
                />
            </div>
        </div>
    );
    const deliveryAddress_inputs = (
        <div className='col-span-12 grid grid-cols-[12]'>
            <div className='col-span-12 font-bold'>
                Lieferadresse: <br />
            </div>
            <input
                type='text'
                name='newDeliveryAddress_street'
                placeholder={currentAddresses?.deliveryAddress?.street}
                className='col-span-4 rounded-lg border'
            />
            <input
                type='text'
                name='newDeliveryAddress_house_number'
                placeholder={currentAddresses?.deliveryAddress?.house_number}
                className='col-span-1 w-8 rounded-lg border'
            />
            <input
                type='text'
                name='newDeliveryAddress_zip_code'
                placeholder={currentAddresses?.deliveryAddress?.zip_code}
                className='col-span-2 w-24 rounded-lg border'
            />
            <input
                type='text'
                name='newDeliveryAddress_city'
                placeholder={currentAddresses?.deliveryAddress?.city}
                className='col-span-4 w-36 rounded-lg border '
            />
        </div>
    );
    const billingAddress_inputs = (
        <div className='col-span-12 grid grid-cols-[12]'>
            <span className='col-span-12 font-bold'>
                Rechnungsadresse:{' '}
                <input
                    type='checkbox'
                    name='billing_same_as_delivery'
                    onChange={() => {
                        setSameAsDelivery(!sameAsDelivery);
                    }}
                />{' '}
                Identisch mit Lieferadresse
            </span>
            {!sameAsDelivery && (
                <>
                    <input
                        type='text'
                        name='newBillingAddress_street'
                        placeholder={currentAddresses?.billingAddress?.street}
                        className='col-span-4 rounded-lg border'
                    />
                    <input
                        type='text'
                        name='newBillingAddress_house_number'
                        placeholder={
                            currentAddresses?.billingAddress?.house_number
                        }
                        className='col-span-1 w-8 rounded-lg border'
                    />
                    <input
                        type='text'
                        name='newBillingAddress_zip_code'
                        placeholder={currentAddresses?.billingAddress?.zip_code}
                        className='col-span-2 w-24 rounded-lg border'
                    />
                    <input
                        type='text'
                        name='newBillingAddress_city'
                        placeholder={currentAddresses?.billingAddress?.city}
                        className='col-span-4 w-36 rounded-lg border '
                    />
                </>
            )}
        </div>
    );

    const address_inputs = (
        <div className='space-y-4'>
            {deliveryAddress_inputs}
            {billingAddress_inputs}
        </div>
    );
    const button_row = (
        <div className='flex space-x-8'>
            <button
                type='button'
                onClick={toggleEditProfile}
                className='flex w-36 justify-center rounded-xl border border-coastal-blue-10 px-4 py-2 font-bold text-coastal-blue-10 '
            >
                abbrechen
            </button>
            <button
                type='submit'
                className='flex w-36 justify-center space-x-2 rounded-xl bg-coastal-blue-10 px-4 py-2 font-bold text-white'
            >
                <span>speichern</span>
            </button>
        </div>
    );

    function handleSubmit(formData: FormData) {
        UpdateProfileInfo(formData);
        toggleEditProfile();
    }

    const content = (
        <form action={handleSubmit}>
            <section className='h-full w-full space-y-4 rounded-3xl border p-8 text-xl lg:w-fit'>
                {profile_inputs}
                {address_inputs}
            </section>
            {button_row}
        </form>
    );
    return content;
}
