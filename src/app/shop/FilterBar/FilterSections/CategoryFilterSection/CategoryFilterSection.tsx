'use client';

import React, { useContext, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import CategoryFilter from './CategoryFilter';

export type categoryWithTranslation = [productCategory, string];

export default function CategoryFilterSection() {
    const { toggleCategoryFilter, categoryFilters } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const [expanded, setExpanded] = useState(true);
    const categories: categoryWithTranslation[] = [
        ['phone case', 'Handyhüllen'],
        ['screen protector', 'Panzergläser'],
        ['charging cable', 'Ladekabel'],
        ['charging adapter', 'Lade Adapter'],
        ['tablet case', 'Tablet Hülle'],
        ['phone holder', 'Handy Halterung'],
    ];

    const categoryFilterComponents = categories.map((category, index) => {
        const toggleThisCategory = () => {
            toggleCategoryFilter(category[0]);
        };
        return (
            <button className='w-full' onClick={toggleThisCategory} key={index}>
                <CategoryFilter
                    category={category}
                    active={categoryFilters.includes(category[0])}
                />
            </button>
        );
    });

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const categoryFilterSection = (
        <section className='w-full border-b lg:pb-2 '>
            <div className='flex items-center p-2 text-lg font-bold text-coastal-blue-10 lg:space-x-4 lg:text-xl'>
                <h2>Kategorien</h2>
                <button onClick={toggleExpanded}>
                    {expanded ? <FiChevronUp /> : <FiChevronDown />}
                </button>
            </div>
            <section className='absolute right-1/2 z-10 grid w-screen translate-x-1/2 grid-cols-2 p-2'>
                {expanded && categoryFilterComponents}
            </section>
            {expanded && <section className='h-24 w-full '></section>}
        </section>
    );

    return categoryFilterSection;
}
