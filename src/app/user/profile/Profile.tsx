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
        <section className='flex flex-col items-center justify-center w-full space-y-8 h-fit '>
            {Greeting}
            {editProfile || resetPassword ? (
                editProfile ? (
                    <UpdateProfile />
                ) : (
                    <ResetPassword />
                )
            ) : (
                UserInfoPanel
            )}
            {!editProfile && !resetPassword && (
                <div className='grid grid-cols-1 grid-rows-3 gap-2 md:flex'>
                    <button
                        onClick={HandleLogout}
                        className='flex items-center justify-center row-start-1 px-4 py-2 font-bold border md:w-36 rounded-xl border-coastal-blue-10 text-coastal-blue-10'
                    >
                        ausloggen
                    </button>
                    <button
                        className='flex justify-center row-start-2 px-4 py-2 font-bold text-white md:w-36 md:space-x-2 rounded-xl bg-coastal-blue-10'
                        onClick={toggleResetPassword}
                    >
                        <span>Passwort zurücksetzen</span>
                    </button>
                    <button
                        className='flex items-center justify-center row-start-3 px-4 py-2 font-bold border md:w-36 md:space-x-2 rounded-xl border-coastal-blue-10 text-coastal-blue-10'
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
