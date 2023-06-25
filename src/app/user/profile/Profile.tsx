'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { ProfileInfoContext } from '@globalState/ProfileInfoContext';

import UpdateProfile from './UpdateProfile';

export default function Profile({
    UserInfoPanel,
    Greeting,
}: {
    UserInfoPanel: React.ReactNode;
    Greeting: React.ReactNode;
}) {
    const { value: profile, setValue: setProfile } =
        useContext(ProfileInfoContext); // subscribe to ProfileInfoContext
        
        const router = useRouter();
    const HandleLogout = async () => {
        const supabase = createClientComponentClient();
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.log(error);
        }
        router.refresh();
    };

    const wrapper = (
        <section className='flex flex-col items-center justify-center space-y-8 h-fit'>
            {Greeting}
            {profile.editProfile ? <UpdateProfile /> : UserInfoPanel}
            {!profile.editProfile && (
                <div className='flex space-x-8'>
                    <button
                        onClick={HandleLogout}
                        className='flex justify-center px-4 py-2 font-bold border w-36 rounded-xl border-coastal-blue-10 text-coastal-blue-10 '
                    >
                        ausloggen
                    </button>
                    <button
                        className='flex justify-center px-4 py-2 space-x-2 font-bold text-white w-36 rounded-xl bg-coastal-blue-10'
                        onClick={() =>
                            setProfile({ ...profile, editProfile: true })
                        }
                    >
                        <span>bearbeiten</span>
                    </button>
                </div>
            )}
        </section>
    );

    return wrapper;
}
