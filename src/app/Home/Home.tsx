import Image from 'next/image';
import React from 'react';

import BgBanner from './BgBanner';
import LogoGlass from './LogoGlass';

export default function Home() {
    const imageLinks = [
        '/hero_blue_cherry.png',
        '/hero_sea_shore.png',
        '/hero_extended_yellow.png',
    ];
    const images = imageLinks.map((imageLink) => (
        <Image
            priority
            src={imageLink}
            alt='Handyhüllebanner'
            fill={true}
            className='object-cover'
        />
    ));
    return (
        <div className='relative h-[80vh] lg:h-[500px]'>
            <LogoGlass />
            <BgBanner images={images} />
            <div className='absolute bottom-0 z-30 w-full h-1 sliding-gradient'></div>
        </div>
    );
}
