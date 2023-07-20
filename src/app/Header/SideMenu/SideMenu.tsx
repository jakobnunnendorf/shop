'use client';

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import {
    MobileMenuContext,
    MobileMenuContextType,
} from '@globalState/MobileMenuContext';

export default function SideMenu() {

    const { isOpen, toggleOpen } = useContext(
        MobileMenuContext
    ) as MobileMenuContextType;

    const { setCategoryFilter } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const setFilterAndRouteToShop = (filter: productCategory) => {
        setCategoryFilter(filter);
        toggleOpen();
    };

    const [showShopLinks, setShowShopLinks] = useState(false);
    return (
        <aside
            className={`${
                isOpen ? 'block' : 'hidden'
            } h-screen w-[66vw] bg-sandy-beige-3 px-4 py-16 text-coastal-blue-9 backdrop-blur-3xl`}
        >
            <nav className=' h-[70vh]'>
                <ul className='flex h-full flex-col justify-around pr-4 text-3xl font-bold'>
                    <li className='py-4 '>
                        <Link onClick={toggleOpen} href='/'>
                            Home
                        </Link>
                    </li>
                    <li className='flex flex-col items-start justify-between py-4 '>
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
                            <Link
                                href='/shop'
                                onClick={() =>
                                    setFilterAndRouteToShop('phone case')
                                }
                            >
                                <li>Handyhüllen</li>
                            </Link>
                            <Link
                                onClick={() =>
                                    setFilterAndRouteToShop('screen protector')
                                }
                                href='/shop'
                            >
                                <li>Panzergläser</li>
                            </Link>
                            <Link
                                onClick={() =>
                                    setFilterAndRouteToShop('charging cable')
                                }
                                href='/shop'
                            >
                                {' '}
                                <li>Ladekabel</li>
                            </Link>
                            <Link
                                onClick={() =>
                                    setFilterAndRouteToShop('charging adapter')
                                }
                                href='/shop'
                            >
                                {' '}
                                <li>Ladestecker</li>
                            </Link>
                            <Link
                                onClick={() =>
                                    setFilterAndRouteToShop('tablet case')
                                }
                                href='/shop'
                            >
                                {' '}
                                <li>Tablet-Taschen</li>
                            </Link>
                            <Link
                                onClick={() =>
                                    setFilterAndRouteToShop('phone holder')
                                }
                                href='/shop'
                            >
                                {' '}
                                <li>Handy-Halterungen</li>
                            </Link>
                        </ul>
                    </li>
                    <li className='py-4 '>
                        <Link onClick={toggleOpen} href='/user/wunschliste'>
                            Wunschliste
                        </Link>
                    </li>{' '}
                    <li className='py-4 '>
                        <Link onClick={toggleOpen} href='/warenkorb'>
                            Warenkorb
                        </Link>
                    </li>{' '}
                    <li className='py-4 '>
                        <Link onClick={toggleOpen} href='/user'>
                            Account
                        </Link>
                    </li>{' '}
                    <li className='py-4 '>
                        <Link onClick={toggleOpen} href='/Hilfe'>
                            Hilfe
                        </Link>
                    </li>{' '}
                </ul>
            </nav>
        </aside>
    );
}