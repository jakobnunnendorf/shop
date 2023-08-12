import React from 'react';
import FilterList from './FilterList';

export default function MobileSlot({
    filters,
}: {
    filters: JSX.Element[] | JSX.Element | null;
}) {
    const mobileSlot = (
        <div className='w-full h-fit lg:hidden'>
            {Array.isArray(filters) ? (
                <FilterList filters={filters} />
            ) : (
                filters
            )}
        </div>
    );
    return mobileSlot;
}
