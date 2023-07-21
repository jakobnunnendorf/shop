import React from 'react';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import AddImages from './AddImages/AddImages';
import ProductInfo from './ProductInfo/ProductInfo';

export default function FormBody() {
    const { status, setStatus } = React.useContext(
        NewProductContext
    ) as NewProductContextType;

    return (
        <div className='grid h-[66vh] grid-cols-3 rounded-3xl bg-white'>
            <AddImages status={status} setStatus={setStatus} />
            <ProductInfo />
        </div>
    );
}
