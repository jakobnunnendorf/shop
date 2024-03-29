'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { FormEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Form() {
    const router = useRouter();
    const [email, setEmail] = useState<string>();
    const supabase = createClientComponentClient();

    const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user_profiles = async () => {
            const { data: profiles } = await supabase
                .from('profiles')
                .select('*');
            return profiles;
        };
        const profiles = (await user_profiles()) as profile[];
        // checks if email is present in
        const check_email = () => {
            for (let i = 0; i < profiles.length; i++) {
                if (profiles[i].email === email) {
                    return true;
                }
            }
        };
        if (check_email()) {
            const { error } = await supabase.auth.resetPasswordForEmail(
                `${email}`,
                {
                    redirectTo:
                        'https://www.phone2door.com/user/recover-account/reset',
                }
            );
            if (error) {
                toast.error('Fehler beim E-Mail-Versand!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            } else {
               await toast.success('Email wurde erfolgreich Versendet!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                setTimeout(()=>{
                router.push('/');
                },3000);
            }
        } else {
            toast.error('E-Mail nicht gefunden!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    const form = (
        <form
            onSubmit={handleResetPassword}
            className={`row-span-3 row-start-3 grid w-4/5 grid-cols-12 grid-rows-3 gap-4`}
        >
            <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            {
                <input // email
                    type='email'
                    placeholder='E-Mail'
                    className='col-span-12 row-start-1 px-4 set-height rounded-3xl'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            }

            <div className='flex flex-col items-center col-span-12 col-start-1 row-span-2 row-start-2'>
                <button
                    type='submit'
                    className='w-2/3 h-12 font-bold bg-green-300 rounded-3xl'
                >
                    Einreichen
                </button>
                <Link href='/user'>
                    <button
                        type='button'
                        className='mt-2 underline outline-none text-slate-500'
                    >
                        Ich habe noch keinen Account?
                        <br />
                    </button>
                </Link>
            </div>
        </form>
    );
    return form;
}
