'use client';

import { getSubTotal } from '@lib/fetchProductData';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { createContext, useState } from 'react';

export type CartContextType = {
    cart: CartItem[];
    addCartItem: (cartItem: CartItem) => void;
    removeCartItem: (cartItem: CartItem) => void;
    setCartItem: (cartItem: CartItem) => void;
    incrementQuantity: (cartItem: CartItem) => void;
    decrementQuantity: (cartItem: CartItem) => void;
    clearCart: () => void;
    getTotalQuantity: () => number;
    getCartTotal: () => Promise<number>;
    addProductToCart: (productId: UUID, color?: ColorKey | null) => void;
    updateItemColor: (cartItem: CartItem, color: ColorKey) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export function CartContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addCartItem = (cartItem: CartItem) => {
        setCart([...cart, cartItem]);
    };
    const updateItemColor = (cartItem: CartItem, color: ColorKey) => {
        const updatedCartItem: CartItem = {
            ...cartItem,
            color: color,
        };
        const updatedCart = cart.map((item) => {
            if (
                cartItem.color === item.color &&
                cartItem.productId === item.productId
            ) {
                return updatedCartItem;
            } else {
                return item;
            }
        });
        setCart(updatedCart);
    };

    const addProductToCart = (productId: UUID, color?: ColorKey | null) => {
        const cartItemExists = cart.find((cartItem) =>
            color
                ? cartItem.productId === productId && cartItem.color === color
                : cartItem.productId === productId
        );
        const newCartItem: CartItem = {
            productId: productId,
            color: color || null,
            quantity: 1,
        };
        if (cartItemExists) {
            incrementQuantity(newCartItem);
        } else {
            addCartItem(newCartItem);
        }
    };

    const removeCartItem = (cartItem: CartItem) => {
        setCart(
            cart.filter(
                (cartItemInCart) =>
                    cartItemInCart.productId !== cartItem.productId
            )
        );
    };

    const setCartItem = (cartItem: CartItem) => {
        setCart([cartItem]);
    };

    const clearCart = () => {
        setCart([]);
    };

    const incrementQuantity = (cartItem: CartItem) => {
        setCart(
            cart.map((cartItemInCart) => {
                if (cartItemInCart.productId === cartItem.productId) {
                    return {
                        ...cartItemInCart,
                        quantity: cartItem.quantity + 1,
                    };
                }
                return cartItemInCart;
            })
        );
    };

    const decrementQuantity = (cartItem: CartItem) => {
        const nonZeroCart = cart.filter(
            (cartItemInCart) =>
                !(
                    cartItemInCart.quantity < 2 &&
                    cartItemInCart.productId === cartItem.productId
                )
        );
        setCart(
            nonZeroCart.map((cartItemInCart) => {
                if (cartItemInCart.productId === cartItem.productId) {
                    return {
                        ...cartItemInCart,
                        quantity: cartItem.quantity - 1,
                    };
                }
                return cartItemInCart;
            })
        );
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, cartItem) => {
            return total + cartItem.quantity;
        }, 0);
    };

    const supabase = createClientComponentClient();

    const getCartTotal = async (): Promise<number> => {
        const cartTotal = await getSubTotal(cart);
        return cartTotal;
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addCartItem,
                removeCartItem,
                setCartItem,
                incrementQuantity,
                decrementQuantity,
                clearCart,
                getTotalQuantity,
                getCartTotal,
                addProductToCart,
                updateItemColor,
            }}
        >
            {' '}
            {children}{' '}
        </CartContext.Provider>
    );
}
