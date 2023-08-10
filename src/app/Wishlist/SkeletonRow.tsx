import React from 'react';

export default function SkeletonRow() {
    return (
        <div className='mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
            <div className='h-20 w-24 rounded-lg bg-gray-100'></div>
            <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div className='mt-5 space-y-2 sm:mt-0'>
                    <div className='h-8 w-64 rounded-lg bg-gray-100 text-lg font-bold '></div>
                    <div className='mt-1 h-4 w-40 rounded-lg bg-gray-100 text-xs'></div>
                    <div className='mt-1 h-4 w-48 rounded-lg bg-gray-100 text-xs'></div>
                </div>
                <div className='mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
                    <div className='flex items-center space-x-4'>
                        <div className='text-sm'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
