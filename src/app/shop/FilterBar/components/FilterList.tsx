import React from 'react';
import { uniqueId } from 'lodash';


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
                        <li key={uniqueId()} className='w-1/2 lg:w-full'>
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
