import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Login from './Login/Login';
import Profile from './Profile/Profile';
export default async function UserPage() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();

    return currentSession ? <Profile /> : <Login />;
}
