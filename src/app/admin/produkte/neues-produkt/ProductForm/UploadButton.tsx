import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';

export default function UploadButton() {
    /*
     {loading && (
                <div
                    className={`absolute z-50 grid h-48 w-48 border bg-white text-xl font-bold text-green-400 ${
                        success
                            ? 'border-green-400'
                            : loading
                            ? 'border-seafoam-green-7'
                            : ''
                    } left-1/2 top-1/2 place-content-center rounded-lg`}
                >
                    <div className='flex'>
                        <p> Loading...</p>{' '}
                    </div>
                </div>
            )}
            {success && (
                <div
                    className={`absolute z-50 grid h-48 w-48 border bg-white text-xl font-bold text-green-400 ${
                        success
                            ? 'border-green-400'
                            : loading
                            ? 'border-seafoam-green-7'
                            : ''
                    } left-1/2 top-1/2 place-content-center rounded-lg`}
                >
                    {success && (
                        <div className='flex'>
                            <p> success</p>{' '}
                            <FiCheck className='text-2xl text-green-400' />
                        </div>
                    )}
                </div>
            )}
    */
    const uploadButton = (
        <div className='flex items-center justify-end w-full h-20 px-4 lg:px-12 lg:mt-4 '>
            <button
                type='submit'
                className='flex items-center px-2 py-1 space-x-2 border-2 border-green-400 rounded-xl'
            >
                <div className='text-green-800'>
                    <span className='hidden lg:inline'>Hochladen</span>
                </div>
                <FiUploadCloud className='text-green-800' />
            </button>
        </div>
    );
    return uploadButton;
}
