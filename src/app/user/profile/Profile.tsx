'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import {
    ProfileInfoContext,
    ProfileInfoContextType,
} from '@globalState/ProfileInfoContext';
import UpdateProfile from './UpdateProfile';


// Auth usage authorization
import { createClient } from '@supabase/supabase-js'

const supabaseA = createClient(
    'https://oymlbhawkvsltawcjlrq.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bWxiaGF3a3ZzbHRhd2NqbHJxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzI2MDc5NiwiZXhwIjoyMDAyODM2Nzk2fQ.cfAN5SjRusCHCT8q2fLSNBM6UhdbefmjmmdPn2OLyyk',
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    }
);

// Access auth admin api
const adminAuthClient = supabaseA.auth.admin;

//______________________________________________________

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

    // Deleting account
    async function deleteAccount() {
        const supabase = createClientComponentClient();

        const {
            data: { session: currentSession },
        } = await supabase.auth.getSession();

        const user_id = currentSession?.user?.id;
        HandleLogout();
        
        adminAuthClient.deleteUser(`${user_id}`);   // Deleting user
    }

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
                <div className='flex flex-wrap'>
                    <button
                        onClick={HandleLogout}
                        className='mb-2.5 ml-2.5 flex w-36 items-center justify-center rounded-xl border border-coastal-blue-10 px-4 py-2 font-bold text-coastal-blue-10'
                    >
                        Ausloggen
                    </button>
                    <button
                        className='mb-2.5 ml-2.5 flex w-36 items-center justify-center space-x-2 rounded-xl bg-coastal-blue-10 px-4 py-2 font-bold text-white'
                        onClick={toggleEditProfile}
                    >
                        <span>Bearbeiten</span>
                    </button>
                    <button
                        onClick={() => {
                            deleteAccount();
                        }}
                        className='mb-2.5 ml-2.5 flex w-36 items-center justify-center rounded-xl border border-coastal-blue-10 px-4 py-2 font-bold text-coastal-blue-10'
                    >
                        Löschen Kontos
                    </button>
                </div>
            )}
        </section>
    );

    return wrapper;
}
