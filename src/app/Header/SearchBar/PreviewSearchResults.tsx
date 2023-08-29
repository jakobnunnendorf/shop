'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { SearchContext, SearchContextType } from '@globalState/SearchContext';

export default function PreviewSearchResults() {
    const isShopPage = usePathname() === '/shop';

    const { searchResults, searchFilter } = useContext(
        SearchContext
    ) as SearchContextType;

    const previewSearchResults = (
        <div
            className={`${
                searchFilter.length > 0 &&
                searchResults.length > 0 &&
                !isShopPage
                    ? 'fixed'
                    : 'hidden'
            } left-0 top-16 h-fit w-full lg:h-[calc(100vh-6rem)] lg:top-24 bg-white `}
        >
            <h2 className='hidden px-4 py-16 text-3xl font-bold text-center text-coastal-blue-10 lg:block'>
                {searchResults.length} Ergebnisse für "{searchFilter}"
            </h2>
            <ul className='pt-4 space-y-2 lg:w-1/2 lg:mx-auto'>
                {searchResults.map((searchResult, index: number) => {
                    return (
                        <Link href={`/produkte/${searchResult.id}`} key={index}>
                            <li className='grid h-24 grid-cols-5 border-b'>
                                <figure className='relative w-3/5 m-auto lg:h-full lg:w-auto aspect-square'>
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
        </div>
    );
    return previewSearchResults;
}
