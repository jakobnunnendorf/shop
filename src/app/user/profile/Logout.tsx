'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function Logout() {
    const router = useRouter();
    const HandleLogout = async () => {
        const supabase = createClientComponentClient();
        await supabase.auth.signOut();
        router.refresh();
    };
    const logoutButton = (
        <button
            onClick={HandleLogout}
            className='flex items-center justify-center row-start-1 px-4 py-2 font-bold border md:w-36 rounded-xl border-coastal-blue-10 text-coastal-blue-10'
        >
            ausloggen
        </button>
    );
    return logoutButton;
}
