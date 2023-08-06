
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import UserInfoByID from '@app/user/profile/UserInfoPanel';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export default async function AdminDashboardUsersList({
    profiles,
}: {
    profiles: profile[];
}) {
    
    return (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-1 gap-2 p-2">
                    {profiles.map((profile, index) => (
                    <Link 
                        href={`/admin/benutzer/${profile.firstName}-${profile.lastName}`} 
                    >
                        <li key={index} className="bg-white rounded-lg shadow-md p-4" onClick = { () => <UserInfoByID user_id={profile.profile_id} /> } >
                            <p className="text-4x1 antialiased hover:subpixel-antialiased">{profile.firstName} {profile.lastName}</p>
                        </li>
                    </Link>
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
