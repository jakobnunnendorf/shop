import Image from 'next/image';
import React from 'react';

export default function BgBanner({ image }: { image: string }) {
    return (
        <figure className='relative h-full w-full'>
            <Image
                src={image}
                alt='sliding-ad'
                fill={true}
                className='object-cover'
            />
        </figure>
    );
}
