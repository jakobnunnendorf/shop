'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function LoginAndCheckout({ cart }: { cart: CartItem[] }) {
    const router = useRouter();
    const handleLoginAndCheckout = async (formData: FormData) => {
        if (cart.length === 0) {
            alert('Warenkorb ist leer');
            return;
        }
        const login_email = formData.get('email');
        const login_password = formData.get('password');

        const data: any = await fetch('/api/checkout/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cartItems: [...cart],
                metadata: {
                    email: login_email,
                    password: login_password,
                },
            }),
        });
        const { url, error } = await data.json();
        if (!error) {
            router.push(url);
        } else {
            alert(error);
        }
    };

    const loginAndCheckout = (
        <aside className='flex items-center justify-center w-full h-full '>
            <div className='space-y-8 h-2/3'>
                <h2 className='text-3xl font-bold text-coastal-blue-10'>
                    Ich war schonmal hier
                </h2>
                <form
                    action={handleLoginAndCheckout}
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
    );
    return loginAndCheckout;
}
