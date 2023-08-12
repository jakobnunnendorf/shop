'use client';
import React, { useContext } from 'react';
import { FiCheck, FiSquare } from 'react-icons/fi';
import { categories } from '@app/shop/FilterBarContext';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';

export default function Filter({
    filter,
    active,
    toggleFilter,
}: {
    filter: string | JSX.Element;
    active: boolean;
    toggleFilter: () => void;
}) {
    const { categoryFilters, priceFilters, deviceFilters } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const filterElement = (
        <article className='flex justify-between w-full '>
            <h3 className='text-sm'>{filter}</h3>
            <button onClick={toggleFilter}>
                {active ? <FiCheck /> : <FiSquare />}
            </button>
        </article>
    );
    return filterElement;
}

