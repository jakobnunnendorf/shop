import React from 'react';
import CheckBox from './CheckBox';
export default function Filter({
    filterTitle,
    filter,
}: {
    filterTitle: string;
    filter: string;
}) {
    //Add a second foo parameter.
    const filterElement = (
        <article className='flex justify-between w-full '>
            <h3 className='text-sm'>{filterTitle}</h3>
            <CheckBox filter={filter} />
        </article>
    );
    return filterElement;
}
