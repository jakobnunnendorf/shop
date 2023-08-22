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
    {
        /*
    const profile_inputs = (
        <div className='grid w-screen grid-cols-12 lg:gap-8 '>
            <div className='col-span-6'>
                <span className='font-bold'>Vorname: </span>
                <br />
                <input
                    type='text'
                    placeholder={currentProfileInfo?.firstName || 'Vorname'}
                    className='w-full px-2 border rounded-lg'
                    name='newFirstName'
                />
            </div>
            <div className='col-span-6 '>
                <span className='font-bold'>
                    Nachname: <br />
                </span>
                <input
                    type='text'
                    placeholder={currentProfileInfo?.lastName || 'Nachname'}
                    className='w-full pl-2 border rounded-lg'
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
                    className='w-full px-2 border rounded-lg'
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
                    className='w-full px-2 border rounded-lg'
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
                className='w-full col-span-4 border rounded-lg'
            />
            <input
                type='text'
                name='newDeliveryAddress_house_number'
                placeholder={currentAddresses?.deliveryAddress?.house_number}
                className='w-8 col-span-1 border rounded-lg'
            />
            <input
                type='text'
                name='newDeliveryAddress_zip_code'
                placeholder={currentAddresses?.deliveryAddress?.zip_code}
                className='w-full col-span-2 border rounded-lg lg:w-24'
            />
            <input
                type='text'
                name='newDeliveryAddress_city'
                placeholder={currentAddresses?.deliveryAddress?.city}
                className='col-span-4 border rounded-lg w-36 '
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
                        className='col-span-4 border rounded-lg'
                    />
                    <input
                        type='text'
                        name='newBillingAddress_house_number'
                        placeholder={
                            currentAddresses?.billingAddress?.house_number
                        }
                        className='w-8 col-span-1 border rounded-lg'
                    />
                    <input
                        type='text'
                        name='newBillingAddress_zip_code'
                        placeholder={currentAddresses?.billingAddress?.zip_code}
                        className='w-24 col-span-2 border rounded-lg'
                    />
                    <input
                        type='text'
                        name='newBillingAddress_city'
                        placeholder={currentAddresses?.billingAddress?.city}
                        className='col-span-4 border rounded-lg w-36 '
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
    );*/
    }
    const button_row = (
        <div className='flex justify-center mt-2 space-x-8'>
            <button
                type='button'
                onClick={toggleEditProfile}
                className='flex justify-center px-4 py-2 font-bold border w-36 rounded-xl border-coastal-blue-10 text-coastal-blue-10 '
            >
                abbrechen
            </button>
            <button
                type='submit'
                className='flex justify-center px-4 py-2 space-x-2 font-bold text-white w-36 rounded-xl bg-coastal-blue-10'
            >
                <span>speichern</span>
            </button>
        </div>
    );

    function handleSubmit(formData: FormData) {
        UpdateProfileInfo(formData);
        toggleEditProfile();
    }

    const information_grid = (
        <section className='relative grid w-full grid-cols-12 gap-8 p-8 text-xl border h-fit rounded-3xl lg:w-fit'>
            <div className='col-span-6 '>
                <span className='font-bold'>Vorname: </span>
                <br />
                <input
                    type='text'
                    placeholder={currentProfileInfo?.firstName || ''}
                    className='w-full'
                />
            </div>
            <div className='col-span-6 '>
                <span className='font-bold'>
                    Nachname: <br />
                </span>
                <input
                    type='text'
                    placeholder={currentProfileInfo?.lastName || ''}
                    className='w-full'
                />
            </div>
            <div className='col-span-12 lg:col-span-6 '>
                <span className='font-bold'>
                    Email: <br />
                </span>
                <input
                    type='text'
                    placeholder={currentProfileInfo?.email || ''}
                    className='w-full'
                />
            </div>
            <div className='col-span-6 '>
                <span className='font-bold'>
                    Telefon: <br />
                </span>
                <input
                    type='text'
                    placeholder={currentProfileInfo?.phone || ''}
                    className='w-full'
                />
            </div>
            <div className='col-span-12 '>
                <span className='font-bold'>Lieferadresse:</span>
                <br />
                <input
                    type='text'
                    placeholder={currentProfileInfo?.delivery || ''}
                    className='w-full'
                />
            </div>
            <div className='col-span-12 '>
                <span className='font-bold'>Rechnungsadresse:</span>
                <br />{' '}
                <input
                    type='text'
                    placeholder={currentProfileInfo?.billing || ''}
                    className='w-full'
                />
            </div>
        </section>
    );

    const content = (
        <form action={handleSubmit}>
            {/* <section className='w-full h-full p-8 space-y-4 text-xl border rounded-3xl lg:w-fit'>
                {profile_inputs}
                {address_inputs}
            </section> */}
            {information_grid}
            {button_row}
        </form>
    );
    return content;
}
