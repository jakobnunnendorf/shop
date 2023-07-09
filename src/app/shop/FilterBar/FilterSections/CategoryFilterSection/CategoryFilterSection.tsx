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
        <section className='w-full border-b pb-2'>
            <div className='flex items-center space-x-4 text-xl font-bold text-coastal-blue-10'>
                <h2>Kategorien</h2>
                <button onClick={toggleExpanded}>
                    {expanded ? <FiChevronUp /> : <FiChevronDown />}
                </button>
            </div>
            {expanded && categoryFilterComponents}
        </section>
    );

    return categoryFilterSection;
}
