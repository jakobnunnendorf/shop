import React, { useContext } from 'react';
import { UserContext, UserContextType } from '@globalState/UserContext';

export default function LoginHeading() {
    const { registrationInfo } = useContext(UserContext) as UserContextType;
    const loginHeading = (
        <h1 className='mb-8 text-2xl text-center '>
            <span className='text-3xl'>
                Hallo{' '}
                {registrationInfo.firstName.length > 0
                    ? registrationInfo.firstName
                    : '__________'}
            </span>
            ,<br></br> willkommen bei Phone2Door!
        </h1>
    );
    return loginHeading;
}
