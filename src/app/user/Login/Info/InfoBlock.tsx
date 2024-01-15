import React from 'react';

export default function InfoBlock({
    hasAccount,
}: 
{
    hasAccount: boolean;
}) {
    const infoBlock = (
        <div className={`row-span-3 w-4/5 lg:row-span-5`}>
            <div className='font-bold text-center text-white'>
                {hasAccount ? `` : 'Registrieren'} und zurücklehnen. <br />
                Wir haben alles, was dein Handy braucht.
            </div>
        </div>
    );
    return infoBlock;
}
