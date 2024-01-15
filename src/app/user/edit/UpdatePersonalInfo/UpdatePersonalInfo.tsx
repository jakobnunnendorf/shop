import React from 'react';
import ProfileInputField from './ProfileInputField';

export default function UpdatePersonalInfo() {
    const inputFields = [
        { fieldName: 'Vorname', name: 'firstName' },
        { fieldName: 'Nachname', name: 'lastName' },
        {
            fieldName: 'Email',
            name: 'email',
        },
        { fieldName: 'Telefon', name: 'phone' },
    ];
    const updatePersonalInfo = (
        <ul className='relative grid w-full grid-cols-2 gap-8 p-8 text-xl border h-fit rounded-3xl lg:w-fit'>
            {inputFields.map((inputField) => (
                <li>
                    <ProfileInputField
                        heading={inputField.fieldName}
                        name={inputField.name}
                    />
                </li>
            ))}
        </ul>
    );
    return updatePersonalInfo;
}
