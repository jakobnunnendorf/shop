'use client';
import React, { useContext, useState } from 'react';
import FilterHeading from './FilterHeading';
import FilterList from './FilterList';

export type filterHeading = 'Kategorien' | 'Modelle' | 'Preise' | null;

export default function FilterSection({
    heading,
    filters,
}: {
    heading: filterHeading;
    filters: JSX.Element[] | JSX.Element;
}) {
    const [expanded, setExpanded] = useState<boolean>(false);
    const handleToggleExpanded = () => {
        setExpanded(!expanded);
    };
    const filterSection = (
        <section>
            <FilterHeading
                heading={heading}
                expanded={expanded}
                toggleExpanded={handleToggleExpanded}
            />
            <div>
                {expanded && (
                    <div className=''>
                        {Array.isArray(filters) ? (
                            <FilterList filters={filters} />
                        ) : (
                            filters
                        )}
                    </div>
                )}
            </div>
        </section>
    );
    return filterSection;
}
