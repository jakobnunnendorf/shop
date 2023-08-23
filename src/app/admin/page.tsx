import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FiArrowRight } from 'react-icons/fi';

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
            <div className='flex flex-col justify-between w-4/5 grid-cols-2 grid-rows-3 border lg:border-none lg:justify-center rounded-xl lg:grid lg:w-fit lg:gap-8'>
                <Link
                    href='/admin/kunden'
                    className='flex items-center justify-between px-4 py-4 border-b lg:justify-center lg:border-2 lg:rounded-3xl lg:h-48 lg:w-80'
                >
                    <p> Kunden </p>
                    <div className='lg:hidden'>
                        <FiArrowRight />
                    </div>
                </Link>
                <Link
                    href='admin/produkte'
                    className='flex items-center justify-between px-4 py-4 border-b lg:justify-center lg:border-2 lg:rounded-3xl lg:h-48 lg:w-80'
                >
                    <p> Produkte</p>
                    <div className='lg:hidden'>
                        <FiArrowRight />
                    </div>
                </Link>

                <Link
                    href='/admin/bestellungen'
                    className='flex items-center justify-between px-4 py-4 border-b lg:border-2 lg:lg:justify-center lg:rounded-3xl lg:h-48 lg:w-80'
                >
                    <p>Bestellungen</p>
                    <div className='lg:hidden'>
                        <FiArrowRight />
                    </div>
                </Link>
                <div className='flex items-center justify-between px-4 py-4 text-gray-300 lg:justify-center lg:border-2 lg:rounded-3xl lg:h-48 lg:w-80'>
                    <p> Analytics</p>
                    <div className='lg:hidden'>
                        <FiArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
    return AdminDashboardContent;
}
