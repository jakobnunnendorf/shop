import React from 'react';

export default function Title({ productTitle }: { productTitle: string; rowSpan?: number }) {
    const skeleton = <div className='h-12 rounded-full bg-gray-100'></div>;
    const title = (
        <h2
            className={` pb-2 text-center text-xl font-bold lg:text-start lg:text-3xl `}
        >
            {productTitle}
        </h2>
    );
    return productTitle ? title : skeleton;
}
