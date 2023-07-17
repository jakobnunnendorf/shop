import React from 'react';

export default function Title({ productTitle }: { productTitle: string }) {
    const skeleton = <div className='h-12 rounded-full bg-gray-100'></div>;
    const title = <h2 className='text-xl font-bold'>{productTitle}</h2>;
    return productTitle ? title : skeleton;
}
