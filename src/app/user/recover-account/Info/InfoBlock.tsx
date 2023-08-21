import React from 'react';
import { registrationInfo } from '@globalState/UserContext';

export default function InfoBlock() {
    const infoBlock = (
        <div className={`row-span-3 w-4/5 lg:row-span-5`}>
            <div className='text-center font-bold text-white'>
                <br />
                Wir haben alles, was dein Handy braucht.
            </div>
        </div>
    );
    return infoBlock;
}
