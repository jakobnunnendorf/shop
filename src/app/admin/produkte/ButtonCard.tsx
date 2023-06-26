import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function ButtonCard() {
    const buttonCard = (
        <button className='flex flex-col items-center justify-center h-full px-4 py-4 rounded-3xl lg:py-8'>
            <FiPlus
                className='w-16 h-16 aspect-square lg:h-36 lg:w-36'
                fill='true'
            />
            <h3 className='text-xs lg:text-xl'>Produkt Hinzufügen</h3>
        </button>
    );
    return buttonCard;
}
