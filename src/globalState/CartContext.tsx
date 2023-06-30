'use client';

import { createContext, useState } from 'react';

export const CartContext = createContext<any>([]);

export function CartContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [currentCart, setCurrentCart] = useState([]);
    return (
        <CartContext.Provider
            value={{ value: currentCart, setValue: setCurrentCart }}
        >
            {' '}
            {children}{' '}
        </CartContext.Provider>
    );
}
