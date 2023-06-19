'use client';

import { useContext, useEffect } from 'react';
import { SessionContext } from '@globalState/SessionContext';
import supabase from 'utils/supabase';
import Login from './login/Login';

export default function UserPage() {
    const { value: currentSession, setValue: setCurrentSession } =
        useContext(SessionContext);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setCurrentSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setCurrentSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (!currentSession) {
        return <Login supabaseClient={supabase} />;
    } else {
        return (
            <div>Logged in! {`${JSON.stringify(currentSession.user.id)}`}</div>
        );
    }
}

