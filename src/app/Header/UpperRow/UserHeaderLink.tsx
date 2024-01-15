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
    const { data } = (await supabase
        .from('profiles')
        .select('firstName')
        .eq('profileId', currentSession?.user.id)
        .single()) as SbFetchResponseObject<{ firstName: string }>;
    const { firstName } = data || { firstName: '' };
    return (
        <Link
            href='/user'
            className='flex flex-col items-center justify-center h-full overflow-visible '
        >
            <FiUser size={32} className='text-coastal-blue-10' />
                <p className='text-xs text-center whitespace-nowrap text-coastal-blue-10 '>
                    {currentSession ? firstName : 'Login'}
                </p>
        </Link>
    );
}
