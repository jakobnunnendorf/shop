import React from 'react';

export default function Cancel({
    toggleColorDialogue,
}: {
    toggleColorDialogue: () => void;
}) {
    const cancel = (
        <button
            onClick={toggleColorDialogue}
            className='px-4 py-2 border border-red-500 rounded-lg'
        >
            Abbrechen
        </button>
    );
    return cancel;
}
