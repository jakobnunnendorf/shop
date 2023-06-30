import Image from 'next/image';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../globalState/CartContext';

export default function CartRow({ cartItem }: { cartItem: any }) {
    const { value: cartItems, setValue: setCartItems } =
        useContext(CartContext);

    function incrementQuantity() {
        const newCartItems = [...cartItems];
        const index = newCartItems.findIndex(
            (item: any) => item.product.id === cartItem.product.id
        );
        newCartItems[index].quantity += 1;
        setCartItems(newCartItems);
    }
    function decrementQuantity() {
        const newCartItems = [...cartItems];
        const index = newCartItems.findIndex(
            (item: any) => item.product.id === cartItem.product.id
        );
        newCartItems[index].quantity -= 1;
        setCartItems(newCartItems);
    }
    function removeFromCart() {
        const newCartItems = [...cartItems];
        const index = newCartItems.findIndex(
            (item: any) => item.product.id === cartItem.product.id
        );
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    }
    return (
        <div className='mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
            <figure className='relative w-full rounded-lg sm:w-40'>
                <Image
                    src={cartItem.product.imageURL[0]}
                    alt='product-image'
                    fill={true}
                    objectFit='contain'
                />
            </figure>
            <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div className='mt-5 sm:mt-0'>
                    <h2 className='text-lg font-bold text-gray-900'>
                        {cartItem.product.title}
                    </h2>
                    <p className='mt-1 text-xs text-gray-700'>
                        {cartItem.product.compatibleModels.map(
                            (model: string) => {
                                return <span key={model}>{model}, </span>;
                            }
                        )}
                    </p>
                </div>
                <div className='mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
                    <div className='flex items-center border-gray-100'>
                        <span
                            onClick={decrementQuantity}
                            className='cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'
                        >
                            {' '}
                            -{' '}
                        </span>
                        <input
                            className='h-8 w-8 border bg-white text-center text-xs outline-none'
                            type='number'
                            value={cartItem.quantity}
                            min='1'
                        />
                        <span
                            onClick={incrementQuantity}
                            className='cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'
                        >
                            {' '}
                            +{' '}
                        </span>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <p className='text-sm'>{cartItem.product.price}</p>
                        <svg
                            onClick={removeFromCart}
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
