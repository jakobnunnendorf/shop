import React from 'react';

export default function TimeLineSection({ label }: { label: string }) {
    return (
        <div className='grid w-full h-full grid-cols-2 lg:grid-cols-none lg:grid-rows-2 lg:h-fit lg:w-full '>
            <div className='w-full border-r lg:border-none border-sandy-beige-10'></div>
            <div className='relative flex flex-col items-end border-l border-sandy-beige-10'>
                <div className='w-0 h-full lg:border lg:w-full lg:h-0 border-sandy-beige-10 '></div>
                <p className='absolute px-4 text-xs text-center whitespace-pre-line -translate-x-4 lg:translate-x-1/2 lg:w-20 lg:py-2 lg:text-sm '>
                    {label}
                </p>
            </div>
        </div>
    );
}
