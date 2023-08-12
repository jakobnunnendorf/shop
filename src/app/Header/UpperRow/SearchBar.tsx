import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PreviewSearchResults from './PreviewSearchResults';
import SearchInput from './SearchInput';

export default function SearchBar() {
    return (
        <div className='flex w-2/3 h-8 col-span-6 overflow-hidden border rounded-3xl border-coastal-blue-3 bg-sandy-beige-5 lg:h-full lg:w-full'>
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
            <SearchInput />
            {/* <SearchResults />{need some styling} */}
            <PreviewSearchResults />
        </div>
    );
}
