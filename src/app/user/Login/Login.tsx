'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
import { useContext } from 'react';
import { SessionContext } from '@globalState/SessionContext';

export default function Login() {
    const { setValue: setSession } = useContext(SessionContext);

    const router = useRouter();
    const supabase = createClientComponentClient();

    const [login_not_registration, toggle_login_not_registration] =
        useState(false);
    const [registrationInfo, setRegistrationInfo] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    console.log(registrationInfo);

    const updateInfo = (key: string, newValue: string) => {
        setRegistrationInfo((prevState) => ({
            ...prevState,
            [key]: newValue,
        }));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        updateInfo(name, value);
    };

    // create a handle registration function
    const handleRegistration = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        supabase.auth.signUp({
            email: registrationInfo.email,
            password: registrationInfo.password,
            options: {
                emailRedirectTo: `http://localhost:3000/auth/callback`,
            },
        });
    };

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email: registrationInfo.email,
            password: registrationInfo.password,
        });
        setSession(data);
        router.push('/user');
    };

    const left_heading = (
        <h2 className='row-span-1 text-center text-2xl font-bold'>
            Deine Infos
        </h2>
    );
    const form_wrapper = (
        <form
            onSubmit={login_not_registration ? handleLogin : handleRegistration}
            className='row-span-5 grid w-4/5 grid-cols-12 grid-rows-5 gap-4 '
        >
            <input
                type='text'
                placeholder='Vorname'
                className='col-span-6 row-start-1 rounded-3xl px-4'
                name='name'
                value={registrationInfo.name}
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='Nachname'
                className='col-span-7 col-start-7 row-start-1 rounded-3xl px-4'
                name='lastName'
                value={registrationInfo.lastName}
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='E-Mail'
                className='col-span-7 row-start-2 rounded-3xl px-4'
                name='email'
                value={registrationInfo.email}
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='Telefon'
                className='col-span-6 row-start-2 rounded-3xl px-4'
                name='phone'
                value={registrationInfo.phone}
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='Passwort'
                className='col-span-6 row-start-3 rounded-3xl px-4'
                name='password'
                value={registrationInfo.password}
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='wiederholen'
                className={`${
                    registrationInfo.confirmPassword.length > 0
                        ? registrationInfo.password ===
                          registrationInfo.confirmPassword
                            ? 'border-2 border-green-300'
                            : 'border-2 border-red-300'
                        : ''
                } col-span-7 row-start-3 rounded-3xl px-4 outline-none`}
                name='confirmPassword'
                value={registrationInfo.confirmPassword}
                onChange={handleInputChange}
            />
            <div className='col-span-12 col-start-2 row-span-2 flex flex-col items-center '>
                <button
                    type='submit'
                    className='h-12 w-2/3 rounded-3xl bg-green-300 font-bold'
                >
                    {login_not_registration
                        ? 'Jetzt einloggen'
                        : 'Jetzt Registrieren'}
                </button>
                <button
                    type='button'
                    className='mt-2 text-slate-500 underline outline-none'
                    onClick={() =>
                        toggle_login_not_registration(!login_not_registration)
                    }
                >
                    Ich habe{' '}
                    {login_not_registration ? 'noch keinen' : 'schon einen'}{' '}
                    Account: <br />
                    {login_not_registration
                        ? 'jetzt registrieren'
                        : 'zum login'}
                </button>
            </div>
        </form>
    );
    const right_header = (
        <h2 className='row-span-1 text-center text-2xl font-bold text-white '>
            {login_not_registration
                ? 'Einfach anmelden'
                : 'Noch keinen Account?'}
        </h2>
    );
    const right_content_wrapper = (
        <div className='row-span-5 w-4/5 '>
            <div className='text-center font-bold text-white '>
                {login_not_registration ? `Anmelden` : 'Registrieren'} und
                zurücklehnen. <br />
                Wir haben alles,
                <br /> was dein Handy braucht.
            </div>
            <div className='row-span-4 flex flex-col py-8'>
                <h3 className='mb-2'>Der Server bedankt sich:</h3>
                <p>{'{'}</p>
                <p className=''>
                    &quot;Vorname&quot;: {JSON.stringify(registrationInfo.name)}
                </p>
                <p className=''>
                    &quot;Nachname&quot;:{' '}
                    {JSON.stringify(registrationInfo.lastName)}
                </p>
                <p className=''>
                    &quot;Email&quot;: {JSON.stringify(registrationInfo.email)}
                </p>
                <p className=''>
                    &quot;Telefon&quot;:{' '}
                    {JSON.stringify(registrationInfo.phone)}
                </p>
                <p>{'}'}</p>
            </div>
        </div>
    );
    const left_container = (
        <div className='grid grid-rows-6 justify-items-center py-8 lg:order-1'>
            {left_heading}
            {form_wrapper}
        </div>
    );
    const right_container = (
        <div className='grid grid-rows-6 justify-items-center bg-green-600 py-8 lg:order-2'>
            {right_header}
            {right_content_wrapper}
        </div>
    );
    const heading_above_main_content = (
        <h1 className='mb-8 text-center text-2xl '>
            <span className='text-3xl'>
                Hallo{' '}
                {registrationInfo.name.length > 0
                    ? registrationInfo.name
                    : '__________'}
            </span>
            ,<br></br> willkommen bei Phone2Door!
        </h1>
    );
    const main_content_wrapper = (
        <div className='grid min-h-[80vh] w-10/12 overflow-hidden rounded-3xl bg-slate-100 lg:h-2/3 lg:min-h-0 lg:w-2/3 lg:grid-cols-2'>
            {right_container}
            {left_container}
        </div>
    );
    const page_container = (
        <section className='flex min-h-screen w-full flex-col items-center justify-center lg:h-fit lg:min-h-0 lg:pt-8'>
            {heading_above_main_content}
            {main_content_wrapper}
        </section>
    );
    return page_container;
}
