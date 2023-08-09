'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useContext, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import ProductCard from '@components/ProductCard/ProductCard';

import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';

export default function ShopPage() {
    
    const [products, setProducts] = useState<product[]>([]);
    const { 
        categoryFilters, deviceFilters, priceFilters,
        searchFilter, pageFilter, updateTotalPages,
    } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    // const categoryFilters = ['screen protector'];

    const supabase = createClientComponentClient(); // moved it outside of the useEffect hook in the hope for a possible optimization
    useEffect(() => {

        // to show the number of products per page, alter this according to your needs
        const start = pageFilter < 1? 1 : (pageFilter - 1) * 5;
        const end = (start + 5) - 1;

        const getProducts = async () => {
            const fetchProductsByCategory = async () => {
                if (categoryFilters.length === 0 && searchFilter.length === 0) {
                    const { data: products, count: totalRows } = await supabase
                        .from('products')
                        .select('*', { count: 'exact'}) // using count to get the total number of rows returned
                        .range(start, end);
                    
                    updateTotalPages( Math.ceil(Number(totalRows) / 5) ); 
                    return products;
                } else if (categoryFilters.length === 0 && searchFilter.length !== 0) { // if there's something on the search bar
                    const { data: products, count: totalRows } = await supabase
                        .from('products')
                        .select('*', {count: 'exact'})
                        .textSearch("title", searchFilter)
                        .limit(15);
                    
                    updateTotalPages( Math.ceil(Number(totalRows) / 15) );    
                    return products;
                } else {
                    const { data: products, count: totalRows } = await supabase
                        .from('products')
                        .select('*')
                        .in('category', categoryFilters)
                        .range(start, end);
                    
                    updateTotalPages( Math.ceil(Number(totalRows) / 15) );    
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
        debounce(getProducts, 100); // fix-up for products not showing often while searching

    }, [categoryFilters, deviceFilters, priceFilters, searchFilter, pageFilter]);

    const section = (
        <section className='grid w-full grid-cols-2 gap-0 lg:w-fit lg:grid-cols-5 lg:gap-4 lg:p-4'>
            {products?.map((product, index) => {
                return (
                    <div key={index} className='w-full pb-4'>
                        <ProductCard product={product} grid={true} />
                    </div>
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
