'use client';

import React, { useContext } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { MobileMenuStateContext } from '@globalState/MobileMenuContext';

export default function MobileMenuBurger() {
    const { value: menuOpen, setValue: setMenuOpen } = useContext(
        MobileMenuStateContext
    );
    return (
        <div className='' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
                <FiX
                    fontSize='3em'
                    className='align-self-end text-coastal-blue-10 lg:hidden'
                />
            ) : (
                <FiMenu
                    fontSize='3em'
                    className='align-self-end text-coastal-blue-10 lg:hidden '
                />
            )}
        </div>
    );
}
