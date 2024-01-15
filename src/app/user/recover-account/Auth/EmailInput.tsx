import React from 'react';

export default function EmailInput({
    state,
}: {
    state: {
        message: string;
        errors: object;
    };
}) {
    const emailInput = (
        <label>
            <input // email
                type='email'
                name='email'
                placeholder='E-Mail'
                className='col-span-12 row-start-1 px-4 set-height rounded-3xl '
                required
            />
            <p
                className={`pt-1 text-center ${
                    Object.keys(state.errors).length > 0
                        ? 'text-red-400'
                        : 'text-green-400'
                }`}
            >
                {state.message}
            </p>
        </label>
    );
    return emailInput;
}
