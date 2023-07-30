import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CartIcon from './CartIcon';
import MobileMenuBurger from './MobileMenuBurger';
import UserHeaderLink from './UserHeaderLink';
import SearchInput from './SearchInput';

export default function UpperRow() {
    const upper_row = (
        <section className='top-0 h-16 w-full border-b bg-sandy-beige-5 py-2 shadow-sm backdrop-blur-3xl lg:shadow-none'>
            <div className='grid h-full w-full grid-cols-12'>
                <div className='col-span-3 h-full pl-4 pr-8 xl:px-12'>
                    <MobileMenuBurger />
                    <nav className='hidden h-full w-full items-center lg:flex'>
                        <ul className='flex w-full justify-between font-bold text-coastal-blue-10'>
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                            <Link href='/shop'>
                                <li>Shop</li>
                            </Link>
                            <Link href='/Hilfe'>
                                <li>Hilfe</li>
                            </Link>
                        </ul>
                    </nav>
                </div>

                <div className='col-span-6 flex h-full overflow-hidden rounded-3xl border border-coastal-blue-3 px-2'>
                    <div className='relative h-12 w-24'>
                        <Link href='/' className=''>
                            <Image
                                src='/p2d_logo.png'
                                alt='Phone2Door Handyzubehör Online shop Logo'
                                fill={true}
                                objectFit='contain'
                            />
                        </Link>
                    </div>
                    <SearchInput />
                </div>

                <nav className='col-span-3 flex h-full justify-around lg:justify-end lg:space-x-8 lg:pr-8'>
                    <CartIcon />
                    <UserHeaderLink />
                </nav>
            </div>
        </section>
    );
    return upper_row;
}