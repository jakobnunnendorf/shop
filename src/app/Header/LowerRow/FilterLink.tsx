'use client';

import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';

export default function FilterLink({
    filterTitle,
    filterValue,
}: {
    filterTitle: string;
    filterValue: productCategory;
    }) {

    const { setFilter } = useContext(ActiveFiltersContext) as FilterContextType;
    const setThisFilter = () => {
        setFilter(filterValue);
    }
    return (
        <Link onClick={setThisFilter} href='/shop'>
            <li>{filterTitle}</li>
        </Link>
    );
}
