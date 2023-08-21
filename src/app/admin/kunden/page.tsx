'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { FiTrash2 } from 'react-icons/fi';
import deleteUser from './DeleteUser';
import { useEffect, useState } from 'react';

function handleClick(profile: profile) {
    deleteUser(profile);
}

export default function AdminDashboardUsersList() {
    const [profiles, setProfiles] = useState<profile[]>([]);
    useEffect(() => {
        const supabase = createClientComponentClient();
        const user_profiles = async () => {
            const { data: fetchedProfiles } = (await supabase
                .from('profiles')
                .select('*')) as sb_fetchResponseObject<profile[]>;
            const notNullProfiles = fetchedProfiles ? fetchedProfiles : [];
            setProfiles(notNullProfiles);
        };
        user_profiles();
    }, []);

    return (
        <>
            <ul className='grid grid-cols-1 gap-2 p-2 md:grid-cols-1 rborder'>
                {profiles.map((profile, index) => (
                    <li
                        key={index}
                        className='bg-white rounded-lg shadow-md p2 md:p-4'
                    >
                        <Link href={`/admin/kunden/${profile.profile_id}`}>
                            <p className='font-semibold text-coastal-blue text-x1'>
                                {profile.firstName} {profile.lastName}
                            </p>
                        </Link>
                        <button
                            className='ml-auto'
                            onClick={() => {
                                handleClick(profile);
                                window.location.reload();
                            }}
                        >
                            <FiTrash2 size={30} color='red' />
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

// ------------------ Helper Functions ------------------

const filterProfilesByName = (profiles: profile[]) => {
    const filteredUsers = profiles.filter((profile: profile) => {
        if (profile.firstName === '' || profile.lastName === '') {
            return false;
        } else {
            return true;
        }
    });

    return filteredUsers;
};
