'use client';

import React, {type FormEvent} from 'react';
import {FaLock, FaUser} from 'react-icons/fa';
import {useRouter} from 'next/navigation';

export default function Login() {
	const router = useRouter();
	const handleLogin = (inputUsername: string, inputPassword: string) => {
		// Check if the username and password are correct.
		if (inputUsername === 'ismail' && inputPassword === 'sml919') {
			router.push('/home');
			// Perform any other actions upon successful login
		} else {
			// Display error message within the UI or log the error
			console.error('Invalid username or password.');
		}
	};

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const username = e.currentTarget.username.value as string;
		const password = e.currentTarget.password.value as string;
		handleLogin(username, password);
	};

	return (
		<div className='py-10 text-black'>
			<h2 className='mb-2 text-3xl font-bold text-green-500'>Sign in</h2>
			<div className='mb-2 inline-block w-10 border-2 border-green-500'></div>
			<form className='flex flex-col items-center' onSubmit={handleFormSubmit}>
				<div className='mb-3 flex w-64 items-center bg-gray-100 p-2'>
					<FaUser className='m-2 text-gray-400' />
					<input
						type='text'
						name='username'
						placeholder='Username'
						className='flex-1 bg-gray-100 text-sm outline-none'
					/>
				</div>
				<div className='mb-2 flex w-64 items-center bg-gray-100 p-2'>
					<FaLock className='m-2 text-gray-400' />
					<input
						type='password'
						name='password'
						placeholder='Password'
						className='flex-1 bg-gray-100 text-sm outline-none'
					/>
				</div>
				<div className='flex w-64 items-center bg-gray-100 p-2'>
					<input
						type='submit'
						value='Submit'
						className='flex-1 bg-gray-100 text-sm outline-none'
					/>
				</div>
			</form>
		</div>
	);
}
