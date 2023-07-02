'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { FiUser } from 'react-icons/fi';
import { useContext } from 'react';
import { CartContext } from '@globalState/CartContext';
import { useState } from 'react';

export default function CheckoutPage() {
    const { value: cartItems } = useContext(CartContext);
    const [first_password, set_first_password] = useState('');
    const [second_password, set_second_password] = useState('');
    const [error_message, set_error_message] = useState('');

    const handle_first_password_change = (e: any) => {
        set_first_password(e.target.value);
    };

    const handle_second_password_change = (e: any) => {
        set_second_password(e.target.value);
    };

    const handle_checkout_and_signup = async (formData: FormData) => {
        const signup_email = formData.get('email');
        const signup_password = formData.get('password');
        const signup_password_repeat = formData.get('password_repeat');

        if (signup_password === signup_password_repeat) {
            set_error_message('');
            const data: any = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cartItems: [...cartItems],
                    metadata: {
                        email: signup_email,
                        password: signup_password,
                        checkout_mode: 'signup_and_checkout',
                    },
                }),
            });
            const { url } = await data.json();
            window.location.href = url;
        } else {
            set_error_message('Passwörter stimmen nicht überein');
        }
    };

    const handle_login_and_checkout = async (formData: FormData) => {
        const login_email = formData.get('email');
        const login_password = formData.get('password');

        const data: any = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cartItems: [...cartItems],
                metadata: {
                    email: login_email,
                    password: login_password,
                    checkout_mode: 'login_and_checkout',
                },
            }),
        });
        const { url } = await data.json();
        window.location.href = url;
    };

    const handle_guest_checkout = async () => {
        const data: any = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cartItems: [...cartItems],
                metadata: {
                    checkout_mode: 'guest_checkout',
                },
            }),
        });
        const { url } = await data.json();
        window.location.href = url;
    };

    return (
        <section className=' flex h-[calc(100vh-6rem)] w-full'>
            <aside className='flex h-full w-1/2 flex-col items-center justify-center border-r'>
                <div className='flex h-2/3 flex-col space-y-8'>
                    <h2 className='text-3xl font-bold text-coastal-blue-10'>
                        Ich bin zum ersten Mal hier
                    </h2>
                    <ul className='flex flex-col space-y-16'>
                        <li className='flex flex-col items-start space-y-4 '>
                            <div className='flex items-center space-x-4'>
                                <div className='flex aspect-square h-8 w-8 items-center justify-center rounded-full border border-coastal-blue-10 p-2 font-bold text-coastal-blue-10'>
                                    1
                                </div>{' '}
                                <h3 className=''>
                                    Account erstellen und fortfahren
                                </h3>
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
                                    <p className='text-xs text-red-500'>
                                        {error_message}
                                    </p>
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
                        <li className='flex flex-col items-start justify-center space-x-4'>
                            {' '}
                            <div className='flex items-center space-x-4'>
                                <div className='flex aspect-square h-8 w-8 items-center justify-center rounded-full border border-coastal-blue-10 p-2 font-bold text-coastal-blue-10'>
                                    2
                                </div>{' '}
                                <h3>oder als Gast fortfahren</h3>
                            </div>
                            <div className='col-span-2 flex w-full justify-center'>
                                <button
                                    onClick={handle_guest_checkout}
                                    className='relative mt-4 w-fit rounded-lg border border-coastal-blue-10 px-4 py-2 font-bold text-coastal-blue-10'
                                >
                                    Gast Checkout
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
            <aside className='flex h-full w-1/2 items-center justify-center '>
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
        </section>
    );
}
