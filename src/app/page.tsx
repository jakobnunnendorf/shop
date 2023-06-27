import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { CategoryBlocks } from '@components/CategoryBlocks/CategoryBlocks';
import { ProductCarousel } from '@components/ProductCarousel/ProductCarousel';
import Home from './Home/Home';

interface productsFetchResponse {
    id: string;
    created_at: Date;
    title: string;
    imageURL: string;
    description: string;
    price: string;
    stock: number;
    category: string;
    compatibleModels: string | null;
    reviews: string | null;
    dimensions: null;
}

export const metadata: Metadata = {
    title: 'Phone2Door.com',
    description:
        'Hüllen, Panzergläser, screen protector, ladekabel und Zubehör für dein Handy',
};

export default async function HomePage() {
    const supabase = createServerComponentClient({ cookies });

    const fetchProductsFromCategory = async (
        amount: number,
        category?: string
    ) => {
        if (category) {
            const { data } = await supabase
                .from('products')
                .select('*')
                .eq('category', category)
                .limit(amount);
            return data as productsFetchResponse[];
        } else {
            const { data } = await supabase
                .from('products')
                .select('*')
                .limit(amount);
            return data as productsFetchResponse[];
        }
    };

    const bestSellerData: productsFetchResponse[] =
        await fetchProductsFromCategory(30);

    const phoneCasesData: productsFetchResponse[] =
        await fetchProductsFromCategory(30, 'phone case');
    const screenProtectorData = await fetchProductsFromCategory(
        30,
        'screen protector'
    );
    const chargingCableData: productsFetchResponse[] =
        await fetchProductsFromCategory(30, 'charging cable');
    const chargingAdapterData: productsFetchResponse[] =
        await fetchProductsFromCategory(30, 'charging adapter');
    const tabletCaseData: productsFetchResponse[] =
        await fetchProductsFromCategory(30, 'tablet case');
    const phoneHolderData: productsFetchResponse[] =
        await fetchProductsFromCategory(30, 'phone');

    return (
        <main className=''>
            <Home />

            <ProductCarousel
                heading='Unsere Bestseller'
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
