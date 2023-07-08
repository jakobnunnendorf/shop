import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { FiUser } from 'react-icons/fi';

export default async function UserHeaderLink() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();
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
