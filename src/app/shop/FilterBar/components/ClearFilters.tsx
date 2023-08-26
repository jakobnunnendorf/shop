import React from 'react';
import Link from 'next/link';

export default function ClearFilters({
    searchParams,
}: {
    searchParams: URLSearchParams;
}) {
    return (
        <Link
            href='/shop'
            className={` border text-gray-400 px-2 py-1 mx-auto mt-8 mb-4 text-xs font-bold rounded-full w-fit ${
                searchParams.size > 0 ? 'translate-y-0' : '-translate-y-40'
            } transition duration-300 ease-in-out`}
        >
            Filter löschen x
        </Link>
    );
}
