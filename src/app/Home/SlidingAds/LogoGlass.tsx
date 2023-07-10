import Image from 'next/image';
import React from 'react';

export default function LogoGlass() {
    const styles = {
        giant_heading: {
            fontSize: 'clamp(2rem, 8vw, 4rem)',
        },
    };
    return (
        <div className='absolute bottom-0 z-10 flex h-1/3 w-full flex-col items-center justify-center bg-sandy-beige-4 py-4 backdrop-blur-3xl lg:h-full lg:w-1/2'>
            <h1
                className='text-center text-5xl font-extrabold text-coastal-blue-10'
                style={styles.giant_heading}
            >
                Willkommen bei
            </h1>
            <figure className='relative h-36 w-full'>
                <Image
                    src={'/p2d_logo3.png'}
                    fill={true}
                    alt='Phone 2 Door Logo'
                    objectFit='contain'
                />
            </figure>
        </div>
    );
}
