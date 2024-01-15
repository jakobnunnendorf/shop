'use client';

import React, { useContext, useState } from 'react';
import Auth from './Auth/Auth';
import Info from './Info/Info';
import LoginHeading from './LoginHeading';

export default function Login() {
    const [hasAccount, setHasAccount] = useState<boolean>(false);
    const toggleHasAccount = () => {
        setHasAccount(!hasAccount);
    };
    const page_container = (
        <section className='flex flex-col items-center justify-center w-full min-h-screen lg:h-fit lg:min-h-0 lg:pt-8'>
            <LoginHeading />
            <div className='grid min-h-[80vh] w-10/12 overflow-hidden rounded-3xl bg-slate-100 shadow-2xl lg:h-2/3 lg:min-h-0 lg:w-2/3 lg:grid-cols-2'>
                <Info hasAccount={hasAccount} />
                <Auth
                    hasAccount={hasAccount}
                    toggleHasAccount={toggleHasAccount}
                />
            </div>
        </section>
    );

    return page_container;
}
