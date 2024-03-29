// updates the search input globally (across all pages)
'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useRef } from 'react';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';

export default function SearchInput() {
    const router = useRouter();
    const pathNameRef = useRef(usePathname());
    const pathName = usePathname();

    const { searchFilter, updateSearchFilter } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchFilter !== '') {
            router.push('/shop');
        } else if (e.key === 'Escape') {
            updateSearchFilter('');
        }
    };

    useEffect(() => {
        if (pathNameRef.current !== pathName) {
            updateSearchFilter('');
            pathNameRef.current = pathName;
        }
    }, [pathName, updateSearchFilter]);

    return (
        <>
            <div className='relative flex w-full h-full '>
                <input
                    type='text'
                    placeholder='Produktsuche...'
                    className='w-full h-full px-4 text-sm font-bold bg-sandy-beige-3 text-coastal-blue-10 placeholder-coastal-blue-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-coastal-blue-3'
                    value={searchFilter}
                    onChange={(e) => updateSearchFilter(e.target.value)}
                    onKeyDown={handleKeyEvent}
                />
            </div>
        </>
    );
}
