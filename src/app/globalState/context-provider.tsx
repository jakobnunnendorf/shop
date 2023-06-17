"use client"

import { createContext, useState } from 'react';

export const UserContext = createContext<any>(null)

export default function ContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState()
    return (
        <div>
            <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>
        </div>
    )
}
