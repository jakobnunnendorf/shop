import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CartIcon from './CartIcon';
import MobileMenuBurger from './MobileMenuBurger';
import UserHeaderLink from './UserHeaderLink';

export default function UpperRow() {
    const upper_row = (
        <section className='top-0 pr-0 h-24 w-full border-b bg-sandy-beige-5 py-2 shadow-sm backdrop-blur-3xl lg:shadow-none'>
            <div className='grid h-full w-full grid-cols-12'>
                <div className='col-span-2  h-full pl-2 pr-2 mt-2 sm:ml-2 sm:mt-2 xl:px-12'>
                    <MobileMenuBurger />
                    <nav className='hidden h-full w-full items-center lg:flex'>
                        <ul className='flex w-full justify-between font-bold text-coastal-blue-10'>
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                            <Link className='ml-2' href='/shop'>
                                <li >Shop</li>
                            </Link>
                            <Link className='ml-2' href='/Hilfe'>
                                <li>Hilfe</li>
                            </Link>
                        </ul>
                    </nav>
                </div>

                 { /*<div className="flex  col-span-7 h-16 mt-4 overflow-hidden rounded-3xl border border-coastal-blue-3  px-2 sm:col-span-5 sm:h-6"> */}
                    <div className="pl-2 flex col-span-6 h-10 mt-2 overflow-hidden rounded-3xl border border-coastal-blue-3 sm:h-16 sm:col-span-7" >
                    <div className=' relative   h-12 w-10 sm:my-0 sm:w-1/5'>
                        <Link href='/' className=''>
                            <Image className='h-10 w-10 pr-1 sm:h-12 sm:w-10 sm:mt-2'
                                src='/p2d_logo.png'
                                alt='Phone2Door Handyzubehör Online shop Logo'
                                fill={true}
                                objectFit='contain'
                             />
                        </Link>
                    </div>
                    <input
                        type='text'
                        placeholder='Suche...'
                        className='h-full w-full border-l border-coastal-blue-3 bg-transparent text-center placeholder-coastal-blue-10 outline-none placeholder:text-sm'
                    />
                </div>
                <nav className=' col-span-3 ml-3 flex  h-12 justify-around mt-4 sm:pr-1  lg:pr-4'>
                    <div className='h-10 w-7  sm:h-12 sm:w-10'>
                    <CartIcon  /> 
                    </div>
                    <div className='ml-0 h-8 w-6 pl-3 sm:h-12 sm:w-10 '>
                 <UserHeaderLink />
                    </div>
                </nav>
            </div>
        </section>        
    );
    return upper_row;
}
