import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Login from './login/Login';
import Account from './profile/Profile';

export default async function UserPage() {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();
    // refresh page on auth change
    supabase.auth.onAuthStateChange((_, session) => {
        if (!session) {
            window.location.reload();
        }
    });

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
