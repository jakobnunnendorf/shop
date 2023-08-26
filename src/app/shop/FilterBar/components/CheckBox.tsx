'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import { FiCheck, FiSquare } from 'react-icons/fi';
import { toggleQueryParam } from '@lib/helperFunctions';

export default function CheckBox({ filter }: { filter: string }) {
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const location = `${
        process.env.NEXT_PUBLIC_URL
    }${pathName}?${searchParams.toString()}`;

    const toggledLocation = toggleQueryParam(location, 'category', filter);

    return (
        <Link href={toggledLocation}>
            {searchParams.getAll('category').includes(filter) ? (
                <FiCheck />
            ) : (
                <FiSquare />
            )}
        </Link>
    );
}
