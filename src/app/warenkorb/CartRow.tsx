import Image from 'next/image';
import React from 'react';
import { useContext } from 'react';
import { CartContext, CartContextType } from '../../globalState/CartContext';

export default function CartRow({ cartItem }: { cartItem: cart_item }) {
    const { incrementQuantity, decrementQuantity, removeCartItem } = useContext(
        CartContext
    ) as CartContextType;

    const incrementThisQuantity = () => {
        incrementQuantity(cartItem);
    };

    const decrementThisQuantity = () => {
        decrementQuantity(cartItem);
    };

    const removeThisCartItem = () => {
        removeCartItem(cartItem);
    };

    const returnFirstPicture = () => {
        return cartItem.product.imageURL_object.default_color.imageURL_array[0];
    };

    return (
      <div className='justify-between p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start'>
            <figure className='relative w-24 h-20 rounded-lg sm:w-40'>
                <Image
                    src={returnFirstPicture()}
                    alt='product-image'
                    fill={true}
                    className='object-contain'
                />
            </figure>
            <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div className='mt-5 sm:mt-0'>
                    <h2 className='text-lg font-bold text-gray-900'>
                        {cartItem.product.title}
                    </h2>
                    <p className='mt-1 text-xs text-gray-700'>
                        {cartItem.product.compatibleModels?.map(
                            (model: device) => {
                                return (
                                    <span key={model.name}>{model.name}, </span>
                                );
                            }
                        )}
                    </p>
                </div>
                <div className='flex justify-between mt-4 sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
                    <div className='flex items-center border-gray-100'>
                        <span
                            onClick={decrementThisQuantity}
                            className='cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'
                        >
                            {' '}
                            -{' '}
                        </span>
                        <input
                            className='w-8 h-8 text-xs text-center bg-white border outline-none'
                            type='number'
                            value={cartItem.quantity}
                            min='1'
                        />
                        <span
                            onClick={incrementThisQuantity}
                            className='px-3 py-1 duration-100 bg-gray-100 rounded-r cursor-pointer hover:bg-blue-500 hover:text-blue-50'
                        >
                            {' '}
                            +{' '}
                        </span>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <p className='text-sm'>{cartItem.product.price}</p>
                        <svg
                            onClick={removeThisCartItem}
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='w-5 h-5 duration-150 cursor-pointer hover:text-red-500'
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
