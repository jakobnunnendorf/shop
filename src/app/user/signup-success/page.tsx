
import React from 'react';
import { FiMail, FiMousePointer, FiUserCheck } from 'react-icons/fi';
import { uniqueId } from 'lodash';

export default function SignUpSuccessPage() {
    return (
        <div className='flex flex-col items-center justify-start w-full h-full py-24 space-y-12 '>
            <h2 className='text-3xl text-center'>
                Dein Account ist fast fertig!
            </h2>
            <div className=''>
                <h3 className='mb-4 text-2xl font-bold text-center '>
                    Jetzt nur noch:{' '}
                </h3>
                <ul className='relative space-y-4 text-xl'>
                    <li key={uniqueId()} className='flex space-x-8 w-fit'>
                        <div className='flex items-center justify-center w-8 h-8 p-2 border rounded-full'>
                            <FiMail />
                        </div>
                        <div>Email öffnen</div>
                    </li>
                    <li key={uniqueId()} className='flex space-x-8 w-fit'>
                        <div className='flex items-center justify-center w-8 h-8 p-2 border rounded-full'>
                            <FiMousePointer />
                        </div>
                        <div>Bestätigungslink clicken</div>
                    </li>
                    <li key={uniqueId()} className='flex space-x-8 w-fit'>
                        <div className='flex items-center justify-center w-8 h-8 p-2 border rounded-full'>
                            <FiUserCheck />
                        </div>
                        <div>Einloggen</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
