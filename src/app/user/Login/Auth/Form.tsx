'use client';
import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
export default function Form({
    hasAccount,
    toggleHasAccount,
}: {
    hasAccount: boolean;
    toggleHasAccount: () => void;
}) {
    const form = hasAccount ? (
        <LoginForm toggleHasAccount={toggleHasAccount} />
    ) : (
        <RegistrationForm toggleHasAccount={toggleHasAccount} />
    );
    return form;
}
