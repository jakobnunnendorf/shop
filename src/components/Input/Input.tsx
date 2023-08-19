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
        <div className={`relative w-full  ${colspan} ${rowspan} h-full `}>
            <label
                htmlFor={randomId}
                className='relative px-2 bg-white top-4 left-4 w-fit text-coastal-blue-10 '
            >
                {label}
            </label>
            {inputType === 'textarea' ? (
                <textarea
                    id={randomId}
                    name={label}
                    className='w-full py-2 bg-white border-2 h-4/5 lg:px-4 rounded-xl border-coastal-blue-6'
                />
            ) : (
                <input
                    type={inputType}
                    id={randomId}
                    name={label}
                    className='top-0 w-full py-2 bg-white border-2 lg:px-4 rounded-xl border-coastal-blue-6'
                />
            )}
        </div>
    );
}
