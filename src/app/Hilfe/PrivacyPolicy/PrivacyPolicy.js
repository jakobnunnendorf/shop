import Link from 'next/link';
import React from 'react';
import './PrivacyPolicy.css';
import Privacy from '../datenschutz/Privacy';

export default function PrivacyPolicy() {
    return (
        <div className='w-screen py-16'>
            <h2 className='py-16 text-center lg:text-3xl'>
                Datenschutz
                <Link href='/Hilfe/datenschutz'>
                    <span className='text-lg font-bold text-blue-800 underline'>
                        &nbsp;(Mehr erfahren)
                    </span>
                </Link>
            </h2>
            <div className='w-full overflow-y-auto h-96'>
                <Privacy />
            </div>
        </div>
    );
}
