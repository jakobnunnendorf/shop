import React from 'react';
import FilterLink from './FilterLink';

type filterLinkPropValue = [string, productCategory];

export default function LowerRow() {
    const filterLinkPropValues: filterLinkPropValue[] = [
        ['Handyhüllen', 'phone case'],
        ['Panzergläser', 'screen protector'],
        ['Ladekabel', 'charging cable'],
        ['Ladestecker', 'charging adapter'],
        ['Tablet-Taschen', 'tablet case'],
        ['Handy-Halterungen', 'phone holder'],
    ];

    const lower_row = (
        <nav className='hidden h-8 w-full border-b bg-sandy-beige-1 shadow-lg backdrop-blur-3xl lg:block'>
            <ul className='flex h-full w-full items-center justify-around text-sm'>
                {filterLinkPropValues.map((filterLinkPropValue) => {
                    return (
                        <FilterLink
                            key={filterLinkPropValue[1]}
                            filterTitle={filterLinkPropValue[0]}
                            filterValue={filterLinkPropValue[1]}
                        />
                    );
                })}
            </ul>
        </nav>
    );

    return lower_row;
}
