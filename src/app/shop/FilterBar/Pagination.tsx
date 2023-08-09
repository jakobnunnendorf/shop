'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Pagination( {
    searchParams,
}: {
    searchParams: string
}) {

    const page = (
        <div className='flex justify-center items-center w-full h-16 border-t'>
            <Link href={`/shop/?page=${1}`}>
                Previous
            </Link>
            <Link href={`/shop/?page=${searchParams}`}>
                Clicky
            </Link>
            <div className='flex justify-center items-center w-16 h-16 border-t'>

            </div>
        </div>
    );
    return page;
};
