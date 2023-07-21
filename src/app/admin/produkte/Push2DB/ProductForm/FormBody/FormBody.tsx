import React from 'react';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import AddImages from './AddImages/AddImages';
import ProductInfo from './ProductInfo/ProductInfo';
import ControlBar from './AddImages/ControlBar';

export default function FormBody() {
    const { status, setStatus } = React.useContext(
        NewProductContext
    ) as NewProductContextType;

    return (
        <div className='grid h-[66vh] rounded-3xl bg-white lg:grid-cols-5'>
            <AddImages status={status} setStatus={setStatus} />
            <ProductInfo />
        </div>
    );
}
