import React from 'react';
import CheckBox from './CheckBox';
import { eur, productCategories } from '@lib/helperFunctions';
export default function Filter({
    filterTitle,
    filterKey,
    filter,
}: {
    filterTitle: string;
    filterKey: string;
    filter: string;
}) {
    //Add a second foo parameter.
    const filterElement = (
        <article className='flex justify-between w-full '>
            <h3 className='text-sm'>{filterTitle}</h3>
            <CheckBox filter={filter} filterKey={filterKey} />
        </article>
    );
    return filterElement;
}

export const categoryArray = productCategories.map((category, index) => {
    return (
        <Filter
            filterTitle={category[0]}
            filterKey='category'
            filter={category[1]}
            key={index}
        />
    );
});

const prices = [
    [0, 4.99],
    [5, 9.99],
    [10, 14.99],
    [15, 19.99],
    [20, 29.99],
    [30, 49.99],
    [50, 99.99],
];

export const priceArray = prices.map((price, index) => {
    return (
        <Filter
            filterTitle={`${eur(price[0])} - ${eur(price[1])}`}
            filterKey='price'
            filter={`${String(price[0])}-${String(price[1])}`}
            key={index}
        />
    );
});