'use client';

import React from 'react';
import { FiCheck, FiChevronDown, FiSquare } from 'react-icons/fi';

export default function SubFilter({
    deviceFilterArray,
    toggleThisBrand,
    brand,
    active,
}: {
    deviceFilterArray: JSX.Element[];
    brand: string;
    toggleThisBrand: () => void;
    active: boolean;
}) {
    const [expanded, setExpanded] = React.useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    const wrapper = (
        <section className='w-full '>
            <article className='flex w-full items-center justify-between space-x-2 '>
                <button onClick={toggleThisBrand}>
                    {active ? <FiCheck /> : <FiSquare />}
                </button>
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
