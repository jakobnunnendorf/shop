'use client';
import React from 'react'; // TODO add colours
import { FiArrowLeft } from 'react-icons/fi';
import { ProductCardContextProvider } from '@globalState/ProductCardContext';
import Images from './Images/Images';
import ProductInfo from './ProductInfo/ProductInfo';

export default function ExtendedCard({
    product,
    collapse,
}: {
    product: product;
    collapse: () => void;
}) {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const imageURL_array = product.imageURL_object.default_color.imageURL_array;

    const extendedCard = (
        <article className='grid w-full h-full grid-rows-2 lg:grid-cols-3 lg:grid-rows-none'>
            <ProductCardContextProvider>
                <button
                    className='absolute z-50 border-b shadow-2xl left-4 top-4 border-seafoam-green-10'
                    onClick={collapse}
                >
                    <FiArrowLeft className='w-12 h-12 font-bold text-seafoam-green-7' />
                </button>
                <Images
                    imageURL_array={imageURL_array}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />

                <ProductInfo product={product} />
            </ProductCardContextProvider>
        </article>
    );
    return extendedCard;
}
