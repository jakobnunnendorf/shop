import React from 'react';

export default function FilterList({
    expanded,
    filters,
}: {
    expanded: boolean;
    filters: React.JSX.Element[];
}) {
    const filterList = (
        <section className=' grid w-full grid-cols-3 flex-col lg:flex'>
            {expanded && filters}
        </section>
    );
    return filterList;
}
