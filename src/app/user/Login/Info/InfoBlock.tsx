import React from 'react';
import { registrationInfo } from '@globalState/UserContext';

export default function InfoBlock({
    hasAccount,
}: // registrationInfo,
{
    hasAccount: boolean;
    registrationInfo: registrationInfo;
}) {
    const infoBlock = (
        <div className={`row-span-3 w-4/5 lg:row-span-5`}>
            <div className='font-bold text-center text-white'>
                {hasAccount ? `` : 'Registrieren'} und zurücklehnen. <br />
                Wir haben alles, was dein Handy braucht.
            </div>
            {/* 
            <div className='hidden row-span-4 py-8 lg:flex lg:flex-col'>
                <h3 className='mb-2'>Der Server bedankt sich:</h3>
                <p>{'{'}</p>
                <p className=''>
                    &quot;Vorname&quot;:{}
                    {JSON.stringify(registrationInfo.firstName)}
                </p>
                <p className=''>
                    &quot;Nachname&quot;:{' '}
                    {JSON.stringify(registrationInfo.lastName)}
                </p>
                <p className=''>
                    &quot;Email&quot;: {JSON.stringify(registrationInfo.email)}
                </p>
                <p className=''>
                    &quot;Telefon&quot;:{' '}
                    {JSON.stringify(registrationInfo.phone)}
                </p>
                <p>{'}'}</p>
            </div> */}
        </div>
    );
    return infoBlock;
}
