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
        if (cart.length === 0) {
            alert('Warenkorb ist leer');
            return;
        }

        const signup_email = formData.get('email') as email | null;
        const signup_password = formData.get('password') as string;
        const signup_password_repeat = formData.get(
            'password_repeat'
        ) as string;

        if (signup_password === signup_password_repeat) {
            set_error_message('');
            const data: any = await fetch('/api/checkout/signup', {
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
            const { url, error } = await data.json();
            if (url && !error) {
                router.push(url);
            } else {
                alert(`Fehler: ${error}`);
            }
        } else {
            set_error_message('Passwörter stimmen nicht überein');
        }
    };
    const signUpAndCheckout = (
        <li className='flex flex-col items-start space-y-4 '>
            <div className='flex items-center space-x-4'>
                <div className='flex items-center justify-center w-8 h-8 p-2 font-bold border rounded-full aspect-square border-coastal-blue-10 text-coastal-blue-10'>
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
                    className='col-span-2 px-2 py-1 border outline-none rounded-t-md'
                    name='email'
                />
                <input
                    onChange={handle_first_password_change}
                    type='password'
                    placeholder='Passwort'
                    className='px-2 py-1 border border-t-0 outline-none rounded-bl-md'
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
                <div className='flex flex-col items-center justify-center col-span-2'>
                    <p className='text-xs text-red-500'>{error_message}</p>
                    <button
                        type='submit'
                        className='flex items-center justify-center px-4 py-2 mt-4 space-x-2 font-bold text-white rounded-lg w-fit bg-coastal-blue-10'
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
