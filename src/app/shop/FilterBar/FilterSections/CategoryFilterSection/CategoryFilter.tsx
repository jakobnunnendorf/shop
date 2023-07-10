import React from 'react';
import { FiCheck, FiSquare } from 'react-icons/fi';
import { categoryWithTranslation } from './CategoryFilterSection';

export default function CategoryFilter({
    category,
    active,
}: {
    category: categoryWithTranslation;
    active: boolean;
}) {
    return (
        <div className='flex w-36 items-center justify-between lg:w-full'>
            <h4 className='text-sm'>{category[1]}</h4>
            {active ? <FiCheck /> : <FiSquare />}
        </div>
    );
}
