'use client';
import React from 'react';
import { experimental_useFormStatus } from 'react-dom';
export default function Save() {
    const { pending } = experimental_useFormStatus();
    const save = (
        <button
            type='submit'
            aria-disabled={pending}
            className='flex justify-center px-4 py-2 space-x-2 font-bold text-white w-36 rounded-xl bg-coastal-blue-10'
        >
            <span>{pending ? 'Lädt...' : 'Speichern'}</span>
        </button>
    );
    return save;
}
