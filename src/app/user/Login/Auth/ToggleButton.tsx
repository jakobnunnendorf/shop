import React from 'react';

export default function ToggleButton({
    toggleHasAccount,
    hasAccount,
}: {
    toggleHasAccount: () => void;
    hasAccount: boolean;
}) {
    const toggleButton = (
        <button
            type='button'
            className='mt-2 underline outline-none text-slate-500'
            onClick={toggleHasAccount}
        >
            Ich habe {hasAccount ? 'noch keinen' : 'schon einen'} Account?{' '}
            <br />
        </button>
    );
    return toggleButton;
}
