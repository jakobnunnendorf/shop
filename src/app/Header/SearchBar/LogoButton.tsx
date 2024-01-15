import ImageComponent from '@components/ImageComponent';
import Link from 'next/link';
import React from 'react';

export default function LogoButton() {
    const logoButton = (
        <div className='w-20 h-full px-3 border-r border-coastal-blue-3 lg:w-16'>
            <div className='relative h-full aspect-square border-coastal-blue-3'>
                <ImageComponent src='/p2d_logo.png' size={'full'} href='/' />
            </div>
        </div>
    );
    return logoButton;
}
