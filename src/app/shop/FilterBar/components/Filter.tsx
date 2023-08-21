'use client';
import React from 'react';
import { FiCheck, FiSquare } from 'react-icons/fi';

export default function Filter({
    filter,
    active,
    toggleFilter,
}: {
    filter: string | JSX.Element;
    active: boolean;
    toggleFilter: () => void;
}) {
    const filterElement = (
        <article className='flex w-full justify-between '>
            <h3 className='text-sm'>{filter}</h3>
            <button onClick={toggleFilter}>
                {active ? <FiCheck /> : <FiSquare />}
            </button>
        </article>
    );
    return filterElement;
}

