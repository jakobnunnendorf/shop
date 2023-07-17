import React, { Dispatch } from 'react';
import { FiCheck, FiEdit2, FiX } from 'react-icons/fi';

export default function ControlBar({
    status,
    setStatus,
}: {
    status: string;
    setStatus: Dispatch<
        React.SetStateAction<'showcase' | 'preview' | 'edit' | 'explain'>
    >;
}) {
    const confirmPicture = () => {
        setStatus('showcase');
    };
    const editPicture = () => {
        setStatus('edit');
    };
    const backToShowcase = () => {
        setStatus('showcase');
    };

    const duringEdit = (
        <button
            onClick={backToShowcase}
            type='button'
            className='space-x-4 rounded-full bg-sandy-beige-1 px-2 py-1 backdrop-blur-3xl'
        >
            <p>cancel</p> <FiX />
        </button>
    );

    const duringPreview = (
        <div className='space-x-4 rounded-full bg-sandy-beige-1 px-2 py-1 backdrop-blur-3xl'>
            <button type='button' onClick={editPicture}>
                <FiX className='inline-block h-6 w-6 text-red-500' />
            </button>
            <button type='button' onClick={confirmPicture}>
                <FiCheck className='inline-block h-6 w-6 text-green-500' />
            </button>
        </div>
    );
    const duringShowcase = (
        <button
            type='button'
            onClick={editPicture}
            className='flex items-center space-x-1 rounded-full bg-sandy-beige-1 px-2 py-1 backdrop-blur-3xl'
        >
            <p>Edit Mode</p>
            <FiEdit2 className=' text-slate-500' />
        </button>
    );
    return (
        <div className='absolute right-6 top-6 z-50'>
            {status === 'showcase'
                ? duringShowcase
                : status === 'edit'
                ? duringEdit
                : duringPreview}
        </div>
    );
}
