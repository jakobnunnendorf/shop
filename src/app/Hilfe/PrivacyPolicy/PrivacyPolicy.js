import Link from 'next/link';
import React from 'react';
import './PrivacyPolicy.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function PrivacyPolicy() {
    return (
        <div className='w-full'>
            <h2 className='py-16 text-3xl text-center'>
                Datenschutz
                <Link href='https://www.phone2door.com/Hilfe/datenschutz'>
                    <span className='text-lg font-bold text-blue-800 underlined'>
                        &nbsp;(Mehr erfahren)
                    </span>
                </Link>
            </h2>
            <iframe
                title='ds'
                src='https://www.phone2door.com/Hilfe/datenschutz'
                width='100%'
                height='400'
            ></iframe>
        </div>
    );
}
