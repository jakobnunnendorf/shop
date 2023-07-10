'use client';

import React, { useContext } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import {
    MobileMenuContext,
    MobileMenuContextType,
} from '@globalState/MobileMenuContext';

export default function MobileMenuBurger() {
    const { isOpen, toggleOpen } = useContext(
        MobileMenuContext
    ) as MobileMenuContextType;
    return (
        <div className='' onClick={toggleOpen}>
            {isOpen ? (
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
