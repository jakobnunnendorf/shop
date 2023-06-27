'use client';

import React, { useEffect, useState } from 'react';
import SlidingAds from './SlidingAds/SlidingAds';
import './Home.css';

export default function Home() {
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(!fadeIn);
        }, 6000); // set the interval duration in milliseconds
        return () => clearInterval(interval);
    }, [fadeIn]);

    const imageLinks = [
        'https://hips.hearstapps.com/hmg-prod/images/ghi-10bestphonecases-1663335912.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
        'https://hips.hearstapps.com/hmg-prod/images/eco-friendly-phone-cases-1674574716.jpg?crop=0.958xw:0.795xh;0.0128xw,0.106xh&resize=1200:*',
        'https://pyxis.nymag.com/v1/imgs/1f2/e75/76adebbcdab0e71b7a025694941bc51cce-iphone-cases.2x.rsocial.w600.jpg',
        'https://hips.hearstapps.com/hmg-prod/images/eco-friendly-phone-cases-1674574716.jpg?crop=0.958xw:0.795xh;0.0128xw,0.106xh&resize=1200:*',
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='imageSlides'>
                <SlidingAds images={imageLinks} />
            </div>
        </div>
    );
}
