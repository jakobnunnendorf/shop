'use client';
import React from 'react';
import { FiChevronDown, FiChevronUp, FiSquare } from 'react-icons/fi';

export default function PriceFilterSection() {
    const [expanded, setExpanded] = React.useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    const priceFilters = [
        [0, 4.99],
        [5, 9.99],
        [10, 14.99],
        [15, 19.99],
        [20, 29.99],
        [30, 49.99],
        [50, 99.99],
    ];
    const priceArray = priceFilters.map((price, index) => {
        return (
            <div
                key={index}
                className='flex w-full items-center justify-between'
            >
                <label>{`€${price[0]} - €${price[1]}`}</label>
                <FiSquare />
            </div>
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
            {expanded && priceArray}
        </section>
    );
    return priceFilterSection;
}
