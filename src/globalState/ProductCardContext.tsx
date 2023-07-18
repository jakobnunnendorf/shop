'use client';

import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react';

export interface ProductCardContextType {
    activeColorKey: colorKey;
    setActiveColorKey: Dispatch<SetStateAction<colorKey>>;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
}

export const ProductCardContext = createContext<ProductCardContextType | null>(
    null
);

export function ProductCardContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activeColorKey, setActiveColorKey] =
        useState<colorKey>('default_color');
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <ProductCardContext.Provider
            value={{
                activeColorKey,
                setActiveColorKey,
                activeIndex,
                setActiveIndex,
            }}
        >
            {children}
        </ProductCardContext.Provider>
    );
}