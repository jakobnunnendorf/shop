'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useRef } from 'react';
import { replaceSpecialCharacters } from '@lib/helperFunctions';
import { SearchContext, SearchContextType } from '@globalState/SearchContext';
import { FiX } from 'react-icons/fi';

export default function SearchInput() {
    const router = useRouter();
    const pathNameRef = useRef(usePathname());
    const pathName = usePathname();

    const { searchFilter, setSearchFilter } = useContext(
        SearchContext
    ) as SearchContextType;

    const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const searchFilterInURLFormat = replaceSpecialCharacters(
            searchFilter
        ).replace(' ', '+');
        if (e.key === 'Enter' && searchFilter !== '') {
            router.push(`/shop?search=${searchFilterInURLFormat}`);
            setSearchFilter('');
            e.currentTarget.blur();
        } else if (e.key === 'Escape') {
            setSearchFilter('');
        }
    };

    const updateThisSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFilter(e.target.value);
    };

    useEffect(() => {
        if (pathNameRef.current !== pathName) {
            setSearchFilter('');
            pathNameRef.current = pathName;
        }
    }, [pathName, setSearchFilter]);

    return (
        <div className='relative flex w-full h-full '>
            <input
                type='text'
                placeholder='Produktsuche...'
                className='w-full h-full px-4 text-sm font-bold bg-sandy-beige-3 text-coastal-blue-10 placeholder-coastal-blue-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-coastal-blue-3'
                value={searchFilter}
                onChange={updateThisSearchFilter}
                onKeyDown={handleKeyEvent}
            />
            {searchFilter.length > 0 && (
                <button
                    onClick={() => setSearchFilter('')}
                    className='absolute hidden h-full my-auto lg:grid place-content-center aspect-square right-4 text-coastal-blue-10'
                >
                    <FiX size={20} />
                </button>
            )}
        </div>
    );
}
