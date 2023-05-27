import React from 'react';
import PropTypes from 'prop-types';
import {FaLock, FaUser} from 'react-icons/fa';
import {LoginFrame} from './LoginContainer/LoginFrame';
import {SignupContainer} from './SignupContainer/SignupContainer';

export const ComponentFrame = () => (
	<div className='bg-white rounded-2xl shadow-2xl h-fit mb-36 flex w-full lg:max-w-4xl flex-col-reverse md:flex-row'>
		{/* container for login/signup component */}
		<LoginFrame />
		<SignupContainer />
	</div>
);
