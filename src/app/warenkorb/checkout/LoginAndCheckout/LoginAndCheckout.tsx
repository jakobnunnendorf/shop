'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function LoginAndCheckout({ cart }: { cart: cart_item[] }) {
    const router = useRouter();
    const handle_login_and_checkout = async (formData: FormData) => {
        const login_email = formData.get('email');
        const login_password = formData.get('password');

        const data: any = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cartItems: [...cart],
                metadata: {
                    email: login_email,
                    password: login_password,
                    checkout_mode: 'login_and_checkout',
                },
            }),
        });
        const { url } = await data.json();
        router.push(url);
    };

    const loginAndCheckout = (
        <aside className='flex h-full w-full items-center justify-center '>
            <div className='h-2/3 space-y-8'>
                <h2 className='text-3xl font-bold text-coastal-blue-10'>
                    Ich war schonmal hier
                </h2>
                <form
                    action={handle_login_and_checkout}
                    className='flex flex-col items-center space-y-4 rounded-lg border p-4'
                >
                    <div className='flex w-full flex-col'>
                        <input
                            type='email'
                            className='rounded-t border px-2'
                            placeholder='Email'
                            name='email'
                        />
                        <input
                            type='password'
                            name='password'
                            id=''
                            className='rounded-b border border-t-0 px-2'
                            placeholder='Passwort'
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-fit rounded-lg bg-coastal-blue-10 px-4 py-2 font-bold text-white'
                    >
                        Login
                    </button>
                </form>
            </div>
        </aside>
    );
    return loginAndCheckout;
}
