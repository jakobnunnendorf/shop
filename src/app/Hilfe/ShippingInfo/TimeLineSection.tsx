import React from 'react';

export default function TimeLineSection({ label }: { label: string }) {
    return (
        <div className='grid flex-grow w-full grid-rows-2'>
            <div></div>
            <div className='relative flex flex-col items-end '>
                <div className='w-full h-0 border border-sandy-beige-10 '></div>
                <p className='absolute py-2 text-sm text-center whitespace-pre-line translate-x-1/2 w-fit'>
                    {label}
                </p>
            </div>
        </div>
    );
}
