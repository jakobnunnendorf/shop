import React from 'react';

export default function StatusBar({
    state,
}: {
    state: UploadProductFormState;
}) {
    let statusHeader, color;
    switch (state.message) {
        case 'showcase':
            statusHeader = 'Showcase Mode';
            color = 'blue';
            break;
        case 'preview':
            statusHeader = 'Preview Mode';
            color = 'yellow';
            break;
        case 'edit':
            statusHeader = 'Edit Mode';
            color = 'orange';
            break;
        case 'ready':
            statusHeader = 'Ready to upload';
            color = 'green';
            break;

        default:
            break;
    }

    return (
        <div className='absolute z-20 translate-x-1/2 right-1/2 top-2'>
            <h3
                className={`font-mono font-bold tracking-widest text-${color}-400`}
            >
                {statusHeader}
            </h3>
        </div>
    );
}
