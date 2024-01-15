import Image from 'next/image';
import React from 'react';
import ImageComponent from './ImageComponent';

export default function LoadingSpinner() {
    return (
        <div className=' flex h-[75vh] w-full flex-col items-center justify-center'>
            <ImageComponent size={48} src='/loading2.gif' />
            <h3 className='text-2xl font-bold text-center text-sandy-beige-9'>
                Alles, <br />
                was dein Handy braucht
            </h3>
            <h2 className='text-3xl font-bold text-center text-coastal-blue-9'>
                Phone 2 Door
            </h2>
        </div>
    );
}
