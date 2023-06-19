'use client';

import { createContext, useState } from 'react';

export const SessionContext = createContext<any>(null);

export function SessionContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [currentSession, setCurrentSession] = useState(null);
    return (
       <div>
         <SessionContext.Provider value={{value: currentSession, setValue: setCurrentSession}}>
             {children}
         </SessionContext.Provider>
       </div>
    );
}
