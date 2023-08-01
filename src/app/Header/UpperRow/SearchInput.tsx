// updates the search input globally (across all pages)
'use client'

import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { ActiveFiltersContext, FilterContextType } from '@globalState/ActiveFiltersContext';

export default function SearchInput() {
    const router = useRouter();

    const { searchFilter, updateSearchFilter } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchFilter !== '') {
            router.push('/shop');
        }

        else if (e.key === 'Escape') {
            updateSearchFilter('');
        }
    }

    return (
        <>
            <div className='flex h-full w-full'>
                <input
                    type='text'
                    placeholder='Suche...'
                    className='h-full w-full px-2 rounded-l-3xl border border-coastal-blue-3 focus:outline-none focus:ring-2 focus:ring-coastal-blue-3 focus:border-transparent'
                    value={searchFilter}
                    onChange={(e) => (updateSearchFilter(e.target.value))}
                    onKeyDown={handleKeyEvent}
                />
            </div>
        </>
    );
}
