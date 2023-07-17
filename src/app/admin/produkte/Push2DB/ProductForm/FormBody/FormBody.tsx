import React from 'react';
import AddImages from './AddImages/AddImages';
import ProductInfo from './ProductInfo';

export default function FormBody() {
    const [status, setStatus] = React.useState<
        'showcase' | 'preview' | 'edit' | 'explain'
    >('explain');
    return (
        <div className='grid flex-grow grid-cols-3 rounded-3xl border bg-white'>
            <AddImages status={status} setStatus={setStatus} />
            <ProductInfo />
        </div>
    );
}
