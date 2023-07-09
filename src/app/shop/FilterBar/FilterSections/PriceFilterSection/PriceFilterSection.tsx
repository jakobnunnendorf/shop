'use client';
import React from 'react';
import { FiCheck, FiChevronDown, FiChevronUp, FiSquare } from 'react-icons/fi';
import PriceFilter from './PriceFilter';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';

export default function PriceFilterSection() {
    const [expanded, setExpanded] = React.useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const { priceFilters, togglePriceFilter } = React.useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const prices = [
        [0, 4.99],
        [5, 9.99],
        [10, 14.99],
        [15, 19.99],
        [20, 29.99],
        [30, 49.99],
        [50, 99.99],
    ];
    console.log(priceFilters);
    const priceArray = prices.map((price, index) => {
        // console.log(price);
        // console.log(isPriceFilterActive(price, priceFilters));
        const toggleThisPriceFilter = () => {
            console.log(priceFilters);
            console.log(price);
            togglePriceFilter(price);
        };
        return (
            <button onClick={toggleThisPriceFilter} key={index}>
                <PriceFilter
                    active={isPriceFilterActive(price, priceFilters)}
                    priceFilter={price}
                />
            </button>
        );
    });
    const priceFilterSection = (
        <section className='w-full border-b pb-2'>
            <div className='flex items-center space-x-4 text-xl font-bold text-coastal-blue-10'>
                <h2>Preis</h2>
                <button onClick={toggleExpanded}>
                    {expanded ? <FiChevronUp /> : <FiChevronDown />}
                </button>
            </div>
            <section className='flex flex-col'>
                {expanded && priceArray}
            </section>
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