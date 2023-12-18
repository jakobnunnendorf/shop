'use client';

import { createContext, useContext, useState } from 'react';
import {
    ActiveProductContext,
    ActiveProductContextType,
} from './ActiveProductCardContext';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export type CartContextType = {
    cart: cart_item[];
    addCartItem: (cartItem: cart_item) => void;
    removeCartItem: (cartItem: cart_item) => void;
    setCartItem: (cartItem: cart_item) => void;
    incrementQuantity: (cartItem: cart_item) => void;
    decrementQuantity: (cartItem: cart_item) => void;
    clearCart: () => void;
    getTotalQuantity: () => number;
    getSubTotal: () => number;
    addProductToCart: (productId: UUID) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export function CartContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const { state } = useContext(
        ActiveProductContext
    ) as ActiveProductContextType;

    const [cart, setCart] = useState<cart_item[]>([]);

    const addCartItem = (cartItem: cart_item) => {
        setCart([...cart, cartItem]);
    };

    const addProductToCart = (newCartItem: cart_item) => {
        const cartItemExists = cart.find(
            (cartItem) =>
                cartItem.productId === newCartItem.productId &&
                cartItem.color === newCartItem.color
        );
        if (cartItemExists) {
            incrementQuantity(newCartItem);
        } else {
            addCartItem(newCartItem);
        }
    };

    const removeCartItem = (cartItem: cart_item) => {
        setCart(
            cart.filter(
                (cartItemInCart) =>
                    cartItemInCart.productId !== cartItem.productId
            )
        );
    };

    const setCartItem = (cartItem: cart_item) => {
        setCart([cartItem]);
    };

    const clearCart = () => {
        setCart([]);
    };

    const incrementQuantity = (cartItem: cart_item) => {
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

    const decrementQuantity = (cartItem: cart_item) => {
        const non_zero_cart = cart.filter(
            (cartItemInCart) =>
                !(
                    cartItemInCart.quantity < 2 &&
                    cartItemInCart.productId === cartItem.productId
                )
        );
        setCart(
            non_zero_cart.map((cartItemInCart) => {
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

    const getSubTotal = async () => {
        const supabase = createClientComponentClient();
        const productIdArray = cart.map((cartItem) => cartItem.productId);
        if (productIdArray.length === 0) return 0;
        const { data: products } = (await supabase
            .from('products')
            .select('price')
            .in('id', productIdArray)) as sb_fetchResponseObject<
            { price: number }[]
        >;
        if (!products) throw new Error('No prices found');
        const subtotal = products.reduce((total, product) => {
            return total + product.price * cartItem.quantity;
        }, 0);
        return subtotal;
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
                getSubTotal,
                addProductToCart,
            }}
        >
            {' '}
            {children}{' '}
        </CartContext.Provider>
    );
}
