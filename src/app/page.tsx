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
            return data as product[];
        } else {
            const { data } = await supabase
                .from('products')
                .select('*')
                .limit(amount);
            return data as product[];
        }
    };

    const bestSellerData: Promise<product[]> = fetchProductsFromCategory(30);
    const phoneCasesData: Promise<product[]> = fetchProductsFromCategory(
        30,
        'phone case'
    );
    const screenProtectorData: Promise<product[]> = fetchProductsFromCategory(
        30,
        'screen protector'
    );
    const chargingCableData: Promise<product[]> = fetchProductsFromCategory(
        30,
        'charging cable'
    );
    const chargingAdapterData: Promise<product[]> = fetchProductsFromCategory(
        30,
        'charging adapter'
    );
    const tabletCaseData: Promise<product[]> = fetchProductsFromCategory(
        30,
        'tablet case'
    );
    const phoneHolderData: Promise<product[]> = fetchProductsFromCategory(
        30,
        'phone holder'
    );

    const [
        bestSeller,
        phoneCases,
        screenProtector,
        chargingCable,
        chargingAdapter,
        tabletCase,
        phoneHolder,
    ] = await Promise.all([
        bestSellerData,
        phoneCasesData,
        screenProtectorData,
        chargingCableData,
        chargingAdapterData,
        tabletCaseData,
        phoneHolderData,
    ]);

    return (
        <main className=''>
            <Home />

            <ProductCarousel
                heading='Unsere Bestseller'
                productData={bestSeller}
            />
            <CategoryBlocks />
            <ProductCarousel heading='Handyhüllen' productData={phoneCases} />
            <ProductCarousel
                heading='Panzergläser'
                productData={screenProtector}
            />
            <ProductCarousel heading='Ladekabel' productData={chargingCable} />
            <ProductCarousel
                heading='Ladestecker'
                productData={chargingAdapter}
            />
            <ProductCarousel
                heading='Tablet-Taschen'
                productData={tabletCase}
            />
            <ProductCarousel
                heading='Handy-Halterungen'
                productData={phoneHolder}
            />
        </main>
    );
}
