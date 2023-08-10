'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import {
    ProfileInfoContext,
    ProfileInfoContextType,
} from '@globalState/ProfileInfoContext';

import UpdateProfile from './UpdateProfile';

export default function Profile({
    UserInfoPanel,
    Greeting,
}: {
    UserInfoPanel: React.ReactNode;
    Greeting: React.ReactNode;
}) {
    const { editProfile, toggleEditProfile } = useContext(
        ProfileInfoContext
    ) as ProfileInfoContextType; // subscribe to ProfileInfoContext

    const router = useRouter();
    const HandleLogout = async () => {
        const supabase = createClientComponentClient();
        await supabase.auth.signOut();
        router.refresh();
    };
    const wrapper = (
        <section className='flex h-fit flex-col items-center justify-center space-y-8'>
            {Greeting}
            {editProfile ? <UpdateProfile /> : UserInfoPanel}
            {!editProfile && (
                <div className='flex space-x-8'>
                    <button
                        onClick={HandleLogout}
                        className='flex w-36 justify-center rounded-xl border border-coastal-blue-10 px-4 py-2 font-bold text-coastal-blue-10 '
                    >
                        ausloggen
                    </button>
                    <button
                        className='flex w-36 justify-center space-x-2 rounded-xl bg-coastal-blue-10 px-4 py-2 font-bold text-white'
                        onClick={toggleEditProfile}
                    >
                        <span>bearbeiten</span>
                    </button>
                </div>
            )}
        </section>
    );

    return wrapper;
}
