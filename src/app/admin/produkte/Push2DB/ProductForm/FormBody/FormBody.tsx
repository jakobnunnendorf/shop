import React from 'react';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import AddImages from './AddImages/AddImages';
import ProductInfo from './ProductInfo/ProductInfo';
import Explain from './AddImages/Explain';

export default function FormBody() {
    const { status, setStatus } = React.useContext(
        NewProductContext
    ) as NewProductContextType;

    return status !== 'explain' ? (
        <div className=' lg:grid lg:h-[66vh] lg:rounded-3xl bg-white lg:grid-cols-5 lg:shadow-2xl'>
            <AddImages status={status} setStatus={setStatus} />
            <ProductInfo />
        </div>
    ) : (
        <Explain setStatus={setStatus} />
    );
}
