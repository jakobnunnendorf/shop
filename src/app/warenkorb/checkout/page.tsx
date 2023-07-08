'use client';

import { useContext } from 'react';
import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { CartContext, CartContextType } from '@globalState/CartContext';

export default function CheckoutPage() {
    const { cart } = useContext(CartContext) as CartContextType;
    const [first_password, set_first_password] = useState('');
    const [second_password, set_second_password] = useState('');
    const [error_message, set_error_message] = useState('');

    const handle_first_password_change = (e: React.ChangeEvent<HTMLInputElement>): void => {
        set_first_password(e.target.value);
    };

    const handle_second_password_change = (e: React.ChangeEvent<HTMLInputElement>): void => {
        set_second_password(e.target.value);
    };

    const handle_checkout_and_signup = async (formData: FormData) => {
        const signup_email = formData.get('email') as email | null;
        const signup_password = formData.get('password') as string;
        const signup_password_repeat = formData.get('password_repeat') as string;

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
                cartItems: [...cart],
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
                cartItems: [...cart],
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
            <aside className='flex flex-col items-center justify-center w-1/2 h-full border-r'>
                <div className='flex flex-col space-y-8 h-2/3'>
                    <h2 className='text-3xl font-bold text-coastal-blue-10'>
                        Ich bin zum ersten Mal hier
                    </h2>
                    <ul className='flex flex-col space-y-16'>
                        <li className='flex flex-col items-start space-y-4 '>
                            <div className='flex items-center space-x-4'>
                                <div className='flex items-center justify-center w-8 h-8 p-2 font-bold border rounded-full aspect-square border-coastal-blue-10 text-coastal-blue-10'>
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
                                    <p className='text-xs text-red-500'>
                                        {error_message}
                                    </p>
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
                        <li className='flex flex-col items-start justify-center space-x-4'>
                            {' '}
                            <div className='flex items-center space-x-4'>
                                <div className='flex items-center justify-center w-8 h-8 p-2 font-bold border rounded-full aspect-square border-coastal-blue-10 text-coastal-blue-10'>
                                    2
                                </div>{' '}
                                <h3>oder als Gast fortfahren</h3>
                            </div>
                            <div className='flex justify-center w-full col-span-2'>
                                <button
                                    onClick={handle_guest_checkout}
                                    className='relative px-4 py-2 mt-4 font-bold border rounded-lg w-fit border-coastal-blue-10 text-coastal-blue-10'
                                >
                                    Gast Checkout
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
            <aside className='flex items-center justify-center w-1/2 h-full '>
                <div className='space-y-8 h-2/3'>
                    <h2 className='text-3xl font-bold text-coastal-blue-10'>
                        Ich war schonmal hier
                    </h2>
                    <form
                        action={handle_login_and_checkout}
                        className='flex flex-col items-center p-4 space-y-4 border rounded-lg'
                    >
                        <div className='flex flex-col w-full'>
                            <input
                                type='email'
                                className='px-2 border rounded-t'
                                placeholder='Email'
                                name='email'
                            />
                            <input
                                type='password'
                                name='password'
                                id=''
                                className='px-2 border border-t-0 rounded-b'
                                placeholder='Passwort'
                            />
                        </div>
                        <button
                            type='submit'
                            className='px-4 py-2 font-bold text-white rounded-lg w-fit bg-coastal-blue-10'
                        >
                            Login
                        </button>
                    </form>
                </div>
            </aside>
        </section>
    );
}
