'use client';

import { useContext, useEffect, useState } from 'react';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import ExtendedCard from '@components/ProductCase/ExtendedCard';
import ProductClientFrame from '@components/ProductCase/ProductClientFrame';
import SmallCard from '@components/ProductCase/SmallCard';
import supabase from '@utils/supabase';
import ProductGrid from './productGrid/ProductGrid';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ShopPage() {
    const [products, setProducts] = useState<product[]>([]);

    const { activeFilters } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;
    // const activeFilters = ['screen protector'];
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
                    .in('category', activeFilters)
                    .limit(30);
                return products;
            };
            if (activeFilters.length === 0) {
                const products = (await fetchAllProducts()) as product[];
                setProducts(products);
            } else {
                const products = (await fetchByActiveFilters()) as product[];
                setProducts(products);
            }
        };
        getProducts();
    }, [activeFilters]);

    const section = (
        <section className='grid grid-cols-4 gap-4 p-4 w-fit'>
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
    // return <ProductGrid products={products} />;
}
