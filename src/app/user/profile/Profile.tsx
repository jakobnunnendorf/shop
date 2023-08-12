'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import {
    ProfileInfoContext,
    ProfileInfoContextType,
} from '@globalState/ProfileInfoContext';

import UpdateProfile from './UpdateProfile';
import ResetPassword from './ResetPassword';
export default function Profile({
    UserInfoPanel,
    Greeting,
}: {
    UserInfoPanel: React.ReactNode;
    Greeting: React.ReactNode;
}) {
    const { editProfile, toggleEditProfile, resetPassword, toggleResetPassword } = useContext(
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
            {(editProfile||resetPassword) ? ((editProfile)?  <UpdateProfile /> : <ResetPassword />) : UserInfoPanel}
            {!editProfile && !resetPassword && (
                <div className='md:flex grid grid-rows-3 grid-cols-1 gap-2'>
                    <button
                        onClick={HandleLogout}
                        className='flex md:w-36 justify-center rounded-xl border border-coastal-blue-10 px-4 py-2 font-bold text-coastal-blue-10 items-center row-start-1'
                    >
                        ausloggen
                    </button>
                    <button
                        className='flex md:w-36 justify-center md:space-x-2 rounded-xl bg-coastal-blue-10 px-4 py-2 font-bold text-white row-start-2'
                        onClick={toggleResetPassword}
                    >
                        <span>Passwort zurücksetzen</span>
                    </button>
                    <button
                        className='flex md:w-36 justify-center md:space-x-2 rounded-xl px-4 py-2 font-bold border border-coastal-blue-10 items-center text-coastal-blue-10 row-start-3'
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
