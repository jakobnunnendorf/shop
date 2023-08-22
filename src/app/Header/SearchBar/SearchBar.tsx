'use client';
import React, { useEffect, useRef, useState } from 'react';
import LogoButton from './LogoButton';
import PreviewSearchResults from './PreviewSearchResults';
import SearchInput from './SearchInput';

export default function SearchBar() {
    const [isPreviewVisible, setIsPreviewVisible] = useState(true); 
    const searchBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                searchBarRef.current &&
                !searchBarRef.current.contains(event.target as Node)
            ) {
                setIsPreviewVisible(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={searchBarRef}
            className='flex w-full h-8 overflow-hidden rounded-3xl border-coastal-blue-2 bg-sandy-beige-5 lg:col-span-6 lg:h-full lg:w-full'
        >
            <LogoButton />
            <SearchInput />
            {isPreviewVisible && <PreviewSearchResults />}
        </div>
    );
}
