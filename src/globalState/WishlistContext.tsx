'use client';

import { createContext, useState } from 'react';

export type WishlistContextType = {
    Wishlist: Wishlist_item[];
    addWishlistItem: (WishlistItem: Wishlist_item) => void;
    removeWishlistItem: (WishlistItem: Wishlist_item) => void;
    setWishlistItem: (WishlistItem: Wishlist_item) => void;
    incrementQuantity: (WishlistItem: Wishlist_item) => void;
    decrementQuantity: (WishlistItem: Wishlist_item) => void;
    clearWishlist: () => void;
    getTotalQuantity: () => number;
    getSubTotal: () => number;
    addProductToWishlist: (product: product) => void;
};

export const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [Wishlist, setWishlist] = useState<Wishlist_item[]>([]);

    const addWishlistItem = (WishlistItem: Wishlist_item) => {
        setWishlist([...Wishlist, WishlistItem]);
    };

    const addProductToWishlist = (product: product) => {
        const WishlistItem = Wishlist.find(
            (WishlistItemInWishlist) =>
                WishlistItemInWishlist.product.id === product.id
        );
        if (!WishlistItem) {
            addWishlistItem({ product, quantity: 1 });
        }
    };

    const removeWishlistItem = (WishlistItem: Wishlist_item) => {
        setWishlist(
            Wishlist.filter(
                (WishlistItemInWishlist) =>
                    WishlistItemInWishlist.product.id !==
                    WishlistItem.product.id
            )
        );
    };

    const setWishlistItem = (WishlistItem: Wishlist_item) => {
        setWishlist([WishlistItem]);
    };

    const clearWishlist = () => {
        setWishlist([]);
    };

    const incrementQuantity = (WishlistItem: Wishlist_item) => {
        setWishlist(
            Wishlist.map((WishlistItemInWishlist) => {
                if (
                    WishlistItemInWishlist.product.id ===
                    WishlistItem.product.id
                ) {
                    return {
                        ...WishlistItemInWishlist,
                        quantity: WishlistItem.quantity + 1,
                    };
                }
                return WishlistItemInWishlist;
            })
        );
    };

    const decrementQuantity = (WishlistItem: Wishlist_item) => {
        const non_zero_Wishlist = Wishlist.filter(
            (WishlistItemInWishlist) =>
                !(
                    WishlistItemInWishlist.quantity < 2 &&
                    WishlistItemInWishlist.product.id ===
                        WishlistItem.product.id
                )
        );
        setWishlist(
            non_zero_Wishlist.map((WishlistItemInWishlist) => {
                if (
                    WishlistItemInWishlist.product.id ===
                    WishlistItem.product.id
                ) {
                    return {
                        ...WishlistItemInWishlist,
                        quantity: WishlistItem.quantity - 1,
                    };
                }
                return WishlistItemInWishlist;
            })
        );
    };

    const getTotalQuantity = () => {
        return Wishlist.reduce((total, WishlistItem) => {
            return total + WishlistItem.quantity;
        }, 0);
    };

    const getSubTotal = () => {
        return Wishlist.reduce((total, WishlistItem) => {
            return total + WishlistItem.product.price * WishlistItem.quantity;
        }, 0);
    };

    return (
        <WishlistContext.Provider
            value={{
                Wishlist,
                addWishlistItem,
                removeWishlistItem,
                setWishlistItem,
                incrementQuantity,
                decrementQuantity,
                clearWishlist,
                getTotalQuantity,
                getSubTotal,
                addProductToWishlist,
            }}
        >
            {' '}
            {children}{' '}
        </WishlistContext.Provider>
    );
}
