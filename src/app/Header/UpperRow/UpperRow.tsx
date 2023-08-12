import Link from 'next/link';
import React from 'react';

import CartIcon from './CartIcon';
import MobileMenuBurger from './MobileMenuBurger';
import SearchBar from './SearchBar';
import UserHeaderLink from './UserHeaderLink';
// import SearchResults from './SearchResults';
import WishlistIcon from './WishlistIcon';

export default function UpperRow() {
    const upper_row = (
        <section className='top-0 w-full h-20 py-2 border-b shadow-sm bg-sandy-beige-5 backdrop-blur-3xl lg:shadow-none'>
            <div className='grid w-full h-full grid-cols-12'>
                <div className='h-full col-span-3 pl-4 pr-8 xl:px-12'>
                    <MobileMenuBurger />
                    <nav className='items-center hidden w-full h-full lg:flex'>
                        <ul className='flex justify-between w-full font-bold text-coastal-blue-10'>
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

                <div className='hidden lg:block'>
                    <SearchBar />
                </div>

                <nav className='flex justify-around h-full col-span-6 col-start-7 lg:col-span-3 lg:justify-end lg:space-x-8 lg:pr-8'>
                    <WishlistIcon />
                    <CartIcon />
                    <UserHeaderLink />
                </nav>
            </div>
            {/* <SearchResults /> */}
        </section>
    );
    return upper_row;
}
