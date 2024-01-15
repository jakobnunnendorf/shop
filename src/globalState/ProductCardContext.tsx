'use client';

import {
    createContext,
    Dispatch,
    SetStateAction,
    useState,
} from 'react';

export interface ProductCardContextType {
    activeColorKey: ColorKey;
    setActiveColorKey: Dispatch<SetStateAction<ColorKey>>;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    extended: boolean;
    setExtended: Dispatch<SetStateAction<boolean>>;
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
        useState<ColorKey>('defaultColor');
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [extended, setExtended] = useState<boolean>(false);

    return (
        <ProductCardContext.Provider
            value={{
                activeColorKey,
                setActiveColorKey,
                activeIndex,
                setActiveIndex,
                extended,
                setExtended,
            }}
        >
            {children}
        </ProductCardContext.Provider>
    );
}