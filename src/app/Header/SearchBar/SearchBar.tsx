import React from 'react';
import LogoButton from './LogoButton';
import PreviewSearchResults from './PreviewSearchResults';
import SearchInput from './SearchInput';

export default function SearchBar() {
    return (
        <div className='flex w-full h-8 overflow-hidden border rounded-3xl border-coastal-blue-2 bg-sandy-beige-5 lg:col-span-6 lg:h-full lg:w-full'>
            <LogoButton />
            <SearchInput />
            {/* <SearchResults />{need some styling} */}
            <PreviewSearchResults />
        </div>
    );
}
