'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Cancel() {
    const handleClick = () => {
        const router = useRouter();
        router.push('/user');
    };
    const cancel = (
        <button
            type='button'
            onClick={handleClick}
            className='flex justify-center px-4 py-2 font-bold border w-36 rounded-xl border-coastal-blue-10 text-coastal-blue-10 '
        >
            abbrechen
        </button>
    );
    return cancel;
}
