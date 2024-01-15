import { uniqueId } from 'lodash';
import React from 'react';
import { FiPlus } from 'react-icons/fi';

export default function AddColorButton({
    toggleColorDialogue,
}: {
    toggleColorDialogue: () => void;
}) {
    const addColorButton = (
        <button type='button' onClick={toggleColorDialogue}>
            <li
                key={uniqueId()}
                className='grid w-6 h-6 border rounded-full place-content-center'
            >
                <FiPlus className='text-slate-500' />
            </li>
        </button>
    );
    return addColorButton;
}
