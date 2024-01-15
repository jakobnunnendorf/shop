import { uniqueId } from 'lodash';
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
    title: 'titleString',
    description: 'descriptionString',
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
        // {
        //     route: '/admin/settings',
        //     title: 'Settings',
        //     key: 'settings',
        //     icon: <FiSettings className='text-slate-500' size={30} />,
        // },
    ];

    const adminLayout = (
        <section className='flex w-full '>
            <aside className='w-12 h-screen space-y-2 bg-slate-100 lg:w-44 lg:p-4'>
                <h2 className='hidden mb-8 text-xl font-bold text-center text-slate-400 lg:block'>
                    Admin Panel
                </h2>
                <ul className='flex flex-col items-center justify-around w-full mt-8 space-y-8 h-fit lg:items-start'>
                    {linkedPages.map((page) => (
                        <li
                            key={uniqueId()}
                            className='flex items-center space-x-2 '
                        >
                            <Link href={page.route} key={page.route}>
                                <div className='flex gap-2'>
                                    {page.icon}
                                    <p className='hidden text-xl lg:inline'>
                                        {page.title}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <section className=' relative w-[calc(100vw-3rem)]  lg:w-[calc(100vw-11rem)]'>
                {children}
            </section>
        </section>
    );
    return adminLayout;
}
