import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Metadata } from 'next';
import { ProductCarousel } from '@components/ProductCarousel/ProductCarousel';
import { CategoryBlock } from '@components/CategoryBlocks/CategoryBlock';
import { CategoryBlocks } from '@components/CategoryBlocks/CategoryBlocks';
import Home from './Home/Home';


export const metadata: Metadata = {
    title: 'Phone2Door.com',
    description:
        'Hüllen, Panzergläser, screen protector, ladekabel und Zubehör für dein Handy',
};

export default async function HomePage() {
    const supabase = createServerComponentClient({ cookies });

    const fetchProductsFromCategory = async (category: string) => {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('category', category)
            .limit(5);
        return data;
    };

    const { data: bestSellerData, error } = await supabase
        .from('products')
        .select('*')
        .limit(5);

    const phoneCasesData = await fetchProductsFromCategory('phone case');
    const screenProtectorData = await fetchProductsFromCategory(
        'screen protector'
    );
    const chargingCableData = await fetchProductsFromCategory('charging cable');
    const chargingAdapterData = await fetchProductsFromCategory(
        'charging adapter'
    );
    const tabletCaseData = await fetchProductsFromCategory('tablet case');
    const phoneHolderData = await fetchProductsFromCategory('phone');

    return (
        <main>
            <Home />
            <ProductCarousel
                heading='Bestseller'
                productData={bestSellerData}
            />
            <CategoryBlocks />
            <ProductCarousel
                heading='Handyhüllen'
                productData={phoneCasesData}
            />
            <ProductCarousel
                heading='Panzergläser'
                productData={screenProtectorData}
            />
            <ProductCarousel
                heading='Ladekabel'
                productData={chargingCableData}
            />
            <ProductCarousel
                heading='Ladestecker'
                productData={chargingAdapterData}
            />
            <ProductCarousel
                heading='Tablet-Taschen'
                productData={tabletCaseData}
            />
            <ProductCarousel
                heading='Handy-Halterungen'
                productData={phoneHolderData}
            />
        </main>
    );
}
