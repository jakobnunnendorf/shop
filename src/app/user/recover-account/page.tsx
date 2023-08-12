'use client';

import React, { useContext, useState } from 'react';
import LoadingSpinner from '@components/LoadingSpinner';
import Auth from './Auth/Auth';
import Info from './Info/Info';
import Heading from './PageHeader';

export default function Recover_account() {
    const [loading, setLoading] = useState<boolean>(false);

    const main_content_wrapper = (
        <div className='grid min-h-[80vh] w-10/12 overflow-hidden rounded-3xl bg-slate-100 shadow-2xl lg:h-2/3 lg:min-h-0 lg:w-2/3 lg:grid-cols-2'>
            <Info />
            <Auth />
        </div>
    );

    const page_container = (
        <section className='flex min-h-screen w-full flex-col items-center justify-center lg:h-fit lg:min-h-0 lg:pt-8'>
            {loading && <LoadingSpinner />}
            {!loading && <Heading />}
            {!loading && main_content_wrapper}
        </section>
    );

    return page_container;
}
