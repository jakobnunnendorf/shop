import React from 'react';
import CollapsedPicture from './CollapsedPicture';

export default function Collapsed() {
    const collapsed = (
        <div className='grid w-full h-full grid-rows-2'>
            <CollapsedPicture />
            <article className='bborder'></article>
        </div>
    );

    return collapsed;
}
