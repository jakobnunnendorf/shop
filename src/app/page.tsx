import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { CategoryBlocks } from '@components/CategoryBlocks/CategoryBlocks';
import { ProductCarousel } from '@components/ProductCarousel/ProductCarousel';
import Home from './Home/Home';

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
        <main className='w-full'>
            <Home />
            {
                bestSeller.length !== 0?
                <ProductCarousel
                    heading='Unsere Bestseller'
                    productData={bestSeller}
                />
                :
                <></>
            }
            <CategoryBlocks />

            { phoneCases.length !== 0?
                <ProductCarousel 
                    heading='Handyhüllen' 
                    productData={phoneCases}
                />
                :
                <></>
            }

            { screenProtector.length !== 0?
                <ProductCarousel
                    heading='Panzergläser'
                    productData={screenProtector}
                />
                :
                <></>
            }
            
            { chargingCable.length !== 0?
                <ProductCarousel 
                heading='Ladekabel'
                productData={chargingCable} 
                />
                : 
                <></>
            }
            
            { chargingAdapter.length !== 0?
                <ProductCarousel
                heading='Ladestecker'
                productData={chargingAdapter}
                /> 
                : 
                <></> 
            }

            { tabletCase.length !== 0? 
                <ProductCarousel
                heading='Tablet-Taschen'
                productData={tabletCase}
                />
                : 
                <></>
            }

            { phoneHolder.length !== 0?
                <ProductCarousel
                    heading='Handy-Halterungen'
                    productData={phoneHolder}
                />
                : 
                <></>
            }

        </main>
    );
}
