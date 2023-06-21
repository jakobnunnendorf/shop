import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import {
    FiCompass,
    FiHeart,
    FiPackage,
    FiSettings,
    FiUser,
} from 'react-icons/fi';

export const metadata = {
    title: 'title_string',
    description: 'description_string',
};

export default async function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session: currentSession },
    } = await supabase.auth.getSession();
    const { data: userInfo } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', currentSession?.user?.id);
    const userRole = userInfo ? userInfo[0].role : null;

    const linkedPages = [
        {
            route: '/user',
            title: 'Mein Profil',
            key: 'profile',
            icon: <FiUser className='text-slate-500' size={30} />,
        },
        {
            route: '/user/bestellungen',
            title: 'Bestellungen',
            key: 'orders',
            icon: <FiPackage className='text-slate-500' size={30} />,
        },
        {
            route: '/user/wunschliste',
            title: 'Wunschliste',
            key: 'wishlist',
            icon: <FiHeart className='text-slate-500' size={30} />,
        },
        {
            route: '/user/einstellungen',
            title: 'Einstellungen',
            key: 'settings',
            icon: <FiSettings className='text-slate-500' size={30} />,
        },
    ];
    const navigationMenu = (
        <ul className='flex flex-col items-center justify-around w-full mt-8 space-y-8 h-fit lg:items-start'>
            {userRole === 'admin' && (
                <Link href='/admin'>
                    <li className='flex items-center space-x-2 '>
                        <span className=''>
                            <FiCompass className='text-slate-500' size={30} />
                        </span>
                        <span className='hidden text-xl lg:inline'>Admin</span>
                    </li>
                </Link>
            )}
            {linkedPages.map((page) => (
                <Link href={page.route} key={page.route}>
                    <li className='flex items-center space-x-2 '>
                        <span className=''>{page.icon}</span>
                        <span className='hidden text-xl lg:inline'>
                            {page.title}
                        </span>
                    </li>
                </Link>
            ))}
        </ul>
    );
    const AdminLayout = (
        <section className='flex '>
            {currentSession && (
                <aside className='w-12 h-screen bg-slate-100 lg:w-fit lg:px-6 lg:py-12'>
                    <h2 className='text-2xl font-bold text-coastal-blue-10'>
                        Mein Account
                    </h2>
                    {navigationMenu}
                </aside>
            )}
            <section className='w-full px-2 py-8 lg:px-16'>{children}</section>
        </section>
    );
    return AdminLayout;
}
