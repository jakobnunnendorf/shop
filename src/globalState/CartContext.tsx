'use client';

import { createContext, useState } from 'react';

export const CartContext = createContext<any>(null);

export function CartContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [currentCart, setCurrentCart] = useState([
        {
            productInfo: {
                id: 'string',
                created_at: new Date(),
                title: 'Rearth Ringke Fusion iPhone 7 Plus Case - Smoke Black',
                imageURL:
                    'https://images.mobilefun.co.uk/graphics/300pixelp/61221.jpg',
                description:
                    ' Schutzhülle für iPhone 7 Plus von Rearth Ringke Fusion in Rauchschwarz',
                price: '13,49 €',
                stock: 3,
                category: 'phone case',
                compatibleModels: 'string',
                reviews: 'string',
                dimensions: null,
            },
            quantity: 1,
        },
        {
            productInfo: {
                id: 'string',
                created_at: new Date(),
                title: 'Rearth Ringke Fusion iPhone 7 Plus Case - Smoke Black',
                imageURL:
                    'https://images.mobilefun.co.uk/graphics/300pixelp/61221.jpg',
                description:
                    ' Schutzhülle für iPhone 7 Plus von Rearth Ringke Fusion in Rauchschwarz',
                price: '13,49 €',
                stock: 3,
                category: 'phone case',
                compatibleModels: 'string',
                reviews: 'string',
                dimensions: null,
            },
            quantity: 1,
        },
    ]);
    return (
        <CartContext.Provider
            value={{ value: currentCart, setValue: setCurrentCart }}
        >
            {' '}
            {children}{' '}
        </CartContext.Provider>
    );
}
