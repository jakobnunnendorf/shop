'use client';
import React from 'react'; // TODO add colours
import Images from './Images/Images';
import ProductInfo from './ProductInfo/ProductInfo';

const colors: ProductInColor[] = [
    // TODO: remove this mock data
    { imageURL_array: [], color_name: 'blau', tailwind_color: 'bg-blue-500' },
    { imageURL_array: [], color_name: 'rot', tailwind_color: 'bg-red-500' },
    { imageURL_array: [], color_name: 'grün', tailwind_color: 'bg-green-500' },
    { imageURL_array: [], color_name: 'gelb', tailwind_color: 'bg-yellow-500' },
    {
        imageURL_array: [],
        color_name: 'orange',
        tailwind_color: 'bg-orange-500',
    },
];

export default function ExtendedCard({ product }: { product: product }) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const imageURL_array = product.imageURL_object.default_color.imageURL_array;
    const wrapper = (
        <article className='grid w-full h-full grid-cols-3'>
            <Images
                imageURL_array={imageURL_array}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
            <ProductInfo product={product} colors={colors} />
        </article>
    );
    return wrapper;
}
