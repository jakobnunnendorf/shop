'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React, { Dispatch, FormEvent, SetStateAction, useContext } from 'react';
import {
    SessionContext,
    SessionContextType,
} from '@globalState/SessionContext';
import { UserContext, UserContextType } from '@globalState/UserContext';
import Reset_button from './reset_button';
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
    ) as SessionContextType;
    const { registrationInfo, setRegistrationInfo } = useContext(
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

        const { session, user } = data;
        if (!error) {
            setSession(session);
            setUser(user);
        } else {
            alert('Es ist ein Fehler aufgetreten. Bitte versuche es erneut.');
            setLoading(false);
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
                    className='col-span-12 row-start-1 px-4 set-height rounded-3xl'
                    name='firstName'
                    value={registrationInfo.firstName}
                    onChange={handleInputChange}
                    required
                />
            )}
            {hasAccount ? null : (
                <input // last name
                    type='text'
                    placeholder='Nachname'
                    className='col-span-12 col-start-1 row-start-2 px-4 set-height rounded-3xl'
                    name='lastName'
                    value={registrationInfo.lastName}
                    onChange={handleInputChange}
                />
            )}
            <input // email
                type='email'
                placeholder='E-Mail'
                className={`set-height${
                    hasAccount
                        ? ' col-span-12 row-start-1'
                        : ' col-span-12 row-start-3 '
                }  rounded-3xl px-4`}
                name='email'
                value={registrationInfo.email}
                onChange={handleInputChange}
                required
            />
            {hasAccount ? null : (
                <input // phone
                    type='text'
                    placeholder='Telefon'
                    className='col-span-12 row-start-4 px-4 set-height rounded-3xl'
                    name='phone'
                    value={registrationInfo.phone}
                    onChange={handleInputChange}
                />
            )}
            <input // password
                type='password'
                placeholder='Passwort'
                className={`set-height col-span-12 ${
                    hasAccount ? 'col-span-12 row-start-2' : 'row-start-5 '
                }  rounded-3xl px-4`}
                name='password'
                value={registrationInfo.password}
                onChange={handleInputChange}
                required
            />
            {hasAccount ? null : (
                <input
                    type='password'
                    placeholder='Wiederholen'
                    className={`set-height ${
                        registrationInfo.confirmPassword.length > 0
                            ? registrationInfo.password ===
                              registrationInfo.confirmPassword
                                ? 'border-2 border-green-300'
                                : 'border-2 border-red-300'
                            : ''
                    } col-span-12 row-start-6 rounded-3xl px-4 outline-none`}
                    name='confirmPassword'
                    value={registrationInfo.confirmPassword}
                    onChange={handleInputChange}
                    required
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
                    Account? <br />
                </button>
                {hasAccount ? <Reset_button /> : null}
            </div>
        </form>
    );
    return form;
}
