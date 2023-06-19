import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
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
        <div className='flex w-full flex-col items-center space-y-8'>
            <h1 className='w-full text-center text-4xl'>Admin Dashboard</h1>
            <div className='grid w-fit grid-cols-2 grid-rows-2 gap-8'>
                <div className='flex h-48 w-80 items-center justify-center rounded-3xl border-2'>
                    Kunden
                </div>
                <div className='flex h-48 w-80 items-center justify-center rounded-3xl border-2'>
                    Produkte
                </div>
                <div className='flex h-48 w-80 items-center justify-center rounded-3xl border-2'>
                    Bestellungen
                </div>
                <div className='flex h-48 w-80 items-center justify-center rounded-3xl border-2'>
                    Einstellungen
                </div>
            </div>
        </div>
    );
    return AdminDashboardContent;
}
