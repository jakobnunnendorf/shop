import Image from 'next/image';
import React from 'react';

export default function LoadingSpinner() {
    return (
        <div className=' flex h-[75vh] w-full flex-col items-center justify-center'>
            <Image src='/loading.gif' alt='' />
            <h2 className='text-3xl font-bold text-coastal-blue-9'>
                Einen Moment...
            </h2>
        </div>
    );
}
