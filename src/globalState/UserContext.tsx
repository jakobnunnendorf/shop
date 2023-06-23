'use client';

import { createContext, useState } from 'react';

export const UserContext = createContext<any>(null);

export function UserContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <div>
            <UserContext.Provider
                value={{ value: currentUser, setValue: setCurrentUser }}
            >
                {children}
            </UserContext.Provider>
        </div>
    );
}
