'use client';

import { createContext, useState } from 'react';

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
    addProductToCart: (product: product) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export function CartContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cart, setCart] = useState<cart_item[]>([]);

    const addCartItem = (cartItem: cart_item) => {
        setCart([...cart, cartItem]);
    };

    const addProductToCart = (product: product) => {
        const cartItem = cart.find(
            (cartItemInCart) => cartItemInCart.product.id === product.id
        );
        if (cartItem) {
            incrementQuantity(cartItem);
        } else {
            addCartItem({ product, quantity: 1 });
        }
    }

    const removeCartItem = (cartItem: cart_item) => {
        setCart(
            cart.filter(
                (cartItemInCart) =>
                    cartItemInCart.product.id !== cartItem.product.id
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
                if (cartItemInCart.product.id === cartItem.product.id) {
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
                    cartItemInCart.product.id === cartItem.product.id
                )
        );
        setCart(
            non_zero_cart.map((cartItemInCart) => {
                if (cartItemInCart.product.id === cartItem.product.id) {
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

    const getSubTotal = () => {
        return cart.reduce((total, cartItem) => {
            return total + cartItem.product.price * cartItem.quantity;
        }, 0);
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
