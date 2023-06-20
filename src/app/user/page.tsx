import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Login from './login/Login';

export default async function UserPage() {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();

    if (!currentSession) {
        return <Login />;
    } else {
        return <pre>{JSON.stringify(currentSession, null, 2)}</pre>;
    }
}
