import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session || session.user.role !== 'admin_p2d') {
        redirect('/');
    }

    const AdminDashboardContent = (
        <div className='flex flex-col items-center w-full space-y-8'>
            <h1 className='w-full text-4xl text-center'>Admin Dashboard</h1>
            <div className='grid grid-cols-2 grid-rows-2 gap-8 w-fit'>
                <Link
                    href='/admin/kunden'
                    className='flex items-center justify-center h-48 border-2 w-80 rounded-3xl'
                >
                    Kunden
                </Link>
                <Link
                    href='admin/produkte'
                    className='flex items-center justify-center h-48 border-2 w-80 rounded-3xl'
                >
                    Produkte
                </Link>
                <Link
                    href='/admin/bestellungen'
                    className='flex items-center justify-center h-48 border-2 w-80 rounded-3xl'
                >
                    Bestellungen
                </Link>
                <Link
                    href='/admin/einstellungen'
                    className='flex items-center justify-center h-48 border-2 w-80 rounded-3xl'
                >
                    Einstellungen
                </Link>
            </div>
        </div>
    );
    return AdminDashboardContent;
}
