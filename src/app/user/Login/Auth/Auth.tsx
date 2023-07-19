import React from 'react';
import Form from './Form';
import LeftHeader from './LeftHeader';

export default function Auth({
    hasAccount,
    setLoading,
    toggleHasAccount,
}: {
    hasAccount: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    toggleHasAccount: () => void;
}) {
    const auth = (
        <div className='grid grid-rows-6 justify-items-center py-4 lg:order-1 lg:py-8'>
            <LeftHeader hasAccount={hasAccount} />
            <Form
                hasAccount={hasAccount}
                setLoading={setLoading}
                toggleHasAccount={toggleHasAccount}
            />
        </div>
    );
    return auth;
}
