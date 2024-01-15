'use client';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { resetPassword } from './resetPassword';
import Submit from './Submit';
import EmailInput from './EmailInput';

export default function Form() {
    const [state, formAction] = useFormState(resetPassword, {
        message: '',
        errors: {},
    });
    const form = (
        <form
            action={formAction}
            className={`row-span-3 row-start-3 flex flex-col justify-center items-center w-4/5  grid-rows-3 gap-4 `}
        >
            <EmailInput state={state} />

            <div className='flex flex-col items-center col-start-1 row-span-2 row-start-2 '>
                <Submit />
                <Link
                    href='/user'
                    className='mt-2 underline outline-none text-slate-500'
                >
                    Ich habe noch keinen Account?
                </Link>
            </div>
        </form>
    );
    return form;
}
