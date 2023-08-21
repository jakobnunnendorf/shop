'use client';
import React from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import LoadingSpinner from '@components/LoadingSpinner';
import { useRouter } from 'next/navigation';
async function PasswordReset() {
    const router = useRouter();
    const [loading, setLoading] = React.useState(true);
    const supabase = createClientComponentClient();
    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();
     if (currentSession !== null) {
        await router.push('/user');
        router.refresh();
     }
   
    

    return <div className='w-full h-full'>{loading && <LoadingSpinner />}</div>;

}
export default PasswordReset;
