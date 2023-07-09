'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useContext, useEffect, useState } from 'react';
import ExtendedCard from '@components/ProductCase/ExtendedCard';
import ProductClientFrame from '@components/ProductCase/ProductClientFrame';
import SmallCard from '@components/ProductCase/SmallCard';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';

export default function ShopPage() {
    const [products, setProducts] = useState<product[]>([]);

    const { categoryFilters } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;
    // const categoryFilters = ['screen protector'];
    useEffect(() => {
        const supabase = createClientComponentClient();
        const getProducts = async () => {
            // fetch products where the category is in the active filters array
            const fetchAllProducts = async () => {
                const { data: products } = await supabase
                    .from('products')
                    .select('*')
                    .limit(30);
                return products;
            };
            const fetchByActiveFilters = async () => {
                const { data: products } = await supabase
                    .from('products')
                    .select('*')
                    .in('category', categoryFilters)
                    .limit(30);
                return products;
            };
            if (categoryFilters.length === 0) {
                const products = (await fetchAllProducts()) as product[];
                setProducts(products);
            } else {
                const products = (await fetchByActiveFilters()) as product[];
                setProducts(products);
            }
        };
        getProducts();
    }, [categoryFilters]);

    const section = (
        <section className='grid w-fit grid-cols-4 gap-4 p-4'>
            <pre>{JSON.stringify(categoryFilters, null, 2)}</pre>
            {products?.map((product, index) => {
                const extended_card_component_with_props = (
                    <ExtendedCard product={product as product} />
                );
                const small_card_component_with_props = (
                    <SmallCard product={product as product} />
                );
                return (
                    <ProductClientFrame
                        key={index}
                        ExtendedCard={extended_card_component_with_props}
                        SmallCard={small_card_component_with_props}
                    />
                );
            })}
        </section>
    );
    return section;
}
