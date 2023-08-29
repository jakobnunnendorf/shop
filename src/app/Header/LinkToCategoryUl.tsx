import { productCategories } from '@lib/helperFunctions';
import React from 'react';
import FilterLink from './LowerRow/FilterLink';

export default function LinkToCategoryUl() {
    return (
        <ul className='items-center justify-around hidden w-full h-full text-sm lg:flex'>
            {productCategories.map((filterLinkPropValue) => {
                return (
                    <FilterLink
                        key={filterLinkPropValue[1]}
                        filterTitle={filterLinkPropValue[0]}
                        filterValue={filterLinkPropValue[1]}
                    />
                );
            })}
        </ul>
    );
}
