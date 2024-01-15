import { Metadata } from 'next';
import { CategoryBlocks } from '@components/CategoryBlocks/CategoryBlocks';
import { ProductCarousel } from '@components/ProductCarousel/ProductCarousel';
import Home from './Home/Home';
import { productCategories } from '@lib/fetchProductData';

export const metadata: Metadata = {
    title: 'Phone2Door.com',
    description:
        'Hüllen, Panzergläser, screen protector, ladekabel und Zubehör für dein Handy',
};

export default async function HomePage() {
    return (
        <main className='w-full'>
            <Home />

            <ProductCarousel heading='Unsere Bestseller' />

            <CategoryBlocks />

            {productCategories.map((category, index) => {
                return (
                    <ProductCarousel
                        key={index}
                        heading={category[0]}
                        productCategory={category[1]}
                    />
                );
            })}
        </main>
    );
}
