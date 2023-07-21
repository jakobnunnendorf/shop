import React from 'react';
import ExpandedPicture from './ExpandedPicture';

export default function Expanded() {
    const expanded = (
        <div className='grid w-full grid-rows-2 rborder h-4/5 lg:h-full lg:grid-cols-5 lg:grid-rows-none'>
            <ExpandedPicture />
            <div className='bborder lg:col-span-2'>ProductInfo</div>
        </div>
    );

    return expanded;
}
