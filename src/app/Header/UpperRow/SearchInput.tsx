// Using this component as a starter to get the value of search (probably?: use it in a global context)
'use client'

import React, { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function SearchInput() {
    const [searchInput, setSearchInput] = useState<string>('');    
    const [searchResults, setSearchResults] = useState<product[]>([]);

    const supabase = createClientComponentClient();

    useEffect(() => {
        const fetchProductsBySearch = async () => {
            const { data: products } = await supabase
                .from('products')
                .select('*')
                .textSearch('title', searchInput) // testing search based on dynamic input
                .limit(30);

                setSearchResults(products as product[]);
            }
        
            fetchProductsBySearch();

    }, [searchInput]);

    // used to check if the fields are getting fetched or not
    useEffect(() => {
        console.log('Products: ', searchResults)
    }, [searchResults]);

    const searchInputWrapper = (
        <div className='flex h-full w-full'>
            <input
                type='text'
                placeholder='Suche...'
                className='h-full w-full px-2 rounded-l-3xl border border-coastal-blue-3 focus:outline-none focus:ring-2 focus:ring-coastal-blue-3 focus:border-transparent'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
    );
    
    return searchInputWrapper; 
}
