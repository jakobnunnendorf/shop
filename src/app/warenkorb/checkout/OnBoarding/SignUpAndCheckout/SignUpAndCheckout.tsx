'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';
import { FiUser } from 'react-icons/fi';

export default function SignUpAndCheckout({ cart }: { cart: cart_item[] }) {
  const router = useRouter();
    const [error_message, set_error_message] = useState('');

    const [first_password, set_first_password] = useState('');
    const [second_password, set_second_password] = useState('');
    const handle_first_password_change = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        set_first_password(e.target.value);
    };
    const handle_second_password_change = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        set_second_password(e.target.value);
    };
    const handle_checkout_and_signup = async (formData: FormData) => {
        const signup_email = formData.get('email') as email | null;
        const signup_password = formData.get('password') as string;
        const signup_password_repeat = formData.get(
            'password_repeat'
        ) as string;

        if (signup_password === signup_password_repeat) {
            set_error_message('');
            const data: any = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cartItems: [...cart],
                    metadata: {
                        email: signup_email,
                        password: signup_password,
                        checkout_mode: 'signup_and_checkout',
                    },
                }),
            });
            const { url } = await data.json();
           router.push(url);
        } else {
            set_error_message('Passwörter stimmen nicht überein');
        }
    };
    const signUpAndCheckout = (
        <li className='flex flex-col items-start space-y-4 '>
            <div className='flex items-center space-x-4'>
                <div className='flex aspect-square h-8 w-8 items-center justify-center rounded-full border border-coastal-blue-10 p-2 font-bold text-coastal-blue-10'>
                    1
                </div>{' '}
                <h3 className=''>Account erstellen und fortfahren</h3>
            </div>
            <form
                action={handle_checkout_and_signup}
                className='grid grid-cols-2 grid-rows-2'
            >
                <input
                    type='email'
                    placeholder='E-Mail-Adresse'
                    className='col-span-2 rounded-t-md border px-2 py-1 outline-none'
                    name='email'
                />
                <input
                    onChange={handle_first_password_change}
                    type='password'
                    placeholder='Passwort'
                    className='rounded-bl-md border border-t-0 px-2 py-1 outline-none'
                    name='password'
                />
                <input
                    onChange={handle_second_password_change}
                    type='password'
                    placeholder='Passwort wiederholen'
                    className={`rounded-br-md border border-l-0 border-t-0 px-2 py-1 outline-none ${
                        first_password !== second_password &&
                        first_password.length > 0 &&
                        second_password.length > 0
                            ? 'border-red-500'
                            : null
                    }`}
                    name='password_repeat'
                />
                <div className='col-span-2 flex flex-col items-center justify-center'>
                    <p className='text-xs text-red-500'>{error_message}</p>
                    <button
                        type='submit'
                        className='mt-4 flex w-fit items-center justify-center space-x-2 rounded-lg bg-coastal-blue-10 px-4 py-2 font-bold text-white'
                    >
                        <FiUser className='text-white' />
                        <span>Checkout</span>
                    </button>
                </div>
            </form>
        </li>
    );
    return signUpAndCheckout;
}
