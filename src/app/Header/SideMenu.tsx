'use client';

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { MobileMenuStateContext } from '@globalState/MobileMenuContext';

export default function SideMenu() {
    const { value: menuOpen } = useContext(
        //global state
        MobileMenuStateContext
    );
    const [showShopLinks, setShowShopLinks] = useState(false);
    return (
        <aside
            className={`${
                menuOpen ? 'block' : 'hidden'
            } h-screen w-[66vw] bg-sandy-beige-3 px-4 py-16 text-coastal-blue-9 backdrop-blur-3xl`}
        >
            <nav className=' h-[70vh]'>
                <ul className='flex h-full flex-col justify-around pr-4 text-3xl font-bold'>
                    <li className='py-4 '>Home</li>
                    <li className='flex flex-col items-start justify-between py-4 '>
                        <div className='flex'>
                            <span className='underline '>Shop</span>
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
                            <Link href='shop'>
                                <li>Handyhüllen</li>
                            </Link>
                            <Link href='shop'>
                                <li>Panzergläser</li>
                            </Link>
                            <Link href='shop'>
                                <li>Ladekabel</li>
                            </Link>
                            <Link href='shop'>
                                <li>Ladestecker</li>
                            </Link>
                            <Link href='shop'>
                                <li>Tablet-Taschen</li>
                            </Link>
                            <Link href='shop'>
                                <li>Handy-Halterungen</li>
                            </Link>
                        </ul>
                    </li>
                    <li className='py-4 '>Wunschliste</li>{' '}
                    <li className='py-4 '>Warenkorb</li>{' '}
                    <li className='py-4 '>Account</li>{' '}
                    <li className='py-4 '>Hilfe</li>{' '}
                </ul>
            </nav>
        </aside>
    );
}
