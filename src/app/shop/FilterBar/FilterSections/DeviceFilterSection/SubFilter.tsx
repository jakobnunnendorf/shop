'use client';

import React from 'react';
import { FiChevronDown, FiSquare } from 'react-icons/fi';

export default function SubFilter({
    deviceFilterArray,
    brand,
}: {
    deviceFilterArray: JSX.Element[];
    brand: string;
}) {
    const [expanded, setExpanded] = React.useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    const wrapper = (
        <section className='w-full '>
            <article className='flex w-full items-center justify-between space-x-2 '>
                <FiSquare />
                <h2 className='text-md font-bold'>{brand}</h2>
                <button onClick={toggleExpanded}>
                    <FiChevronDown />
                </button>
            </article>
            {expanded && (
                <article className='flex w-full flex-col '>
                    {deviceFilterArray.map((deviceFilter) => deviceFilter)}
                </article>
            )}
        </section>
    );
    return wrapper;
}
