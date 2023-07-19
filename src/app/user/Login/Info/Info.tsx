import React from 'react';
import { registrationInfo } from '@globalState/UserContext';
import InfoBlock from './InfoBlock';
import RightHeader from './RightHeader';

export default function Info({
    hasAccount,
    registrationInfo,
}: {
    hasAccount: boolean;
    registrationInfo: registrationInfo;
}) {
    const info = (
        <div className='grid grid-rows-3 justify-items-center bg-green-600 py-8 lg:order-2 lg:grid-rows-6'>
            <RightHeader hasAccount={hasAccount} />
            <InfoBlock
                hasAccount={hasAccount}
                registrationInfo={registrationInfo}
            />
        </div>
    );
    return info;
}
