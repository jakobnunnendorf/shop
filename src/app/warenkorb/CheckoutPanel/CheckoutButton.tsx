'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function CheckoutButton({ active }: { active: boolean }) {
    const router = useRouter();
    const linkToCheckout = () => {
        if (active) {
            router.push('/warenkorb/checkout');
        }
    };
    return (
        <button
            onClick={linkToCheckout}
            className={`mt-6 w-full rounded-md ${
                active
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-gray-400 cursor-default'
            } py-1.5 font-medium text-blue-50 `}
        >
            Jetzt kaufen
        </button>
    );
}
