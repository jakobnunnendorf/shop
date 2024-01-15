import ImageComponent from '@components/ImageComponent';
import Image from 'next/image';
import React from 'react';

export default function LogoGlass() {
    const styles = {
        giant_heading: {
            fontSize: 'clamp(2rem, 8vw, 4rem)',
        },
    };
    return (
        <div className='absolute bottom-0 z-10 flex flex-col items-center justify-center w-full py-4 h-1/3 bg-sandy-beige-4 backdrop-blur-3xl lg:h-full lg:w-1/2'>
            <h1
                className='text-5xl font-extrabold text-center text-coastal-blue-10'
                style={styles.giant_heading}
            >
                Willkommen bei
            </h1>
            <ImageComponent
                src='/p2d_logo3.png'
                size={36}
                width='full'
                priority
                name='glass_logo'
            />
        </div>
    );
}
