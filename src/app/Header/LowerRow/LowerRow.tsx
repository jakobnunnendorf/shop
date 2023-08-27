import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import LinkToCategoryUl from '../LinkToCategoryUl';

type filterLinkPropValue = [string, productCategory];

export default function LowerRow() {
    const lower_row = (
        <nav className='flex justify-center w-full h-16 py-2 border-b shadow-lg bg-sandy-beige-1 backdrop-blur-3xl lg:block lg:h-8 lg:bg-sandy-beige-1 lg:py-0'>
            <LinkToCategoryUl />
            <div className='flex items-center lg:hidden'>
                <SearchBar />
            </div>
        </nav>
    );

    return lower_row;
}
