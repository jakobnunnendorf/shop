import React from 'react';
import { registrationInfo } from '@globalState/UserContext';
import InfoBlock from './InfoBlock';
import RightHeader from './RightHeader';

export default function Info({
    hasAccount,
}: {
    hasAccount: boolean;
}) {
    const info = (
        <div className='grid grid-rows-3 py-8 bg-green-600 justify-items-center lg:order-2 lg:grid-rows-6'>
            <RightHeader hasAccount={hasAccount} />
            <InfoBlock
                hasAccount={hasAccount}
            />
        </div>
    );
    return info;
}
