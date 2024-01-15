import Link from 'next/link';
import React from 'react';
import FilterTags from './components/FilterTags';
import { paramString } from '@lib/URLProcessing';

export default function FilterButtons({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    return (
        <div
            className={`pt-8 pb-8 lg:hidden ${
                searchParams.filter !== undefined ? 'hidden' : ''
            }`}
        >
            <div className={`grid grid-cols-2 lg:hidden `}>
                <Link
                    href='/shop'
                    className='w-4/5 px-4 py-2 mx-auto mr-2 text-lg font-bold text-center border rounded-full text-coastal-blue-10 h-fit border-coastal-blue-10'
                >
                    Filter löschen
                </Link>
                <Link
                    href={`/shop?filter=true${
                        paramString(searchParams).length > 0
                            ? `&${paramString(searchParams)}`
                            : ''
                    }`}
                    className='w-4/5 px-4 py-2 mx-auto ml-2 text-lg font-bold text-center text-white border rounded-full h-fit bg-coastal-blue-10'
                >
                    Filter
                </Link>
            </div>
            <FilterTags paramString={paramString(searchParams)} />
        </div>
    );
}
