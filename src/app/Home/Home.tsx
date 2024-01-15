import Image from 'next/image';
import React from 'react';

import BgBanner from './BgBanner';
import LogoGlass from './LogoGlass';
import ImageComponent from '@components/ImageComponent';

export default function Home() {
    const imageLinks = [
        '/hero_blue_cherry.png',
        '/hero_sea_shore.png',
        '/hero_extended_yellow.png',
    ];
    return (
        <div className='relative h-[80vh] lg:h-[500px]'>
            <LogoGlass />
            <BgBanner
                images={imageLinks.map((src, index) => (
                    <ImageComponent
                        key={index}
                        src={src}
                        size='full'
                        priority={index === 0}
                        cover
                    />
                ))}
            />
            <div className='absolute bottom-0 z-30 w-full h-1 sliding-gradient'></div>
        </div>
    );
}
