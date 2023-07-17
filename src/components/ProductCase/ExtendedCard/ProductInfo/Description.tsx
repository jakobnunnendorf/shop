import React from 'react';

export default function Description({
    productDescription,
}: {
    productDescription: string | null;
}) {
    const skeleton = (
        <div className='space-y-4 '>
            <h3 className='text-xl font-bold'>Beschreibung</h3>
            <div className='h-4 rounded-full bg-gray-100'></div>
            <div className='h-4 rounded-full bg-gray-100'></div>
            <div className='h-4 rounded-full bg-gray-100'></div>
        </div>
    );
    const description = (
        <div className='space-y-4 '>
            <h3 className='text-xl font-bold'>Beschreibung</h3>
            <p>{productDescription}</p>
        </div>
    );

    return productDescription ? description : skeleton;
}
