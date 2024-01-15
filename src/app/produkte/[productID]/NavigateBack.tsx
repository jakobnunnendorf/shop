'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

export default function NavigateBack() {
    const router = useRouter();
    const backButton = (
        <button
            className='absolute z-10 flex items-center justify-center w-20 h-8 text-sm font-bold text-white left-4 top-4 rounded-3xl bg-coastal-blue-3 lg:hidden'
            onClick={router.back}
        >
            <FiArrowLeft /> <p>Zurück</p>
        </button>
    );
    return backButton;
}
