// updates the search input globally (across all pages)
'use client'

import { useRouter } from 'next/navigation'
import React, { useContext } from 'react';
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
            <div className='flex w-full h-full'>
                <input
                    type='text'
                    placeholder='Suche...'
                    className='w-full h-full px-2 border rounded-l-3xl border-coastal-blue-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-coastal-blue-3'
                    value={searchFilter}
                    onChange={(e) => updateSearchFilter(e.target.value)}
                    onKeyDown={handleKeyEvent}
                />
            </div>
        </>
    );
}
