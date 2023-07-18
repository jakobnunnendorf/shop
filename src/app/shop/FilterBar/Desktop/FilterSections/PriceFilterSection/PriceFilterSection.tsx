'use client';
import React from 'react';
import Filter from '@app/shop/FilterBar/components/Filter';
import FilterHeading from '@app/shop/FilterBar/components/FilterHeading';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import { eur } from '@lib/helperFunctions';
import FilterList from '@app/shop/FilterBar/components/FilterList';

const prices = [
    [0, 4.99],
    [5, 9.99],
    [10, 14.99],
    [15, 19.99],
    [20, 29.99],
    [30, 49.99],
    [50, 99.99],
];


export default function PriceFilterSection() {
    const [expanded, setExpanded] = React.useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    
    const { priceFilters, togglePriceFilter } = React.useContext(
        ActiveFiltersContext
        ) as FilterContextType;
        
        const priceArray = prices.map((price, index) => {
            const toggleThisPriceFilter = () => {
                togglePriceFilter(price);
            };
            return (
                <button onClick={toggleThisPriceFilter} key={index}>
                    <Filter
                        filterName={`${eur(price[0])} - ${eur(price[1])}`}
                        active={isPriceFilterActive(price, priceFilters)}
                    />
                </button>
            );
        });
    const priceFilterSection = (
        <section className='w-full border-b lg:pb-2'>
            <FilterHeading
                heading='Preis'
                expanded={expanded}
                toggleExpanded={toggleExpanded}
            />
            <FilterList expanded={expanded} filters={priceArray} />
        </section>
    );
    return priceFilterSection;
}

const isPriceFilterActive = (
    priceFilter: number[],
    priceFilters: number[][]
) => {
    return priceFilters.some(
        (activePriceFilter) =>
            activePriceFilter[0] === priceFilter[0] &&
            activePriceFilter[1] === priceFilter[1]
    );
};
