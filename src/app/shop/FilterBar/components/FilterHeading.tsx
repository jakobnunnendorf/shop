import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { filterHeading } from '@app/shop/FilterBarContext';

export default function FilterHeading({
    heading,
    expanded,
    toggleExpanded,
}: {
    heading: filterHeading;
    expanded: boolean;
    toggleExpanded: () => void;
}) {
    return (
        <div className='flex items-center p-2 text-lg font-bold text-coastal-blue-10 lg:space-x-4 lg:text-xl'>
            <h2>{heading}</h2>
            <button onClick={toggleExpanded}>
                {expanded ? <FiChevronUp /> : <FiChevronDown />}
            </button>
        </div>
    );
}
