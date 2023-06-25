'use client';

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

    const wrapper = (
        <section className='flex h-fit flex-col items-center justify-center  space-y-8'>
            {Greeting}
            {profile.editProfile ? <UpdateProfile /> : UserInfoPanel}
            {!profile.editProfile && (
                <div className='flex space-x-8'>
                    <button className='flex w-36 justify-center rounded-xl border border-coastal-blue-10 px-4 py-2 font-bold text-coastal-blue-10 '>
                        ausloggen
                    </button>
                    <button
                        className='flex w-36 justify-center space-x-2 rounded-xl bg-coastal-blue-10 px-4 py-2 font-bold text-white'
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
