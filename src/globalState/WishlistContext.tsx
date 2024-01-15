'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { createContext, useState } from 'react';

export type WishListContextType = {
    wishList: WishListItem[];
    addWishListItem: (wishListItem: WishListItem) => void;
    removeWishListItem: (wishListItem: WishListItem) => void;
    removeWishListItemWithProduct: (productId: UUID) => void;
    setWishListItem: (wishListItem: WishListItem) => void;
    incrementQuantity: (wishListItem: WishListItem) => void;
    decrementQuantity: (wishListItem: WishListItem) => void;
    clearWishList: () => void;
    getTotalQuantity: () => number;
    getSubTotal: () => Promise<number>;
    addProductToWishList: (productId: UUID) => void;
    isInWishList: (productId: UUID) => boolean;
};

export const wishListContext = createContext<WishListContextType | null>(null);

export function WishListContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [wishList, setWishList] = useState<WishListItem[]>([]);

    const addWishListItem = (wishListItem: WishListItem) => {
        setWishList([...wishList, wishListItem]);
    };

    const isInWishList = (productId: UUID) => {
        let check = false;
        for (let i = 0; i < wishList.length; i++) {
            if (wishList[i].productId === productId) {
                check = true;
            }
        }
        return check;
    };

    const addProductToWishList = (productId: UUID, color?: ColorKey) => {
        const wishListItem = wishList.find(
            (wishListItemInWishList) =>
                wishListItemInWishList.productId === productId
        );
        if (!wishListItem) {
            addWishListItem({
                productId,
                quantity: 1,
                color: color ? color : 'defaultColor',
            });
        }
    };

    const removeWishListItem = (wishListItem: WishListItem) => {
        setWishList(
            wishList.filter(
                (wishListItemInWishList) =>
                    wishListItemInWishList.productId !== wishListItem.productId
            )
        );
    };

    const removeWishListItemWithProduct = (productId: UUID) => {
        setWishList(
            wishList.filter(
                (wishListItemInWishList) =>
                    wishListItemInWishList.productId !== productId
            )
        );
    };

    const setWishListItem = (wishListItem: WishListItem) => {
        setWishList([wishListItem]);
    };

    const clearWishList = () => {
        setWishList([]);
    };

    const incrementQuantity = (wishListItem: WishListItem) => {
        setWishList(
            wishList.map((wishListItemInWishList) => {
                if (
                    wishListItemInWishList.productId === wishListItem.productId
                ) {
                    return {
                        ...wishListItemInWishList,
                        quantity: wishListItem.quantity + 1,
                    };
                }
                return wishListItemInWishList;
            })
        );
    };

    const decrementQuantity = (wishListItem: WishListItem) => {
        const nonZeroWishList = wishList.filter(
            (wishListItemInWishList) =>
                !(
                    wishListItemInWishList.quantity < 2 &&
                    wishListItemInWishList.productId === wishListItem.productId
                )
        );
        setWishList(
            nonZeroWishList.map((wishListItemInWishList) => {
                if (
                    wishListItemInWishList.productId === wishListItem.productId
                ) {
                    return {
                        ...wishListItemInWishList,
                        quantity: wishListItem.quantity - 1,
                    };
                }
                return wishListItemInWishList;
            })
        );
    };

    const getTotalQuantity = () => {
        return wishList.reduce((total, wishListItem) => {
            return total + wishListItem.quantity;
        }, 0);
    };

    const supabase = createClientComponentClient();

    const getSubTotal = async () => {
        let index = 0;
        let cumulativePrice = 0;
        while (index < wishList.length) {
            const itemId = wishList[index].productId;
            const { data: itemPrice, error } = (await supabase
                .from('products')
                .select('price')
                .eq('id', itemId)
                .single()) as SbFetchResponseObject<number>;
            cumulativePrice += itemPrice || 0;
            index++;
        }
        return cumulativePrice;
    };

    return (
        <wishListContext.Provider
            value={{
                wishList,
                addWishListItem,
                removeWishListItem,
                setWishListItem,
                incrementQuantity,
                decrementQuantity,
                clearWishList,
                getTotalQuantity,
                getSubTotal,
                addProductToWishList,
                isInWishList,
                removeWishListItemWithProduct,
            }}
        >
            {children}
        </wishListContext.Provider>
    );
}
