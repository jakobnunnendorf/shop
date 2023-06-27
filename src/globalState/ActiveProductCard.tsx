'use client'

import { createContext, useState } from 'react';

export const ActiveProductContext = createContext<any>(null);

export function ActiveProductContextProvider({children}: {children: React.ReactNode}) {
const [currentActiveProduct, setCurrentActiveProduct] = useState(null);
return <ActiveProductContext.Provider value={{value: currentActiveProduct, setValue: setCurrentActiveProduct}}> {children} </ActiveProductContext.Provider>
}
