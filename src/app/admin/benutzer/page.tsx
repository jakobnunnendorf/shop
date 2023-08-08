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
    const all_profiles = await user_profiles() as profile[];
    const profiles = filterProfilesByName(all_profiles);

    return (
        <div>
            <ul className="grid grid-cols-1 gap-2 p-2 md:grid-cols-1">
                {profiles.map((profile, index) => (
                    <li key={index} className='p-4 bg-white rounded-lg shadow-md'>
                        <Link href={`/admin/benutzer/${profile.profile_id}`} >
                                {profile.firstName} {profile.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
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
