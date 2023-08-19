import React from 'react';

export default function Input({
    label,
    colspan,
    rowspan,
    inputType = 'text',
}: {
    label: string;
    colspan?: string;
    rowspan?: string;
    inputType?: string;
}) {
    const randomId = Math.random().toString(36).substring(7);
    return (
        <label
            htmlFor={randomId}
            className={`w-full  ${colspan} ${rowspan} h-full`}
        >
            <p className='relative px-2 bg-white -translate-y-1/3 left-4 top-1/3 w-fit text-coastal-blue-10'>
                {label}
            </p>
            {inputType === 'textarea' ? (
                <textarea
                    id={randomId}
                    name={label}
                    className='w-full py-2 bg-white border-2 lg:px-4 rounded-xl border-coastal-blue-6'
                />
            ) : (
                <input
                    type={inputType}
                    id={randomId}
                    name={label}
                    className='w-full py-2 bg-white border-2 lg:px-4 rounded-xl border-coastal-blue-6'
                />
            )}
        </label>
    );
}
