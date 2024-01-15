import React from 'react';

export default function ProfileInputField({
    heading,
    name,
    placeholder,
}: {
    heading: string;
    name: string;
    placeholder?: string;
}) {
    const profileInputField = (
        <div>
            <span className='font-bold'>{heading}: </span>
            <br />
            <input
                type='text'
                name={name}
                className={`w-full border rounded-lg`}
                placeholder={placeholder}
            />
        </div>
    );
    return profileInputField;
}
