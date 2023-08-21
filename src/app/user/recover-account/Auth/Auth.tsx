import React from 'react';
import Form from './Form';
import LeftHeader from './LeftHeader';

export default function Auth() {
    const auth = (
        <div className='grid grid-rows-6 justify-items-center py-4 lg:order-1 lg:py-8'>
            <LeftHeader />
            <Form />
        </div>
    );
    return auth;
}
