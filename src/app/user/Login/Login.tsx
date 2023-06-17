import React, { useState } from 'react';

export default function Login({ supabaseClient }: { supabaseClient: any }) {
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

    const left_heading = (
        <h2 className='row-span-1 text-2xl font-bold text-center'>
            Deine Infos
        </h2>
    );
    const form_wrapper = (
        <form className='grid w-4/5 grid-cols-12 grid-rows-5 row-span-5 gap-4 '>
            <input
                type='text'
                placeholder='Vorname'
                className='col-span-6 row-start-1 px-4 rounded-3xl'
                name='name'
                value={registrationInfo.name}
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='Nachname'
                className='col-span-7 col-start-7 row-start-1 px-4 rounded-3xl'
                name='lastName'
                value={registrationInfo.lastName}
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='E-Mail'
                className='col-span-7 row-start-2 px-4 rounded-3xl'
                name='email'
                value={registrationInfo.email}
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='Telefon'
                className='col-span-6 row-start-2 px-4 rounded-3xl'
                name='phone'
                value={registrationInfo.phone}
                onChange={handleInputChange}
            />
            <input
                type='text'
                placeholder='Passwort'
                className='col-span-6 row-start-3 px-4 rounded-3xl'
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
            <div className='flex flex-col items-center col-span-12 col-start-2 row-span-2 '>
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
        <h2 className='row-span-1 text-2xl font-bold text-center text-white '>
            {login_not_registration
                ? 'Einfach anmelden'
                : 'Noch keinen Account?'}
        </h2>
    );
    const right_content_wrapper = (
        <div className='w-4/5 row-span-5 '>
            <div className='font-bold text-center text-white '>
                {login_not_registration ? `Anmelden` : 'Registrieren'} und
                zurücklehnen. <br />
                Wir haben alles,
                <br /> was dein Handy braucht.
            </div>
            <div className='flex flex-col row-span-4 py-8'>
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
        <div className='grid grid-rows-6 py-8 justify-items-center lg:order-1'>
            {left_heading}
            {form_wrapper}
        </div>
    );
    const right_container = (
        <div className='grid grid-rows-6 py-8 bg-green-600 justify-items-center lg:order-2'>
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
    const page_container = (
        <section className='flex flex-col items-center justify-center w-full min-h-screen py-24 lg:h-screen xl:h-screen 2xl:h-screen'>
            {heading_above_main_content}
            {main_content_wrapper}
        </section>
    );

    return page_container;
}
