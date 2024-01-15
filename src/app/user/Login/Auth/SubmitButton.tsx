'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton({
    hasAccount = true,
}: {
    hasAccount: boolean;
}) {
    const { pending } = useFormStatus();
    const submitButton = (
        <button
            type='submit'
            className='w-2/3 h-12 font-bold bg-green-300 rounded-3xl'
        >
            {pending
                ? 'Lädt...'
                : hasAccount
                ? 'Jetzt einloggen'
                : 'Jetzt Registrieren'}
        </button>
    );
    return submitButton;
}
