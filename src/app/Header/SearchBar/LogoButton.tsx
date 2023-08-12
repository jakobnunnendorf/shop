import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function LogoButton() {
    const logoButton = (
        <div className='relative w-24 h-8 '>
            <Link href='/' className=''>
                <Image
                    src='/p2d_logo.png'
                    alt='Phone2Door Handyzubehör Online shop Logo'
                    fill={true}
                    className='object-contain'
                />
            </Link>
        </div>
    );
    return logoButton;
}
