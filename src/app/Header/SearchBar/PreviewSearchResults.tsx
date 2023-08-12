'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Expanded from '@components/ProductCard/Expanded/Expanded';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import {
    SearchResultsContext,
    SearchResultsContextType,
} from '@globalState/SearchResults';

export default function PreviewSearchResults() {
    const isShopPage = usePathname() === '/shop';

    const { searchFilter } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const { searchResults } = useContext(
        SearchResultsContext
    ) as SearchResultsContextType;

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
