'use client';

import { createContext, useState } from 'react';

export type MobileMenuContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleOpen: () => void;
};

export const MobileMenuContext = createContext<MobileMenuContextType | null>(null);

export function MobileMenuContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <div>
            <MobileMenuContext.Provider
                value={{
                    isOpen,
                    setIsOpen,
                    toggleOpen,
                }}
            >
                {children}
            </MobileMenuContext.Provider>
        </div>
    );
}
