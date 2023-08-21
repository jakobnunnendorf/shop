'use client';

import Link from 'next/link';
import React from 'react';

export default function reset_button() {
    return (
        <Link
            href='/user/recover-account'
            className='mt-2 text-slate-500 underline outline-none'
        >
            Passwort zurücksetzen
        </Link>
    );
}
