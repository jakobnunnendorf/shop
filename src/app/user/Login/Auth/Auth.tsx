import React from 'react';
import Form from './Form';
import LeftHeader from './LeftHeader';

export default function Auth({
    hasAccount,
    toggleHasAccount,
}: {
    hasAccount: boolean;
    toggleHasAccount: () => void;
}) {
    const auth = (
        <div className='grid grid-rows-6 py-4 justify-items-center lg:order-1 lg:py-8'>
            <LeftHeader hasAccount={hasAccount} />
            <Form hasAccount={hasAccount} toggleHasAccount={toggleHasAccount} />
        </div>
    );
    return auth;
}
