'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React, { Dispatch, FormEvent, SetStateAction, useContext } from 'react';
import {
    SessionContext,
    SessionContextType,
} from '@globalState/SessionContext';
import { UserContext, UserContextType } from '@globalState/UserContext';

export default function Form({
    hasAccount,
    toggleHasAccount,
    setLoading,
}: {
    hasAccount: boolean;
    toggleHasAccount: Dispatch<SetStateAction<boolean>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
}) {
    const router = useRouter();
    const { setSession, setUser } = useContext(
        SessionContext
    ) as SessionContextType;    const { registrationInfo, setRegistrationInfo } = useContext(
        UserContext
    ) as UserContextType;

    const supabase = createClientComponentClient();

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

    const handleRegistration = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const { data: userSignupData, error: userSignupError } =
            await supabase.auth.signUp({
                email: registrationInfo.email,
                password: registrationInfo.password,
            });
        const id_of_new_user = userSignupData?.user?.id;
        const profile_data = {
            firstName: registrationInfo.firstName,
            lastName: registrationInfo.lastName,
            phone: registrationInfo.phone,
        };
        const { error: addedProfileError } = await supabase
            .from('profiles')
            .update(profile_data)
            .eq('profile_id', id_of_new_user);
        if (!userSignupError && !addedProfileError) {
            setRegistrationInfo(registrationInfo);
            router.push('/user/signup-success');
        } else {
            alert('Es ist ein Fehler aufgetreten. Bitte versuche es erneut.');
            setLoading(false);
        }
    };

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: registrationInfo.email,
            password: registrationInfo.password,
        });
        const {session, user} = data
        if (!error) {
            setSession(session);
            setUser(user);
        } else {
            alert('Es ist ein Fehler aufgetreten. Bitte versuche es erneut.');
        }
        router.refresh();
    };

    const form = (
        <form
            onSubmit={hasAccount ? handleLogin : handleRegistration}
            className={` ${
                hasAccount
                    ? 'row-span-3 row-start-3 grid-rows-3'
                    : 'row-span-5 grid-rows-5'
            } grid w-4/5 grid-cols-12 gap-4`}
        >
            {hasAccount ? null : (
                <input // first name
                    type='text'
                    placeholder='Vorname'
                    className='col-span-6 row-start-1 px-4 rounded-3xl'
                    name='firstName'
                    value={registrationInfo.firstName}
                    onChange={handleInputChange}
                />
            )}
            {hasAccount ? null : (
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
                    hasAccount
                        ? 'col-span-6 row-start-1'
                        : 'col-span-7 row-start-2 '
                }  rounded-3xl px-4`}
                name='email'
                value={registrationInfo.email}
                onChange={handleInputChange}
            />
            {hasAccount ? null : (
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
                    hasAccount ? 'col-span-6 row-start-1' : 'row-start-3 '
                }  rounded-3xl px-4`}
                name='password'
                value={registrationInfo.password}
                onChange={handleInputChange}
            />
            {hasAccount ? null : (
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
                    {hasAccount ? 'Jetzt einloggen' : 'Jetzt Registrieren'}
                </button>
                <button
                    type='button'
                    className='mt-2 underline outline-none text-slate-500'
                    onClick={() => toggleHasAccount(!hasAccount)}
                >
                    Ich habe {hasAccount ? 'noch keinen' : 'schon einen'}{' '}
                    Account: <br />
                    {hasAccount ? 'jetzt registrieren' : 'zum login'}
                </button>
            </div>
        </form>
    );
    return form;
}
