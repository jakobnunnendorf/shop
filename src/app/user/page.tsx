import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Login from './Login/Login';
import Greeting from './profile/Greeting';
import Profile from './profile/Profile';
import UserInfoPanel from './profile/UserInfoPanel';

export default async function UserPage() {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();

    if (!currentSession) {
        return <Login />;
    } else {
        return (
            <div className=''>
                <Profile
                    Greeting={<Greeting />}
                    UserInfoPanel={<UserInfoPanel />}
                />
            </div>
        );
    }
}
