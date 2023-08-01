'use client'

import React, { useState, useEffect, useContext } from 'react'
import { ActiveFiltersContext, FilterContextType } from '@globalState/ActiveFiltersContext'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function SearchResults() {
    const supabase = createClientComponentClient();
    const { searchFilter } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const [searchResults, setSearchResults] = useState<product[]>([]);
        
    useEffect(() => {
        const getProducts = async () => {
        if (searchFilter !== '') {
            const getSearchProducts = async () => {
                const { data: searchResults } = await supabase
                    .from('products')
                    .select('*')
                    .limit(30);
                    
                    console.log(searchResults);
                    return searchResults;
                };

                const products = (await getSearchProducts() as product[]);
                setSearchResults(products);
            };
        };
        getProducts();

    }, [searchFilter]);

    return (
        <div>
        </div>
    );
};

