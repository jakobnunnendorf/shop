import Link from 'next/link';
import React from 'react';
import { FiEdit2 } from 'react-icons/fi';

export default function EditProductButton({ productId }: { productId: UUID }) {
    return (
        <Link
            href={{
                pathname: `/produkte/${productId}`,
                query: { edit: true },
            }}
            className={`rounded-full border-2  p-2 shadow-xl hover:bg-gray-400`}
        >
            <FiEdit2 />
        </Link>
    );
}
