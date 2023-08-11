'use client';

import React, { useContext } from 'react';
import MobileSlot from './MobileSlot';
import Responsive from './Responsive';
import { FilterBarContext, FilterBarContextType } from '../../FilterBarContext';
import { modelTree } from '../helperFunctions';

export default function Client({ modelTree }: { modelTree: modelTree }) {
    const { mobileSlot } = useContext(FilterBarContext) as FilterBarContextType;
    return (
        <div className='w-full px-2 filter lg:flex lg:flex-col lg:px-4'>
            <Responsive modelTree={modelTree} />
            <MobileSlot filters={mobileSlot} />
        </div>
    );
}
