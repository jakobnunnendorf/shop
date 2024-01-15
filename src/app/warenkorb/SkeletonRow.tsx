'use client';

import React from 'react';

export default function SkeletonRow() {
    return (
        <div className='justify-between p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start'>
            <div className='w-24 h-20 bg-gray-100 rounded-lg'></div>
            <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div className='mt-5 space-y-2 sm:mt-0'>
                    <div className='w-64 h-8 text-lg font-bold bg-gray-100 rounded-lg '></div>
                    <div className='w-40 h-4 mt-1 text-xs bg-gray-100 rounded-lg'></div>
                    <div className='w-48 h-4 mt-1 text-xs bg-gray-100 rounded-lg'></div>
                </div>
                <div className='flex justify-between mt-4 sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
                    <div className='flex items-center border-gray-100'>
                        <span className='cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 text-gray-300 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                            {' '}
                            -{' '}
                        </span>
                        <input
                            className='w-8 h-8 text-xs text-center text-gray-300 bg-white border outline-none'
                            type='number'
                            min='1'
                        />
                        <span className='px-3 py-1 text-gray-300 duration-100 bg-gray-100 rounded-r cursor-pointer hover:bg-blue-500 hover:text-blue-50'>
                            {' '}
                            +{' '}
                        </span>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <div className='text-sm'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
