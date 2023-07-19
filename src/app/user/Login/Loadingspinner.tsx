import React from 'react';

export default function Loadingspinner() {
    const loadingSpinner = (
        <div className='relative flex h-[75vh] w-full flex-col items-center justify-center'>
            {/* eslint-disable-next-line @next/next/no-img-element*/ }
            <img src='/loading.gif' alt=''   />
            <h2 className='text-3xl font-bold text-coastal-blue-9'>
                Einen Moment...
            </h2>
        </div>
    );
    return loadingSpinner;
}
