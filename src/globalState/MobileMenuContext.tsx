'use client';

import { createContext, useState } from 'react';

export const MobileMenuStateContext = createContext<any>(null);

export function MobileMenuStateContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [currentMobileMenuState, setCurrentMobileMenuState] = useState(null);
    return (
        <div>
            <MobileMenuStateContext.Provider
                value={{
                    value: currentMobileMenuState,
                    setValue: setCurrentMobileMenuState,
                }}
            >
                {children}
            </MobileMenuStateContext.Provider>
        </div>
    );
}
