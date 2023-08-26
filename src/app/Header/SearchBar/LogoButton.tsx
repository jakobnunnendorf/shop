import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function LogoButton() {
    const logoButton = (
        <div className='w-20 h-full px-3 border-r border-coastal-blue-3 lg:w-16'>
            <div className='relative h-full aspect-square border-coastal-blue-3'>
                <Link href='/' className=''>
                    <Image
                        src='/p2d_logo.png'
                        alt='Phone2Door Handyzubehör Online shop Logo'
                        fill={true}
                        className='object-contain'
                    />
                </Link>
            </div>
        </div>
    );
    return logoButton;
}
