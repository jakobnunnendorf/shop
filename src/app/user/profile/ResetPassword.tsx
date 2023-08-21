// TODO: implement type safety and check for validity of inputs
// TODO: add a field for additional address information

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useContext, useEffect, useState } from 'react';
import {
    ProfileInfoContext,
    ProfileInfoContextType,
} from '@globalState/ProfileInfoContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ResetPassword() {
    // fetch pre existing profile data just to display as placeholders
    const [password, setPassword] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState<string | null>(null);
    const supabase = createClientComponentClient();
    const { toggleResetPassword } = useContext(
        ProfileInfoContext
    ) as ProfileInfoContextType;

    const profile_inputs = (
        <div className='grid grid-cols-12 gap-8 '>
            <h1 className='col-span-12 flex justify-center text-2xl font-medium'>
                Reset Password
            </h1>
            <input
                type='password'
                name='password'
                placeholder={'Neues Passwort eingeben'}
                className='col-span-12 rounded-lg border px-2 py-2'
                required
            />
            <input
                type='password'
                name='confirm_password'
                placeholder={'Bestätige neues Passwort'}
                className='col-span-12 rounded-lg border px-2 py-2'
                required
            />
        </div>
    );

    const button_row = (
        <div className='mt-2 flex justify-center space-x-8'>
            <button
                type='button'
                onClick={toggleResetPassword}
                className='flex w-36 justify-center rounded-xl border border-coastal-blue-10 px-4 py-2 font-bold text-coastal-blue-10 '
            >
                Abbrechen
            </button>
            <button
                type='submit'
                className={`flex w-36 justify-center space-x-2 rounded-xl bg-coastal-blue-10 px-4 py-2 font-bold text-white`}
            >
                <span>Speichern</span>
            </button>
        </div>
    );

    async function handleSubmit(formData: FormData) {
        if (formData.get('password') === formData.get('confirm_password')) {
            const { error } = await supabase.auth.updateUser({
                password: `${formData.get('password')}`,
            });
            if (error) {
                toast.error('Passwort ist bereits aktualisiert!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            } else {
                toast.success('Passwort erfolgreich aktualisiert!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        } else {
            toast.error(
                'Bestätigen Sie, dass das Passwort nicht mit dem Passwort übereinstimmt!',
                {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                }
            );
        }
    }

    const content = (
        <form action={handleSubmit}>
            <ToastContainer />
            <section className='w-full h-full p-8 space-y-4 text-xl border rounded-3xl lg:w-fit'>
                {profile_inputs}
            </section>
            {button_row}
        </form>
    );
    return content;
}
