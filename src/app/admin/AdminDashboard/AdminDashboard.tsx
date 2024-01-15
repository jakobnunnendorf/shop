import React from 'react';
import AdminDashboardLink from './AdminDashboardLink';

export default function AdminDashboard() {
    const links = ['kunden', 'produkte', 'bestellungen', 'analytics'];

    const adminDashboard = (
        <div className='flex flex-col items-center w-full space-y-8'>
            <h1 className='w-full text-4xl text-center'>Admin Dashboard</h1>
            <ul className='flex flex-col justify-between w-4/5 grid-cols-2 grid-rows-3 border lg:border-none lg:justify-center rounded-xl lg:grid lg:w-fit lg:gap-8'>
                {links.map((link) => {
                    return (
                        <li key={link}>
                            <AdminDashboardLink
                                link={link}
                                active={link !== 'analytics'}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
    return adminDashboard;
}
