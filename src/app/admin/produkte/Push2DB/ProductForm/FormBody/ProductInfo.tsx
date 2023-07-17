import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import Reviews from '@components/ProductCase/ExtendedCard/ProductInfo/Reviews';
import AddDescription from './AddDescription';
import AddPrice from './AddPrice';
import AddTitle from './AddTitle';
import AddColors from './Colors/AddColors';
import AddCategory from './AddCategory';

export default function ProductInfo() {
    const productInfo = (
        <div className='p-8 space-y-8'>
            <div>
                <AddTitle />
                <AddCategory />
            </div>
            <AddColors />
            <AddDescription />
            <div className='flex items-center justify-around h-12 rounded-full '>
                <Reviews productReviews={[]} />
                <AddPrice />
            </div>
            <div className='flex items-center px-4 py-2 mx-auto mt-2 space-x-2 font-bold rounded-full w-fit bg-seafoam-green-8 text-coastal-blue-10'>
                <span>Einkaufswagen</span>{' '}
                <FiShoppingCart className='font-bold' />
            </div>
        </div>
    );
    return productInfo;
}
