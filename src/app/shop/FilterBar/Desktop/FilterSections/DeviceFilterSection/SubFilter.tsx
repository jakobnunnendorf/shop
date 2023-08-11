'use client';

import React from 'react';
import { FiCheck, FiChevronDown, FiSquare } from 'react-icons/fi';
import FilterList from '@app/shop/FilterBar/components/FilterList';

export default function SubFilter({
    deviceFilterArray,
    toggleThisBrand,
    brand,
    active,
    expanded,
    toggleExpanded,
}: {
    deviceFilterArray: JSX.Element[];
    brand: string;
    toggleThisBrand: () => void;
    active: boolean;
    expanded: boolean;
    toggleExpanded: () => void;
}) {
    const wrapper = //TODO fix that not all expand at once on desktop
        (
            <section className='grid w-full grid-cols-3 lg:block'>
                <article className='flex items-center justify-between w-full space-x-2 '>
                    <button onClick={toggleThisBrand}>
                        {active ? <FiCheck /> : <FiSquare />}
                    </button>
                    <h2 className='font-bold text-md'>{brand}</h2>
                    <button onClick={toggleExpanded}>
                        <FiChevronDown />
                    </button>
                </article>
                {expanded && (
                    <div className='hidden  lg:block'>
                        <FilterList
                            filters={deviceFilterArray}
                            // expanded={expanded}
                        />
                    </div>
                )}
            </section>
        );
    return wrapper;
}
