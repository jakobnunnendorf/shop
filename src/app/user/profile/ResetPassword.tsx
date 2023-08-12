// TODO: implement type safety and check for validity of inputs
// TODO: add a field for additional address information

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useContext, useEffect, useState } from 'react';
import {
    ProfileInfoContext,
    ProfileInfoContextType,
} from '@globalState/ProfileInfoContext';
import { ToastContainer, toast } from 'react-toastify';
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
            <h1 className='flex justify-center col-span-12 text-2xl font-medium'>
                Reset Password
            </h1>
            <input
                type='password'
                name='password'
                placeholder={'Neues Passwort eingeben'}
                className='col-span-12 border rounded-lg px-2 py-2'
                required
            />
            <input
                type='password'
                name='confirm_password'
                placeholder={'Bestätige neues Passwort'}
                className='col-span-12 border rounded-lg px-2 py-2'
                required
            />
        </div>
    );

    const button_row = (
        <div className='flex space-x-8 mt-2 justify-center'>
            <button
                type='button'
                onClick={toggleResetPassword}
                className='flex justify-center px-4 py-2 font-bold border w-36 rounded-xl border-coastal-blue-10 text-coastal-blue-10 '
            >
                Abbrechen
            </button>
            <button
                type='submit'
                className={`flex justify-center px-4 py-2 space-x-2 font-bold text-white w-36 rounded-xl bg-coastal-blue-10`}
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
