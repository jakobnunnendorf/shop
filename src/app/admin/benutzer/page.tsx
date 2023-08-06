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
        <div>
            <ul className="grid grid-cols-1 gap-2 p-2 md:grid-cols-1">
                {users.map((profile, index) => (
                    <li key={index} className="p-4 bg-white rounded-lg shadow-md">
                        <p className="text-xl font-semibold">{profile.firstName} {profile.lastName}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const supabase = createClientComponentClient();
    
    const fetchUsersProfiles = async () => {
        const fetchUsers = async () => {
            const { data: user_profiles } = await supabase
            .from('profiles')
            .select('*');
    
            console.log(user_profiles);  
            return user_profiles;
        };
    
        const user_profiles = await fetchUsers() as profile[];
    
        // filtering users with valid data
        const filteredProfiles = filterProfilesByName(user_profiles);
        return filteredProfiles;
    };
    
    const profiles = fetchUsersProfiles();
    
    return {
        props: {
            profiles,
        },
    };
};


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
