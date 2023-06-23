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
import { UserContextProvider } from '@globalState/UserContext';
export const dynamic = 'force-dynamic';

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
    const user = currentSession?.user;
    const { data: profileData } = await supabase
        .from('profiles')
        .select()
        .eq('profile_id', user?.id)
        .single();
    const userRole = profileData?.role;
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
        <ul className='mt-8 flex h-fit w-full flex-col items-center justify-around space-y-8 lg:items-start'>
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
    const mobileMenu = (
        <nav className='fixed bottom-0 grid h-28 w-full list-none grid-flow-col rounded-t-3xl bg-slate-700 py-4 text-xs font-bold text-white lg:hidden'>
            <Link href='/user'>
                <li className='flex flex-col items-center space-y-2'>
                    <FiUser className='text-slate-300' size={30} />
                    <div>Profil</div>
                </li>
            </Link>
            <Link href='/user/bestellungen'>
                <li className='flex flex-col items-center space-y-2'>
                    <FiPackage className='text-slate-300' size={30} />
                    <div>Bestellungen</div>
                </li>
            </Link>
            {userRole === 'admin' && (
                <Link href='/admin'>
                    <li className='flex flex-col items-center space-y-2'>
                        <FiCompass className='text-slate-300' size={30} />
                        <div>Admin</div>
                    </li>
                </Link>
            )}
            <Link href='/user/wunschliste'>
                <li className='flex flex-col items-center space-y-2'>
                    <FiHeart className='text-slate-300' size={30} />
                    <div>Wunschliste</div>
                </li>
            </Link>
            <Link href='/user/einstellungen'>
                <li className='flex flex-col items-center space-y-2'>
                    <FiSettings className='text-slate-300' size={30} />
                    <div>Einstellungen</div>
                </li>
            </Link>
        </nav>
    );
    const userLayout = (
        <section className=' flex w-full flex-col '>
            <UserContextProvider>
                {currentSession && (
                    <aside className='hidden h-screen w-12 bg-slate-100 lg:block lg:w-fit lg:px-6 lg:py-12'>
                        <h2 className='text-2xl font-bold text-coastal-blue-10'>
                            Mein Account
                        </h2>
                        {navigationMenu}
                    </aside>
                )}
                <section className='w-full px-2 py-8 pb-44 lg:px-16 lg:pb-8'>
                    {children}
                </section>
                {currentSession && mobileMenu}
            </UserContextProvider>
        </section>
    );
    return userLayout;
}
