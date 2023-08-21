import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function ButtonCard() {
    const buttonCard = (
        <div className='shadow-3xl relative aspect-[4/7] w-full max-w-xs overflow-hidden rounded-3xl border bg-[hsla(0,100%,100%,0.9)] backdrop-blur-3xl lg:aspect-[2/3]'>
            <div className='flex aspect-[4/7] w-full flex-col items-center justify-center rounded-3xl px-4 py-4 lg:aspect-[2/3] lg:h-full lg:py-8'>
                <FiPlus
                    className='aspect-square h-16 w-16 lg:h-36 lg:w-36'
                    fill='true'
                />
                <h3 className='text-xs lg:text-xl'>Produkt Hinzufügen</h3>
            </div>
        </div>
    );
    return buttonCard;
}
