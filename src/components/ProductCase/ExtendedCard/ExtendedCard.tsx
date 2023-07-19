'use client';
import React from 'react'; // TODO add colours
import { ProductCardContextProvider } from '@globalState/ProductCardContext';
import Images from './Images/Images';
import ProductInfo from './ProductInfo/ProductInfo';

export default function ExtendedCard({ product }: { product: product }) {
    
    const [activeIndex, setActiveIndex] = React.useState(0);

    const imageURL_array = product.imageURL_object.default_color.imageURL_array;
    
    const extendedCard = (
        <article className='grid w-full h-full grid-cols-3'>
            <ProductCardContextProvider>

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
