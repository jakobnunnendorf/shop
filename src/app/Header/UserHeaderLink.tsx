'use client';

import Link from 'next/link';
import React, { useContext } from 'react';
import { FiUser } from 'react-icons/fi';
import { SessionContext } from '@globalState/SessionContext';

export default function UserHeaderLink() {
    const { value: currentSession } = useContext(SessionContext);
    return (
        <Link
            href='/user'
            className='flex h-full flex-col items-center justify-center overflow-visible '
        >
            <FiUser size={32} className='text-coastal-blue-10' />
            {!currentSession && (
                <p className='whitespace-nowrap text-center text-xs text-coastal-blue-10 '>
                    sign in
                </p>
            )}
        </Link>
    );
}
