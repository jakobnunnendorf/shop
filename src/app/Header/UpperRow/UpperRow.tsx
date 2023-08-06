import Link from 'next/link';
import React from 'react';

import CartIcon from './CartIcon';
import MobileMenuBurger from './MobileMenuBurger';
import UserHeaderLink from './UserHeaderLink';
import WishlistIcon from './WishlistIcon';
import SearchBar from '../SearchBar/SearchBar';

export default function UpperRow() {
    const upper_row = (
        <section className='top-0 h-20 w-full border-b bg-sandy-beige-5 py-2 shadow-sm backdrop-blur-3xl lg:h-16 lg:shadow-none'>
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

                <div className='hidden lg:col-span-6 lg:block'>
                    <SearchBar />
                </div>

                <nav className='col-span-6 col-start-7 flex h-full justify-around lg:col-span-3 lg:justify-end lg:space-x-8 lg:pr-8'>
                    <WishlistIcon />
                    <CartIcon />
                    <UserHeaderLink />
                </nav>
            </div>
        </section>
    );
    return upper_row;
}
