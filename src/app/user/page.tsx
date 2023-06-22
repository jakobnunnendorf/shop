import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Login from './Login/Login';
import Account from './profile/Profile';

export default async function UserPage() {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();

    if (!currentSession) {
        return <Login />;
    } else {
        return (
            <div>
                <Account session={currentSession} />
            </div>
        );
    }
}
