import React from 'react';

export default function HelpCenterBanner() {
    return (
        <div
            style={{
                backgroundImage: "url('/three_phones_v2_cropped.png')",
            }}
            className='relative grid w-full bg-center bg-no-repeat bg-cover place-content-center h-fit'
        >
            <h2 className='z-10 py-16 text-5xl font-bold text-center lg:py-32 gradient-text lg:text-9xl text-coastal-blue-10 '>
                Hilfe Center
            </h2>
        </div>
    );
}
