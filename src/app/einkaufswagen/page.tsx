'use client';

import React, { useState } from 'react';
import './Cart.css';

interface ProductInfo {
    name: string;
    price: number;
    images: string;
}

interface CartItem {
    productInfo: ProductInfo;
    quantity: number;
}

const cartProp: CartItem[] = [
    {
        productInfo: {
            name: 'Product 1',
            price: 10.99,
            images: 'https://www.fidlock.com/consumer/thumbnail/e2/13/ce/1675257207/iphone14pro_800x800.jpg',
        },
        quantity: 2,
    },
    {
        productInfo: {
            name: 'Product 2',
            price: 20.99,
            images: 'https://www.fidlock.com/consumer/thumbnail/f7/22/e2/1675257207/IphoneSE28_800x800.png',
        },
        quantity: 1,
    },
];

export default function Cart() {
    const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

    const totalPrice = cartProp.reduce(
        (accumulator, item) =>
            accumulator + item.productInfo.price * item.quantity,
        0
    );

    const items_list = cartProp
        .map((item, index) => {
            return `Item ${index + 1}: ${item.productInfo.name} - Quantity: ${
                item.quantity
            }`;
        })
        .join('\n');

    const total_amount = cartProp.reduce((accumulator, item) => {
        return accumulator + item.productInfo.price * item.quantity;
    }, 0);
    return (
        <div className='cart-container'>
            {!checkoutModalOpen && (
                <>
                    <h2 className='cart-title'>Dein Einkaufswagen</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Bild</th>
                                <th scope='col'>Titel</th>
                                <th scope='col'>Anzahl</th>
                                <th scope='col'>Preis</th>
                                <th scope='col'>Gesamt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProp.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img
                                            src={item.productInfo.images}
                                            alt={item.productInfo.name}
                                            className='cart-image'
                                        />
                                    </td>
                                    <td>{item.productInfo.name}</td>
                                    <td>
                                        <div className='td-quantity'>
                                            <button className='cart-button'>
                                                -
                                            </button>
                                            {item.quantity}
                                            <button className='cart-button'>
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        ${item.productInfo.price.toFixed(2)}
                                    </td>
                                    <td>
                                        $
                                        {(
                                            item.productInfo.price *
                                            item.quantity
                                        ).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='cart-total'>
                        <h3 className='total-price'>
                            Gesamtpreis {totalPrice.toFixed(2)} €
                        </h3>
                    </div>
                    <button
                        className='checkout-button'
                        disabled={totalPrice <= 0}
                    >
                        Checkout
                    </button>
                </>
            )}

            {checkoutModalOpen && (
                <div className='checkout-modal'>
                    <button
                        className='cancel-button'
                        onClick={() => setCheckoutModalOpen(false)}
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
}
