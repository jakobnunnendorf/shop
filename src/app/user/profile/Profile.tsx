'use client';
import {
    createClientComponentClient,
    Session,
} from '@supabase/auth-helpers-nextjs';
import { useCallback, useEffect, useState } from 'react';

export default function Profile({ session }: { session: Session | null }) {
    const supabase = createClientComponentClient();
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState<any>(null);
    const [deliveryAdress, setDeliveryAdress] = useState<any>(null);
    const [billingAdress, setBillingAdress] = useState<any>(null);

    const user = session?.user;

    const getProfile = useCallback(async () => {
        try {
            setLoading(true);

            const {
                data: profileData,
                error: profileFetchError,
                status: profileFetchStatus,
            } = await supabase
                .from('profiles')
                .select()
                .eq('profile_id', user?.id)
                .single();

            if (profileFetchError && profileFetchStatus !== 406) {
                throw profileFetchError;
            }

            if (profileData) {
                setProfile(profileData);
            }
        } catch (profileFetchError) {
            alert('Error loading user data!');
        } finally {
            setLoading(false);
        }
    }, [user, supabase]);

    const getAdresses = useCallback(async () => {
        try {
            setLoading(true);

            const {
                data: deliveryAdressData,
                error: deliveryAdressFetchError,
                status: deliveryAdressFetchStatus,
            } = await supabase
                .from('adresses')
                .select()
                .eq('user_id', user?.id)
                .eq('type', 'delivery')
                .single();
            const {
                data: billingAdressData,
                error: billingAdressFetchError,
                status: billingAdressFetchStatus,
            } = await supabase
                .from('adresses')
                .select()
                .eq('user_id', user?.id)
                .eq('type', 'billing')
                .single();

            if (deliveryAdressFetchError && deliveryAdressFetchStatus !== 406) {
                throw deliveryAdressFetchError;
            }

            if (deliveryAdressData) {
                const deliveryAdressString = deliveryAdressData?.street
                    .concat(' ', deliveryAdressData?.house_number)
                    .concat(', ', deliveryAdressData?.zip_code)
                    .concat(', ', deliveryAdressData?.city)
                    .concat(', ', deliveryAdressData?.country);
                setDeliveryAdress(deliveryAdressString);
            }
        } catch (deliveryAdressFetchError) {
            alert('Error loading adress data!');
        } finally {
            setLoading(false);
        }
    }, [user, supabase]);

    useEffect(() => {
        getProfile();
        getAdresses();
    }, [user, getProfile, getAdresses]);

    // async function updateProfile({
    //     username,
    //     website,
    //     avatar_url,
    // }: {
    //     username: string | null;
    //     fullname: string | null;
    //     website: string | null;
    //     avatar_url: string | null;
    // }) {
    //     try {
    //         setLoading(true);

    //     const { error } = await supabase.from('profiles').upsert({
    //             id: user?.id as string,
    //             full_name: firstName,
    //             username,
    //             website,
    //             avatar_url,
    //             updated_at: new Date().toISOString(),
    //         });
    //         if (error) throw error;
    //         alert('Profile updated!');
    //     } catch (error) {
    //         alert('Error updating the data!');
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    const userInfoPanel = (
        <section className='grid w-full h-full grid-cols-12 gap-8 p-8 text-xl border rounded-3xl lg:w-fit'>
            {/* <pre>{JSON.stringify(deliveryAdress, null, 2)}</pre> */}
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
                <br /> {deliveryAdress}
            </div>
            <div className='col-span-12 '>
                <span className='font-bold'>Rechnungsadresse:</span>
                <br />{' '}
                {billingAdress ? billingAdress : 'Identisch mit Lieferadresse'}
            </div>
        </section>
    );

    const wrapper = (
        <section className='flex flex-col items-center justify-center space-y-8 h-fit'>
            <h2 className='text-center'>
                <span className='text-3xl '>
                    Hallo{' '}
                    <span className='font-bold text-coastal-blue-10'>
                        {profile?.firstName}
                    </span>
                    ,
                </span>{' '}
                <br />
                <span className='text-2xl'>Willkommen in deinem Profil</span>
            </h2>
            <img
                src={profile?.avatar_url}
                alt='Profile picture'
                className='object-cover w-32 h-32 col-span-3 rounded-full'
            />
            {userInfoPanel}
        </section>
    );

    return wrapper;
}
