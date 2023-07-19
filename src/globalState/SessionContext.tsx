'use client';

import { Session, User } from '@supabase/supabase-js';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface SessionContextType {
    session: Session | null;
    user: User | null;
    setSession: Dispatch<SetStateAction<Session | null>>;
    setUser: Dispatch<SetStateAction<User | null>>;
}

export const SessionContext = createContext<SessionContextType | null>(null);

export function SessionContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);
    return (
        <div>
            <SessionContext.Provider
                value={{ session, setSession, user, setUser }}
            >
                {children}
            </SessionContext.Provider>
        </div>
    );
}
