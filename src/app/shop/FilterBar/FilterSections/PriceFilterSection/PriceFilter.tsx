import React from 'react';
import { FiCheck, FiSquare } from 'react-icons/fi';

export default function PriceFilter({
    active,
    priceFilter,
}: {
    active: boolean;
    priceFilter: number[];
}) {
    return (
        <article className='flex w-full justify-between '>
            <h3 className='text-md'>
                {priceFilter[0]} - {String(priceFilter[1]).replace('.', ',')} €
            </h3>
            {active ? <FiCheck /> : <FiSquare />}
        </article>
    );
}
