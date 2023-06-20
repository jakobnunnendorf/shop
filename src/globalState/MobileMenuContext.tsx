'use client';

import { createContext, useState } from 'react';

export const MobileMenuStateContext = createContext<{ value: boolean, setValue: React.Dispatch<React.SetStateAction<boolean>> }>({ value: false, setValue: () => {return} });

export function MobileMenuStateContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [currentMobileMenuState, setCurrentMobileMenuState] = useState(false);
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
