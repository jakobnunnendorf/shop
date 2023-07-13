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
        <div className='flex items-center justify-between w-36 lg:w-full'>
            <h4 className='text-sm'>{category[1]}</h4>
            {active ? <FiCheck /> : <FiSquare />}
        </div>
    );
}
