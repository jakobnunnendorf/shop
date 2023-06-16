'use client';

import { useEffect, useState } from 'react';
import supabase from 'utils/supabase';
import Login from './login/Login';

export default function UserPage() {
    const [session, setSession] = useState<any>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (!session) {
        return <Login supabaseClient={supabase} />;
    } else {
        return <div>Logged in!</div>;
    }
}
