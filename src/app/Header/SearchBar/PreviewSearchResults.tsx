'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Expanded from '@components/ProductCard/Expanded/Expanded';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import {
    SearchResultsContext,
    SearchResultsContextType,
} from '@globalState/SearchResultsContext';

export default function PreviewSearchResults() {
    const supabase = createClientComponentClient();
    const isShopPage = usePathname() === '/shop';

    const { searchFilter } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const { searchResults, setSearchResults } = useContext(
        SearchResultsContext
    ) as SearchResultsContextType;

    useEffect(() => {
        if (searchFilter !== '') {
            const getProducts = async () => {
                const getSearchProducts = async () => {
                    const { data: searchResults } = await supabase
                        .from('products')
                        .select('*')
                        .textSearch('title', searchFilter)
                        .limit(3);

                    return searchResults;
                };

                const products = (await getSearchProducts()) as product[];
                setSearchResults(products);
            };
            getProducts();
        }
    }, [searchFilter, supabase, setSearchResults]);

    const topThreeResults = searchResults.slice(0, 3);
    const [selectedProduct] = useState<product | null>(null);
    const previewSearchResults = (
        <div
            className={`${
                searchFilter.length > 0 &&
                searchResults.length > 0 &&
                !isShopPage
                    ? 'fixed'
                    : 'hidden'
            } left-0 top-12 h-fit w-full bg-white`}
        >
            <ul className='pt-4 space-y-2'>
                {topThreeResults.map((searchResult, index) => {
                    return (
                        <Link href={`/produkte/${searchResult.id}`} key={index}>
                            <li className='grid h-24 grid-cols-5 border-b'>
                                <figure className='relative w-3/5 m-auto aspect-square'>
                                    <Image
                                        src={
                                            searchResult.imageURL_object
                                                .default_color.imageURL_array[0]
                                        }
                                        alt={searchResult.title}
                                        fill
                                        className='contain'
                                    />
                                </figure>
                                <h2 className='col-span-3 my-auto'>
                                    {searchResult.title}
                                </h2>

                                <FiArrowRight className='m-auto text-coastal-blue-10' />
                            </li>
                        </Link>
                    );
                })}
            </ul>
            {selectedProduct && <Expanded product={selectedProduct} />}
        </div>
    );
    return previewSearchResults;
}
