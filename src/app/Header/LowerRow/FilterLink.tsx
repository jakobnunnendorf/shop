import Link from 'next/link';
import React from 'react';
export default function FilterLink({
    filterTitle,
    filterValue,
}: {
    filterTitle: string;
    filterValue: productCategory;
}) {
    return (
        <Link
            href={{
                pathname: '/shop',
                query: { category: filterValue },
            }}
        >
            <li>{filterTitle}</li>
        </Link>
    );
}
