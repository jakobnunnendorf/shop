'use client';

import React, { useState } from 'react';
import FilterHeading from '@app/shop/FilterBar/components/FilterHeading';
export type categoryWithTranslation = [productCategory, string];
export default function CategoryFilterSection({
    filterList,
}: {
    filterList: JSX.Element;
}) {

    const [expanded, setExpanded] = useState(true);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const categoryFilterSection = (
        <section className='w-full border-b lg:pb-2'>
            <FilterHeading
                heading='Kategorien'
                expanded={expanded}
                toggleExpanded={toggleExpanded}
            />
            {filterList}
        </section>
    );

    return categoryFilterSection;
}
