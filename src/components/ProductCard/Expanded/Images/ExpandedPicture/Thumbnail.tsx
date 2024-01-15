'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function Thumbnail({
    imageComponent,
    activeColorKey,
    imageIndex,
    isSelected,
}: {
    imageComponent: React.JSX.Element;
    activeColorKey: ColorKey;
    imageIndex: number;
    isSelected: boolean;
}) {
    const router = useRouter();
    const pathName = usePathname();
    const linkToImage = () => {
        router.push(
            `${process.env.NEXT_PUBLIC_URL}${pathName}?colorKey=${activeColorKey}&activeIndex=${imageIndex}`
        );
        router.refresh();
    };
    const thumbnail = (
        <button onClick={linkToImage} className='w-full h-full'>
            <li
                className={`overflow-hidden rounded-lg bg-gray-400 ${
                    isSelected
                        ? 'outline outline-2 outline-seafoam-green-7'
                        : ''
                }`}
            >
                <figure className='relative h-full aspect-square'>
                    {imageComponent}
                </figure>
            </li>
        </button>
    );
    return thumbnail;
}
