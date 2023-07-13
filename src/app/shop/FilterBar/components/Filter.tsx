import React from 'react'
import { FiCheck, FiSquare } from 'react-icons/fi';

export default function Filter({
    filterName,
    active,
}: {
    filterName: string;
    active: boolean;
    }) {
    const filter = (
        <article className='flex w-full justify-between '>
            <h3 className='text-sm'>{filterName}</h3>
            {active ? <FiCheck /> : <FiSquare />}
        </article>
    );
    return filter;
}
