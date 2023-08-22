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
            className='flex flex-col items-center justify-center h-full overflow-visible '
        >
            <FiUser size={32} className='text-coastal-blue-10' />
            {!currentSession && (
                <p className='text-xs text-center whitespace-nowrap text-coastal-blue-10 '>
                    Login
                </p>
            )}
        </Link>
    );
}
