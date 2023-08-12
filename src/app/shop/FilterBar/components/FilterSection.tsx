import React, { useContext } from 'react';
import FilterHeading from './FilterHeading';
import FilterList from './FilterList';
import {
    FilterBarContext,
    FilterBarContextType,
    filterHeading,
} from '../../FilterBarContext';

export default function FilterSection({
    heading,
    filters,
}: {
    heading: filterHeading;
    filters: JSX.Element[] | JSX.Element;
}) {
    const { expanded, setExpanded, setMobileSlot } = useContext(
        FilterBarContext
    ) as FilterBarContextType;

    const handleToggleExpanded = () => {
        if (expanded === heading) {
            setExpanded(null);
            setMobileSlot(null);
            return;
        } else {
            setExpanded(heading);
            setMobileSlot(filters);
        }
    };

    const filterSection = (
        <section>
            <FilterHeading
                heading={heading}
                expanded={heading === expanded}
                toggleExpanded={handleToggleExpanded}
            />
            <div>
                {expanded === heading && (
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
