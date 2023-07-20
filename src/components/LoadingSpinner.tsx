import Image from 'next/image';
import React from 'react';

export default function LoadingSpinner() {
    return (
        <div className=' flex h-[75vh] w-full flex-col items-center justify-center'>
            <figure className='relative h-48 w-48'>
                <Image src='/loading2.gif' alt='' fill />
            </figure>
            <h3 className='text-center text-2xl font-bold text-sandy-beige-9'>
                Alles, <br />
                was dein Handy braucht
            </h3>
            <h2 className='text-center text-3xl font-bold text-coastal-blue-9'>
                Phone 2 Door
            </h2>
        </div>
    );
}
