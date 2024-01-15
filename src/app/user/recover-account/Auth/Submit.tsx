'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';

export default function Submit() {
    const { pending } = useFormStatus();
    const submit = (
        <button
            type='submit'
            className={`w-2/3 h-12 font-bold ${
                pending ? 'bg-gray-200' : 'bg-green-300'
            } rounded-3xl`}
        >
            {pending ? 'lädt...' : 'Einreichen'}
        </button>
    );
    return submit;
}
