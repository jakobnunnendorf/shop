'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { FiTrash2 } from 'react-icons/fi';
import deleteUser from './DeleteUser';

function handleClick(profile: profile) {
    deleteUser(profile);
}

export default async function AdminDashboardUsersList() {
    const supabase = createClientComponentClient();

    const user_profiles = async () => {
        const { data: profiles } = await supabase.from('profiles').select('*');

        return profiles;
    };
    const profiles = (await user_profiles()) as profile[];

    return (
        <>
            <ul className="grid grid-cols-1 gap-2 p-2 md:grid-cols-1">
                {profiles.map((profile, index) => (
                    <li key={index} className='bg-white rounded-lg shadow-md p2 md:p-4'>
                        <Link href={`/admin/benutzer/${profile.profile_id}`} >
                            <p className='font-semibold text-coastal-blue text-x1'>{profile.firstName} {profile.lastName}</p>
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
        </div>
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
