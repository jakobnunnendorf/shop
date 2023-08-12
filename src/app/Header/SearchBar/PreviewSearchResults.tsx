'use client';
import Image from 'next/image';
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

    const { searchFilter, updateSearchFilter } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const { searchResults } = useContext(
        SearchResultsContext
    ) as SearchResultsContextType;

    const topThreeResults = searchResults.slice(0, 3);
    const [selectedProduct, setSelectedProduct] = useState<product | null>(
        null
    );
    const [opened, setOpened] = useState<boolean>(true);

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
                        <li
                            className='grid h-24 grid-cols-5 border-b'
                            key={index}
                        >
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
                            <button
                                className='my-auto'
                                onClick={() => {
                                    setSelectedProduct(searchResult);
                                    setOpened(false);
                                    updateSearchFilter('');
                                }}
                            >
                                <FiArrowRight className='text-coastal-blue-10' />
                            </button>
                        </li>
                    );
                })}
            </ul>
            {selectedProduct && <Expanded product={selectedProduct} />}
        </div>
    );
    return previewSearchResults;
}
