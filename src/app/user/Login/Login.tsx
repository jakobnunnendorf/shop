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

    const [loading, setLoading] = useState(false);

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
        const { data: userSignupData, error: userSignupError } =
            await supabase.auth.signUp({
                email: registrationInfo.email,
                password: registrationInfo.password,
            });
        const id_of_new_user = userSignupData?.user?.id;
        const profile_data = {
            firstName: registrationInfo.name,
            lastName: registrationInfo.lastName,
            phone: registrationInfo.phone,
        };
        const { error: addedProfileError } = await supabase
            .from('profiles')
            .update(profile_data)
            .eq('profile_id', id_of_new_user);
        if (!userSignupError && !addedProfileError) {
            router.push('/user/signup-success');
            setLoading(true);
        } else {
            alert('Es ist ein Fehler aufgetreten. Bitte versuche es erneut.');
        }
    };

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { data } = await supabase.auth.signInWithPassword({
            email: registrationInfo.email,
            password: registrationInfo.password,
        });
        setSession(data);
        router.refresh();
    };

    const left_heading = (
        <h2
            className={`${
                login_not_registration ? 'row-start-2' : 'row-start-1'
            } row-span-1 text-center text-2xl font-bold`}
        >
            Deine Infos
        </h2>
    );
    const form_wrapper = //form
        (
            <form
                onSubmit={
                    login_not_registration ? handleLogin : handleRegistration
                }
                className={` ${
                    login_not_registration
                        ? 'row-span-3 row-start-3 grid-rows-3'
                        : 'row-span-5 grid-rows-5'
                } grid w-4/5 grid-cols-12 gap-4`}
            >
                {login_not_registration ? null : (
                    <input // first name
                        type='text'
                        placeholder='Vorname'
                        className='col-span-6 row-start-1 px-4 rounded-3xl'
                        name='name'
                        value={registrationInfo.name}
                        onChange={handleInputChange}
                    />
                )}
                {login_not_registration ? null : (
                    <input // last name
                        type='text'
                        placeholder='Nachname'
                        className='col-span-7 col-start-7 row-start-1 px-4 rounded-3xl'
                        name='lastName'
                        value={registrationInfo.lastName}
                        onChange={handleInputChange}
                    />
                )}
                <input // email
                    type='text'
                    placeholder='E-Mail'
                    className={`${
                        login_not_registration
                            ? 'col-span-6 row-start-1'
                            : 'col-span-7 row-start-2 '
                    }  rounded-3xl px-4`}
                    name='email'
                    value={registrationInfo.email}
                    onChange={handleInputChange}
                />
                {login_not_registration ? null : (
                    <input // phone
                        type='text'
                        placeholder='Telefon'
                        className='col-span-6 row-start-2 px-4 rounded-3xl'
                        name='phone'
                        value={registrationInfo.phone}
                        onChange={handleInputChange}
                    />
                )}
                <input // password
                    type='text'
                    placeholder='Passwort'
                    className={`col-span-6 ${
                        login_not_registration
                            ? 'col-span-6 row-start-1'
                            : 'row-start-3 '
                    }  rounded-3xl px-4`}
                    name='password'
                    value={registrationInfo.password}
                    onChange={handleInputChange}
                />
                {login_not_registration ? null : (
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
                )}
                <div className='flex flex-col items-center col-span-12 col-start-1 row-span-2 '>
                    <button
                        type='submit'
                        className='w-2/3 h-12 font-bold bg-green-300 rounded-3xl'
                    >
                        {login_not_registration
                            ? 'Jetzt einloggen'
                            : 'Jetzt Registrieren'}
                    </button>
                    <button
                        type='button'
                        className='mt-2 underline outline-none text-slate-500'
                        onClick={() =>
                            toggle_login_not_registration(
                                !login_not_registration
                            )
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
        <h2 className='row-span-1 text-2xl font-bold text-center text-white '>
            {login_not_registration
                ? 'Einfach anmelden'
                : 'Noch keinen Account?'}
        </h2>
    );
    const right_content_wrapper = (
        <div className={`row-span-3 w-4/5 lg:row-span-5`}>
            <div className='font-bold text-center text-white '>
                {login_not_registration ? `` : 'Registrieren'} und zurücklehnen.{' '}
                <br />
                Wir haben alles, was dein Handy braucht.
            </div>

            <div className='hidden row-span-4 py-8 lg:flex lg:flex-col'>
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
        <div className='grid grid-rows-6 py-4 justify-items-center lg:order-1 lg:py-8'>
            {left_heading}
            {form_wrapper}
        </div>
    );
    const right_container = (
        <div className='grid grid-rows-3 py-8 bg-green-600 justify-items-center lg:order-2 lg:grid-rows-6'>
            {right_header}
            {right_content_wrapper}
        </div>
    );
    const heading_above_main_content = (
        <h1 className='mb-8 text-2xl text-center '>
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
    const loadingSpinner = (
        <div className=' flex h-[75vh] w-full flex-col items-center justify-center'>
            <img src='/loading.gif' alt='' />
            <h2 className='text-3xl font-bold text-coastal-blue-9'>
                Einen Moment...
            </h2>
        </div>
    );
    const page_container = (
        <section className='flex flex-col items-center justify-center w-full min-h-screen lg:h-fit lg:min-h-0 lg:pt-8'>
            {loading && loadingSpinner}
            {!loading && heading_above_main_content}
            {!loading && main_content_wrapper}
        </section>
    );

    return page_container;
}
