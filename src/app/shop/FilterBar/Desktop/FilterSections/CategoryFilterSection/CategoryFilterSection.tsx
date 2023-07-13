'use client';

import React, { useContext, useState } from 'react';
import Filter from '@app/shop/FilterBar/components/Filter';
import FilterHeading from '@app/shop/FilterBar/components/FilterHeading';
import FilterList from '@app/shop/FilterBar/components/FilterList';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';

export type categoryWithTranslation = [productCategory, string];

const categories: categoryWithTranslation[] = [
    ['phone case', 'Handyhüllen'],
    ['screen protector', 'Panzergläser'],
    ['charging cable', 'Ladekabel'],
    ['charging adapter', 'Lade Adapter'],
    ['tablet case', 'Tablet Hülle'],
    ['phone holder', 'Handy Halterung'],
];

export default function CategoryFilterSection({
    filterList,
}: {
    filterList: JSX.Element;
}) {
    const { toggleCategoryFilter, categoryFilters } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const [expanded, setExpanded] = useState(true);

    const categoryFiltersComponents = categories.map((category, index) => {
        const toggleThisCategory = () => {
            toggleCategoryFilter(category[0]);
        };
        return (
            <button className='w-full' onClick={toggleThisCategory} key={index}>
                <Filter
                    filterName={category[1]}
                    active={categoryFilters.includes(category[0])}
                />
            </button>
        );
    });

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const categoryFilterSection = (
        <section className='w-full border-b  lg:pb-2'>
            <FilterHeading
                heading='Kategorien'
                expanded={expanded}
                toggleExpanded={toggleExpanded}
            />
            {/* <FilterList
                expanded={expanded}
                filters={categoryFiltersComponents}
            /> */}
            {filterList}
        </section>
    );

    return categoryFilterSection;
}
