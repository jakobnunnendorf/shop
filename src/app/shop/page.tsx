'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useContext, useEffect } from 'react';
import ProductCard from '@components/ProductCard/ProductCard';

import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import {
    SearchResultsContext,
    SearchResultsContextType,
} from '@globalState/SearchResults';

export default function ShopPage() {
    // const [products, setProducts] = useState<product[]>([]);
    const { searchResults, setSearchResults } = useContext(
        SearchResultsContext
    ) as SearchResultsContextType;

    const { categoryFilters, deviceFilters, priceFilters, searchFilter } =
        useContext(ActiveFiltersContext) as FilterContextType;
    // const categoryFilters = ['screen protector'];

    const supabase = createClientComponentClient(); // moved it outside of the useEffect hook in the hope for a possible optimization
    useEffect(() => {
        const getProducts = async () => {
            const fetchProductsByCategory = async () => {
                if (categoryFilters.length === 0 && searchFilter.length === 0) {
                    const { data: products } = await supabase
                        .from('products')
                        .select('*')
                        .limit(30);

                    return products;
                } else if (
                    categoryFilters.length === 0 &&
                    searchFilter.length !== 0
                ) {
                    // if there's something on the search bar
                    const { data: products } = await supabase
                        .from('products')
                        .select('*')
                        .textSearch('title', searchFilter)
                        .limit(30);
                    console.log(searchFilter);
                    console.log(products);
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
            setSearchResults(priceFilteredProducts);
        };
        getProducts();
    }, [
        categoryFilters,
        deviceFilters,
        priceFilters,
        searchFilter,
        setSearchResults,
        supabase,
    ]);

    const section = (
        <section className='grid w-full grid-cols-2 gap-0 lg:w-fit lg:grid-cols-5 lg:gap-4 lg:p-4'>
            {searchResults?.map((product, index) => {
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
