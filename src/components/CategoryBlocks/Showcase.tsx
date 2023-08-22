import Image from 'next/image';
import React from 'react';

export default function Showcase() {
    return (
        <section className='relative flex flex-col items-center w-full h-full '>
            <h2 className='absolute z-20 mt-8 text-5xl font-bold text-center text-coastal-blue-10 lg:mt-36'>
                Alles was dein handy braucht.
            </h2>
            <figure className='relative h-96 w-full lg:h-[70vh]'>
                <Image
                    src='/three_phones_v2.png'
                    fill={true}
                    alt='hero'
                    className='object-cover'
                />
            </figure>
        </section>
    );
}
