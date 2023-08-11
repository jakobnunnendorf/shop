import React from 'react';

export default function FilterList({
    filters,
}: {
    filters: React.JSX.Element[] | React.JSX.Element;
}) {
    const filterList = (
        <ul className='grid w-full grid-cols-3 lg:flex lg:flex-col'>
            {Array.isArray(filters) ? (
                filters.map((filter, index) => {
                    return <li key={index}>{filter}</li>;
                })
            ) : (
                <li>{filters}</li>
            )}
        </ul>
    );
    return filterList;
}
