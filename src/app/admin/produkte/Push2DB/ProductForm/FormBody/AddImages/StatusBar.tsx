import React from 'react';

export default function StatusBar({ status }: { status: string }) {
    const showcase = (
        <h3 className='font-mono font-bold tracking-widest text-blue-400'>
            Showcase Mode
        </h3>
    );
    const preview = (
        <h3 className='font-mono font-bold tracking-widest text-yellow-400'>
            Preview Mode
        </h3>
    );
    const edit = (
        <h3 className='font-mono font-bold tracking-widest text-orange-400'>
            Edit Mode
        </h3>
    );

    const ready = (
        <h3 className='font-mono font-bold tracking-widest text-green-400'>
            Ready to upload
        </h3>
    );

    return (
        <div className='absolute z-20 translate-x-1/2 right-1/2 top-2'>
            {status === 'showcase'
                ? showcase
                : status === 'preview'
                ? preview
                : status === 'ready'
                ? ready
                : edit}
        </div>
    );
}
