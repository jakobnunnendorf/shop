import Link from 'next/link';
import {
    FiCompass,
    FiPackage,
    FiSettings,
    FiSmartphone,
    FiUser,
} from 'react-icons/fi';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'title_string',
    description: 'description_string',
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const linkedPages = [
        {
            route: '/admin',
            title: 'Dashboard',
            key: 'admin',
            icon: <FiCompass className='text-slate-500' size={30} />,
        },
        {
            route: '/admin/produkte',
            title: 'Produkte',
            key: 'produkte',
            icon: <FiSmartphone className='text-slate-500' size={30} />,
        },
        {
            route: '/admin/kunden',
            title: 'Kunden',
            key: 'kunden',
            icon: <FiUser className='text-slate-500' size={30} />,
        },
        {
            route: '/admin/bestellungen',
            title: 'Bestellungen',
            key: 'bestellungen',
            icon: <FiPackage className='text-slate-500' size={30} />,
        },
        {
            route: '/admin/settings',
            title: 'Settings',
            key: 'settings',
            icon: <FiSettings className='text-slate-500' size={30} />,
        },
    ];
    const navigationMenu = (
        <ul className='flex flex-col items-center justify-around w-full mt-8 space-y-8 h-fit lg:items-start'>
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
        <section className='flex w-full '>
            <aside className='w-12 h-screen space-y-2 bg-slate-100 lg:w-44 lg:p-4'>
                <h2 className='hidden mb-8 text-xl font-bold text-center text-slate-400 lg:block'>
                    Admin Panel
                </h2>
                {navigationMenu}
            </aside>
            <section className=' relative w-[calc(100vw-3rem)] py-8  lg:w-[calc(100vw-11rem)] lg:px-16'>
                {children}
            </section>
        </section>
    );
    return AdminLayout;
}
