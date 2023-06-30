import React from 'react';

export default function SkeletonRow() {
    return (
        <div className='mb-6 w-full justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
            <figure className='relative h-24 w-full overflow-hidden rounded-lg bg-slate-100 sm:w-40'></figure>
            <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                <div className='mt-5 space-y-2 sm:mt-0'>
                    <div className='h-8 w-48 rounded-lg bg-slate-100'></div>
                    <div className='h-3 w-36 rounded-lg bg-slate-100'></div>
                    <div className='h-3 w-40 rounded-lg bg-slate-100'></div>
                </div>
                <div className='mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
                    <div className='flex items-center border-gray-100'>
                        <div className='h-8 cursor-pointer rounded-l-lg bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                            {' '}
                        </div>
                        <div className='h-8 cursor-pointer rounded-r-lg bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50'>
                            {' '}
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <p className='h-8 w-12 rounded-lg bg-slate-100 text-sm'></p>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
                        ></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
