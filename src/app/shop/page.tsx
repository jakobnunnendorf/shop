'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useContext, useEffect, useState } from 'react';
import ExtendedCard from '@components/CatalogueTile/ExtendedCard';
import ProductClientFrame from '@components/CatalogueTile/ProductClientFrame';
import SmallCard from '@components/CatalogueTile/SmallCard';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';

export default function ShopPage() {
    const [products, setProducts] = useState<product[]>([]);

    const { categoryFilters, deviceFilters, priceFilters } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;
    // const categoryFilters = ['screen protector'];
    useEffect(() => {
        const supabase = createClientComponentClient();
        const getProducts = async () => {
            const fetchProductsByCategory = async () => {
                if (categoryFilters.length === 0) {
                    const { data: products } = await supabase
                        .from('products')
                        .select('*')
                        .limit(30);
                    return products;
                } else {
                    const { data: products } = await supabase
                        .from('products')
                        .select('*')
                        .in('category', categoryFilters)
                        .limit(30);
                    return products;
                }
            };
            const products = (await fetchProductsByCategory()) as product[];
            const deviceFilteredProducts = filterProductArrayByDeviceFilters(
                products,
                deviceFilters
            );
            const priceFilteredProducts = filterProductArrayByPriceFilters(
                deviceFilteredProducts,
                priceFilters
            );
            setProducts(priceFilteredProducts);
        };
        getProducts();
    }, [categoryFilters, deviceFilters, priceFilters]);

    const section = (
        <section className='grid w-full grid-cols-3 gap-4 p-2 lg:w-fit lg:grid-cols-4 lg:p-4'>
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

// ------------------ Helper Functions ------------------

const filterProductArrayByDeviceFilters = (
    products: product[],
    deviceFilters: device[]
) => {
    if (deviceFilters.length === 0) return products;
    // first we filter all products
    const filteredProducts = products.filter((product: product) => {
        // in the filter we loop through all device filters
        return deviceFilters.some((deviceFilter: device) => {
            // if the device filter has no name, we only filter by brand
            if (deviceFilter.name.length === 0) {
                return product.compatibleModels?.some((compatibleDevice) => {
                    return compatibleDevice.brand === deviceFilter.brand;
                });
            } else {
                return product.compatibleModels?.some((compatibleDevice) => {
                    return (
                        compatibleDevice.brand === deviceFilter.brand &&
                        compatibleDevice.name === deviceFilter.name
                    );
                });
            }
        });
    });
    return filteredProducts;
};

const filterProductArrayByPriceFilters = (
    products: product[],
    priceFilters: number[][]
) => {
    if (priceFilters.length === 0) return products;
    const filteredProducts = products.filter((product: product) => {
        return priceFilters.some((priceFilter: number[]) => {
            return (
                product.price >= priceFilter[0] &&
                product.price <= priceFilter[1]
            );
        });
    });
    return filteredProducts;
};


