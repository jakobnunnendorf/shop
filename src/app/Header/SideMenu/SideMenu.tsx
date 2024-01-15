'use client';

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import {
    MobileMenuContext,
    MobileMenuContextType,
} from '@globalState/MobileMenuContext';
import { productCategories } from '@lib/fetchProductData';
import { uniqueId } from 'lodash';

export default function SideMenu() {
    const { isOpen, toggleOpen } = useContext(
        MobileMenuContext
    ) as MobileMenuContextType;

    const [showShopLinks, setShowShopLinks] = useState(false);
    return (
        <aside
            className={`fixed top-20 z-50 h-screen w-[66vw] bg-sandy-beige-3 px-4 py-16 text-coastal-blue-9 backdrop-blur-3xl transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <nav className=' h-[70vh]'>
                <ul className='flex flex-col justify-around h-full pr-4 text-3xl font-bold'>
                    <li key={uniqueId()} className='py-4 '>
                        <Link onClick={toggleOpen} href='/'>
                            Home
                        </Link>
                    </li>
                    <li
                        key={uniqueId()}
                        className='flex flex-col items-start justify-between py-4 '
                    >
                        <div className='flex'>
                            <Link
                                onClick={toggleOpen}
                                href='/shop'
                                className='underline '
                            >
                                Shop
                            </Link>
                            <FiChevronDown
                                size={50}
                                onClick={() => setShowShopLinks(!showShopLinks)}
                            />
                        </div>
                        <ul
                            className={`${
                                showShopLinks ? 'block' : 'hidden'
                            } h-full w-full text-lg`}
                        >
                            {productCategories.map((category) => {
                                return (
                                    <li key={uniqueId()}>
                                        <Link
                                            href={{
                                                pathname: '/shop',
                                                query: {
                                                    category: category[1],
                                                },
                                            }}
                                        >
                                            {category[0]}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                    <li key={uniqueId()} className='py-4 '>
                        <Link onClick={toggleOpen} href='/wunschliste'>
                            Wunschliste
                        </Link>
                    </li>{' '}
                    <li key={uniqueId()} className='py-4 '>
                        <Link onClick={toggleOpen} href='/warenkorb'>
                            Warenkorb
                        </Link>
                    </li>{' '}
                    <li key={uniqueId()} className='py-4 '>
                        <Link onClick={toggleOpen} href='/user'>
                            Account
                        </Link>
                    </li>{' '}
                    <li key={uniqueId()} className='py-4 '>
                        <Link onClick={toggleOpen} href='/Hilfe'>
                            Hilfe
                        </Link>
                    </li>{' '}
                </ul>
            </nav>
        </aside>
    );
}