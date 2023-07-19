'use client'

import { createContext, useState } from 'react';

export interface ActiveProductContextType {
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    activeColorKey: colorKey | null;
    setActiveColorKey: React.Dispatch<React.SetStateAction<colorKey | null>>;
}

export const ActiveProductContext =
    createContext<ActiveProductContextType | null>(null);

export function ActiveProductContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeColorKey, setActiveColorKey] = useState<colorKey | null>(null);
    return (
        <ActiveProductContext.Provider
            value={{
                activeIndex,
                setActiveColorKey,
                activeColorKey,
                setActiveIndex,
            }}
        >
            {' '}
            {children}{' '}
        </ActiveProductContext.Provider>
    );
}
