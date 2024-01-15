import Link from 'next/link';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

export default function BackButton() {
    return (
        <Link href='/admin/produkte'>
            <div className='flex items-center p-2 text-xl gradient text-coastal-blue-7  w-fit h-fit'>
                <FiArrowLeft />
                <p className='text-lg lg:text-xl'>Zurück</p>
            </div>
        </Link>
    );
}
