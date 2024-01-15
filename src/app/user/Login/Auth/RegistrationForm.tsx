'use client';
import React from 'react';
import SubmitButton from './SubmitButton';
import ToggleButton from './ToggleButton';
import { handleSignup } from './handleSignup';
import { useFormState } from 'react-dom';

export default function RegistrationForm({
    toggleHasAccount,
}: {
    toggleHasAccount: () => void;
}) {
    const [state, formAction] = useFormState(handleSignup, {
        message: '',
        errors: {},
    });
    const registrationForm = (
        <form
            action={formAction}
            className={'row-span-5 grid-rows-5 grid w-4/5 grid-cols-12 gap-4'}
        >
            <input // first name
                type='text'
                placeholder='Vorname'
                className='col-span-12 row-start-1 px-4 set-height rounded-3xl'
                name='firstName'
                required
            />

            <input // last name
                type='text'
                placeholder='Nachname'
                className='col-span-12 col-start-1 row-start-2 px-4 set-height rounded-3xl'
                name='lastName'
            />
            <input // email
                type='email'
                placeholder='E-Mail'
                className={
                    'set-height col-span-12 row-start-3 rounded-3xl px-4'
                }
                name='email'
                required
            />
            <input // phone
                type='text'
                placeholder='Telefon'
                className='col-span-12 row-start-4 px-4 set-height rounded-3xl'
                name='phone'
            />
            <input // password
                type='password'
                placeholder='Passwort'
                className={
                    'set-height col-span-12 row-start-5  rounded-3xl px-4'
                }
                name='password'
                required
            />

            <input
                type='password'
                placeholder='Wiederholen'
                className={`set-height ${
                    state.errors.passwordsDontMatch
                        ? 'border-2 border-red-300'
                        : ''
                } col-span-12 row-start-6 rounded-3xl px-4 outline-none`}
                name='confirmPassword'
                required
            />
            <div className='flex flex-col items-center col-span-12 col-start-1 row-span-2 '>
                <SubmitButton hasAccount={false} />
                <ToggleButton
                    hasAccount={false}
                    toggleHasAccount={toggleHasAccount}
                />
            </div>
        </form>
    );
    return registrationForm;
}
