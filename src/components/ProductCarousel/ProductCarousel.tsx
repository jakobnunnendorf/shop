// src/components/ProductCarousel/ProductCarousel.tsx
//NOTE: This is a comment
'use client';
import { FiShoppingCart } from 'react-icons/fi';
import {
    ProductContainer,
    ProductContainerProps,
} from './ProductContainer/ProductContainer';

export function ProductCarousel({
    heading,
    productData,
}: {
    heading: string;
    productData: any;
}) {
    const skeletons = (
        <div className='flex w-40 snap-center flex-col items-center justify-center space-y-2 rounded-xl border-2 border-slate-100 bg-white p-2'>
            <figure className='relative h-32 w-full rounded-xl'>
                <div></div>
            </figure>
            <div className='space-y-2 border-t-2 border-slate-100 p-2'>
                <div className='flex w-full items-center justify-around text-center'></div>
                <div className='flex flex-wrap space-x-1'></div>
            </div>
        </div>
    );

    const productDataWithSkeletons = [
        ...productData,
        ...Array.from({ length: 20 - productData.length }, () => ({})),
    ];

    return (
        <div className='flex flex-col items-center '>
            <h2 className='m-8 text-4xl font-bold text-teal-900 hover:underline'>
                {heading}
            </h2>
            <div className='flex w-96 snap-x space-x-4 overflow-x-auto scrollbar-hide'>
                {productDataWithSkeletons.map((product: any) => (
                    <div className='carousel-item snap-center' key={product.id}>
                        <ProductContainer productData={product} />
                    </div>
                ))}
            </div>
            <button className='mt-4 flex w-40 items-center justify-between rounded-3xl border-none bg-coastal-blue-10 px-4 py-2 text-white shadow-2xl'>
                <span>Jetzt Kaufen</span>
                <FiShoppingCart />
            </button>
            {/* <pre className='w-96'>{typeof products}</pre>
            <pre className='w-96'>{JSON.stringify(products, null, 2)}</pre> */}
        </div>
    );
}
