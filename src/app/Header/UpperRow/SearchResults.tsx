'use client'

import React, { useState, useEffect, useContext } from 'react'
import { ActiveFiltersContext, FilterContextType } from '@globalState/ActiveFiltersContext'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function SearchResults() {
    const supabase = createClientComponentClient();
    const { searchFilter } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const [searchProducts, setSearchProducts] = useState<product[]>([]);
    
    useEffect(() => {
        if (searchFilter !== '') {
            const getProducts = async () => {
                const getSearchProducts = async () => {
                    const { data: searchResults } = await supabase
                        .from('products')
                        .select('*')
                        .textSearch('title', searchFilter)
                        .limit(3);
                        
                        console.log(searchResults);
                        return searchResults;
                    };

                    const products = (await getSearchProducts() as product[]);
                    setSearchProducts(products);
                };
                getProducts();
                console.log(searchProducts);
            }
    }, [searchFilter]);

    return (
        <div>
            {searchProducts.map((product, index) => (
                <div key={index}>
                    <p>{product.title}</p>
                </div>
            ))}
        </div>
    );
};

