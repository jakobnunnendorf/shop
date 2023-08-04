'use client'

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AdminDashboardUsersList() {

    const supabase = createClientComponentClient();
    const [users, setUsers] = useState<profile[]>([]);

    // not using useEffects here for now
    const getUsers = async () => {
        const fetchAllUsers = async () => {
            const { data: users} = await supabase
            .from('profiles')
            .select(`*`);
            
            return users;
        };

        const users = await fetchAllUsers() as profile[];
        return users;
    };
    
    // filtering users with valid data
    getUsers().then((users) => {
        const filteredUsers = filterUsersByName(users);
        setUsers(filteredUsers);
    });

    return (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-1 gap-2 p-2">
                {users.map((profile, index) => (
                    <li key={index} className="bg-white rounded-lg shadow-md p-4">
                        <p className="text-xl font-semibold">{profile.firstName} {profile.lastName}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ------------------ Helper Functions ------------------

const filterUsersByName = (users: profile[]) => {
    const filteredUsers = users.filter((user: profile) => {
        if (user.firstName === '' || user.lastName === '') {
            return false;
        } else {
            return true;
        }
    });

    return filteredUsers;
}
