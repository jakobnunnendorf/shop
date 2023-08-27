import React from 'react';

import AddCategory from './AddCategory';
import AddDescription from './AddDescription';
import AddPrice from './AddPrice';
import AddStockQuantity from './AddStockQuantity';
import AddTitle from './AddTitle';
import AddColors from './Colors/AddColors';
import AddCompatibleModels from './CompatibleModels/AddCompatibleModels';

export default function ProductInfo() {
    const productInfo = (
        <div className='px-4 pb-32 lg:p-8 lg:col-span-2'>
            <div>
                <AddTitle />
                <div className='grid grid-cols-2'>
                    <AddCategory />
                    <AddStockQuantity />
                </div>
                <AddCompatibleModels />
            </div>
            <AddColors />
            <AddDescription />
            <div className='flex items-center justify-around h-12 rounded-full '>
                {/* <Reviews productReviews={[]} /> */}
                <AddPrice />
            </div>
            {/* <div className='flex items-center px-4 py-2 mx-auto mt-2 space-x-2 font-bold rounded-full w-fit bg-seafoam-green-8 text-coastal-blue-10'>
                <span>Einkaufswagen</span>{' '}
                <FiShoppingCart className='font-bold' />
            </div> */}
        </div>
    );
    return productInfo;
}
