'use client';
import React from 'react';
import SubmitButton from './SubmitButton';
import ToggleButton from './ToggleButton';
import ResetButton from './resetButton';
import { handleLogin } from './handleLogin';
import { useFormState } from 'react-dom';

export default function LoginForm({
    toggleHasAccount,
}: {
    toggleHasAccount: () => void;
}) {
    const [state, formAction] = useFormState(handleLogin, {
        message: '',
        errors: {},
    });
    const loginForm = (
        <form
            action={formAction}
            className={` ${'row-span-3 row-start-3 grid-rows-3'} grid w-4/5 grid-cols-12 gap-4`}
        >
            <input // email
                type='email'
                placeholder='E-Mail'
                className={`set-height${' col-span-12 row-start-1'}  rounded-3xl px-4`}
                name='email'
                required
            />
            <input // password
                type='password'
                placeholder='Passwort'
                className={`set-height col-span-12 ${'col-span-12 row-start-2'}  rounded-3xl px-4`}
                name='password'
                required
            />
            <p>{state.message}</p>
            <div className='flex flex-col items-center col-span-12 col-start-1 row-span-2 '>
                <SubmitButton hasAccount />
                <ToggleButton hasAccount toggleHasAccount={toggleHasAccount} />
                <ResetButton />
            </div>
        </form>
    );
    return loginForm;
}
