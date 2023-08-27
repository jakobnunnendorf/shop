'use client';

import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import FilterList from '@app/shop/FilterBar/components/FilterList';
import CheckBox from '@app/shop/FilterBar/components/CheckBox';

export default function SubFilter({
    deviceFilterArray,
    brand,
    expanded,
    toggleExpanded,
}: {
    deviceFilterArray: JSX.Element[];
    brand: string;
    expanded: boolean;
    toggleExpanded: () => void;
}) {
    const wrapper = //TODO fix that not all expand at once on desktop
        (
            <section className='grid w-full grid-cols-3 lg:block'>
                <article className='flex items-center justify-between w-full space-x-2 '>
                    <CheckBox filter={brand} filterKey='brand' />
                    <h2 className='font-bold text-md'>{brand}</h2>
                    <button onClick={toggleExpanded}>
                        <FiChevronDown />
                    </button>
                </article>
                {expanded && (
                    <div className='hidden lg:block'>
                        <FilterList filters={deviceFilterArray} />
                    </div>
                )}
            </section>
        );
    return wrapper;
}
