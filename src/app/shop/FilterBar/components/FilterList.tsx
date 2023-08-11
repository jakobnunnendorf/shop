import React from 'react';

export default function FilterList({
    filters,
}: {
    filters: React.JSX.Element[] | React.JSX.Element;
}) {
    const filterList = (
        <ul className='flex flex-col w-full px-8 '>
            {Array.isArray(filters) ? (
                filters.map((filter, index) => {
                    return (
                        <li className='w-1/2 lg:w-full' key={index}>
                            {filter}
                        </li>
                    );
                })
            ) : (
                <li>{filters}</li>
            )}
        </ul>
    );
    return filterList;
}
