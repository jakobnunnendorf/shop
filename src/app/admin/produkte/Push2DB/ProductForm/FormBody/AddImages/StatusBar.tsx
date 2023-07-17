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

    return (
        <div className='absolute right-1/2 top-2 z-50 translate-x-1/2'>
            {status === 'showcase'
                ? showcase
                : status === 'preview'
                ? preview
                : edit}
        </div>
    );
}
