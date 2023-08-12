import React from 'react';
import LogoButton from './LogoButton';
import PreviewSearchResults from './PreviewSearchResults';
import SearchInput from './SearchInput';

export default function SearchBar() {
    return (
        <div className='flex w-2/3 h-8 col-span-6 overflow-hidden border rounded-3xl border-coastal-blue-3 bg-sandy-beige-5 lg:h-full lg:w-full'>
            <LogoButton />
            <SearchInput />
            {/* <SearchResults />{need some styling} */}
            <PreviewSearchResults />
        </div>
    );
}
