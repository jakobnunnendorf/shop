import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();
    const { data: userRole } = await supabase
        .from('profiles')
        .select('role')
        .eq('profile_id', session?.user.id)
        .single();

    if (!session || userRole?.role !== 'admin') {
        redirect('/');
    }

    const AdminDashboardContent = (
        <div className='flex flex-col items-center w-full space-y-8'>
            <h1 className='w-full text-4xl text-center'>Admin Dashboard</h1>
            <div className='flex flex-wrap justify-center grid-cols-2 grid-rows-3 gap-4 lg:w-fit lg:gap-8'>
                <Link
                    href='/admin/kunden'
                    className='flex items-center justify-center border-2 rounded-3xl lg:h-48 lg:w-80'
                >
                    Kunden
                </Link>
                <Link
                    href='admin/produkte'
                    className='flex items-center justify-center border-2 rounded-3xl lg:h-48 lg:w-80'
                >
                    Produkte
                </Link>
                <Link
                    href='admin/benutzer'
                    className='flex items-center justify-center col-start-1 col-end-3 row-start-2 row-end-3 border-2 rounded-3xl lg:h-48 lg:w-80'
                >
                    Benutzer
                </Link>
                <Link
                    href='/admin/bestellungen'
                    className='flex items-center justify-center border-2 rounded-3xl lg:h-48 lg:w-80'
                >
                    Bestellungen
                </Link>
                <Link
                    href='/admin/einstellungen'
                    className='flex items-center justify-center border-2 rounded-3xl lg:h-48 lg:w-80'
                >
                    Einstellungen
                </Link>
            </div>
        </div>
    );
    return AdminDashboardContent;
}
