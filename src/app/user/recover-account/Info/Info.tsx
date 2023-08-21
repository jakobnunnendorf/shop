import React from 'react';
import InfoBlock from './InfoBlock';
import RightHeader from './RightHeader';

export default function Info() {
    const info = (
        <div className='grid grid-rows-3 justify-items-center bg-green-600 py-8 lg:order-2 lg:grid-rows-6'>
            <RightHeader />
            <InfoBlock />
        </div>
    );
    return info;
}
