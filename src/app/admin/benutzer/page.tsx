import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';

export default async function AdminDashboardUsersList() {

    const supabase = createClientComponentClient();
    
    const user_profiles = async () => {
        const {data: profiles} = await supabase
        .from('profiles')
        .select('*');

        return profiles;
    }
    const profiles = await user_profiles() as profile[];

    return (
        <div>
            <ul className="grid grid-cols-1 gap-2 p-2 md:grid-cols-1">
                    {profiles.map((profile, index) => (
                    <Link 
                        href={`/admin/benutzer/${profile.firstName}-${profile.lastName}`} 
                    >
                        <li key={index} className="p-4 bg-white rounded-lg shadow-md" onClick = { () => <UserInfoByID user_id={profile.profile_id} /> } >
                            <p className="antialiased text-4x1 hover:subpixel-antialiased">{profile.firstName} {profile.lastName}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
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
