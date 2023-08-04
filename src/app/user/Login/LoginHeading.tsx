import React, { useContext } from 'react';
import { UserContext, UserContextType } from '@globalState/UserContext';

export default function LoginHeading() {
    const { registrationInfo } = useContext(UserContext) as UserContextType;
    const loginHeading = (
        <h1 className='mb-8 text-center text-2xl '>
            <span className='tobottom-gradient-text bg-clip-text text-4xl font-extrabold text-transparent'>
                Hallo
            </span>
            <br></br>
            <span className='tobottom-gradient-text bg-clip-text text-4xl font-extrabold text-transparent'>
                Willkommen bei Phone2Door!
            </span>
        </h1>
    );
    return loginHeading;
}
