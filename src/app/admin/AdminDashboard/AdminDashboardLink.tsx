import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function AdminDashboardLink({
    link,
    active,
}: {
    link: string;
    active: boolean;
}) {
    const adminDashboardLink = (
        <Link href={`/admin${active ? `/${link}` : ''}`}>
            <div
                className={`${
                    active ? '' : 'cursor-default'
                } flex items-center justify-between px-4 py-4 border-b lg:justify-center lg:border-2 lg:rounded-3xl lg:h-48 lg:w-80`}
            >
                <div> {link.charAt(0).toUpperCase() + link.slice(1)} </div>
                <div className='lg:hidden'>
                    <FiArrowRight />
                </div>
            </div>
        </Link>
    );
    return adminDashboardLink;
}
