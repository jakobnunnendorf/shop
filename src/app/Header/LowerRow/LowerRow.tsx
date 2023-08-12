import React from 'react';
import FilterLink from './FilterLink';
import SearchBar from '../SearchBar/SearchBar';

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
        <nav className='flex justify-center w-full h-12 py-2 border-b shadow-lg bg-sandy-beige-1 backdrop-blur-3xl lg:block lg:h-8 lg:bg-sandy-beige-1 lg:py-0'>
            <ul className='items-center justify-around hidden w-full h-full text-sm lg:flex'>
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
            <div className=' lg:hidden'>
                <SearchBar />
            </div>
        </nav>
    );

    return lower_row;
}
