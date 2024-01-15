import Link from 'next/link';
import React from 'react';

export default function ResetButton() {
    return (
        <Link
            href='/user/recover-account'
            className='mt-2 underline outline-none text-slate-500'
        >
            Passwort zurücksetzen
        </Link>
    );
}
