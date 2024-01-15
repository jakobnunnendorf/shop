import React from 'react';

import AddCategory from './AddCategory';
import AddDescription from './AddDescription';
import AddPrice from './AddPrice';
import AddStockQuantity from './AddStockQuantity';
import AddTitle from './AddTitle';
import AddColors from './Colors/AddColors/AddColors';
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
                <AddPrice />
            </div>
        </div>
    );
    return productInfo;
}
