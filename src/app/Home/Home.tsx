'use client';

import React, { useEffect, useState } from 'react';

import './Home.css';
import BgBanner from './SlidingAds/BgBanner';
import LogoGlass from './SlidingAds/LogoGlass';

export default function Home() {
    const imageLinks = [
        '/hero_blue_cherry.png',
        '/hero_sea_shore.png',
        '/hero_extended_yellow.png',
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                currentImageIndex === imageLinks.length - 1
                    ? 0
                    : currentImageIndex + 1
            );
        }, 6000);
        return () => clearInterval(interval);
    }, [currentImageIndex, imageLinks.length]);

    return (
        <div className='relative h-[80vh] lg:h-[500px]'>
            <LogoGlass />
            <BgBanner image={imageLinks[currentImageIndex]} />
            <div className='sliding-gradient absolute bottom-0 z-30 h-1 w-full'></div>
        </div>
    );
}

