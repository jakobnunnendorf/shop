'use client';

import {
    createContext,
    Dispatch,
    useContext,
    useEffect,
    useState,
} from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
    ActiveFiltersContext,
    FilterContextType,
} from './ActiveFiltersContext';

export type SearchResultsContextType = {
    searchResults: product[];
    setSearchResults: Dispatch<product[]>;
    numberOfResults: number;
};

export const SearchResultsContext =
    createContext<SearchResultsContextType | null>(null);

export function SearchResultsContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [searchResults, setSearchResults] = useState<product[]>([]);

    const supabase = createClientComponentClient(); // moved it outside of the useEffect hook in the hope for a possible optimization

    const { categoryFilters, deviceFilters, priceFilters, searchFilter } =
        useContext(ActiveFiltersContext) as FilterContextType;
    
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

    const numberOfResults = searchResults.length ? searchResults.length : 0;

    return (
        <SearchResultsContext.Provider
            value={{
                searchResults,
                setSearchResults,
                numberOfResults,
            }}
        >
            {children}
        </SearchResultsContext.Provider>
    );
}

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
