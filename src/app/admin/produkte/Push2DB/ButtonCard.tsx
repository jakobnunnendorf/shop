import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function ButtonCard({setActive}: {setActive: React.Dispatch<React.SetStateAction<boolean>>}) {
    const buttonCard = (
        <button
            onClick={() => setActive(true)}
            className='flex aspect-[4/7] w-full flex-col items-center justify-center rounded-3xl px-4 py-4 lg:aspect-[2/3] lg:h-full lg:py-8'>
            <FiPlus
                className='aspect-square h-16 w-16 lg:h-36 lg:w-36'
                fill='true'
            />
            <h3 className='text-xs lg:text-xl'>Produkt Hinzufügen</h3>
        </button>
    );
    return buttonCard;
}
