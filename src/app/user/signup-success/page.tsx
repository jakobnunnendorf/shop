'use client';

import React, { useContext } from 'react';
import { FiMail, FiMousePointer, FiUserCheck } from 'react-icons/fi';
import { UserContext, UserContextType } from '@globalState/UserContext';

export default function SignUpSuccessPage() {
    const { registrationInfo } = useContext(UserContext) as UserContextType;
    return (
        <div className='flex h-full w-full flex-col items-center justify-start space-y-12 py-24 '>
            <h2 className='text-center text-3xl'>
                Hallo{' '}
                <span className='font-bold text-coastal-blue-10'>
                    {registrationInfo?.firstName}
                </span>
                , <br />
                Dein Account ist fast fertig!
            </h2>
            <div className=''>
                <h3 className='mb-4 text-center text-2xl font-bold '>
                    Jetzt nur noch:{' '}
                </h3>
                <ul className='relative space-y-4 text-xl'>
                    <li className='flex w-fit space-x-8'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full border p-2'>
                            <FiMail />
                        </div>
                        <div>Email öffnen</div>
                    </li>
                    <li className='flex w-fit space-x-8'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full border p-2'>
                            <FiMousePointer />
                        </div>
                        <div>Bestätigungslink clicken</div>
                    </li>
                    <li className='flex w-fit space-x-8'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full border p-2'>
                            <FiUserCheck />
                        </div>
                        <div>Einloggen</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
