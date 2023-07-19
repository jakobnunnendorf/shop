import React from 'react';

export default function RightHeader({ hasAccount }: { hasAccount: boolean }) {
    const RightHeader = (
        <h2 className='row-span-1 text-center text-2xl font-bold text-white '>
            {hasAccount ? 'Einfach anmelden' : 'Noch keinen Account?'}
        </h2>
    );
    return RightHeader;
}
