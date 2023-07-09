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
        <div className='flex w-full items-center justify-between'>
            <div>{category[1]}</div>
            {active ? <FiCheck /> : <FiSquare />}
        </div>
    );
}
