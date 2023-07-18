import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function ButtonCard() {
    const buttonCard = (
        <button className='flex h-full w-full flex-col items-center justify-center rounded-3xl px-4  py-4 lg:py-8'>
            <FiPlus
                className='aspect-square h-16 w-16 lg:h-36 lg:w-36'
                fill='true'
            />
            <h3 className='text-xs lg:text-xl'>Produkt Hinzufügen</h3>
        </button>
    );
    return buttonCard;
}
