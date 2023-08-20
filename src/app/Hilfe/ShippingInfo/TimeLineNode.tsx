import React from 'react';

export default function TimeLineNode({
    label,
    stepNumber,
}: {
    label: string;
    stepNumber: number;
}) {
    return (
        <div className='relative'>
            <div className='grid w-8 h-8 mx-auto border-2 rounded-full lg:w-8 lg:h-8 border-sandy-beige-10 place-content-center'>
                {stepNumber}
            </div>
            <p className='absolute py-2 text-center top-8'>{label}</p>
        </div>
    );
}
