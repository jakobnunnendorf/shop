import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { CategoryBlocks } from '@components/CategoryBlocks/CategoryBlocks';
import { ProductCarousel } from '@components/ProductCarousel/ProductCarousel';
import Home from './Home/Home';
import { productCategories } from '@lib/helperFunctions';

export const metadata: Metadata = {
    title: 'Phone2Door.com',
    description:
        'Hüllen, Panzergläser, screen protector, ladekabel und Zubehör für dein Handy',
};

export default async function HomePage() {
    const supabase = createServerComponentClient({ cookies });

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
