'use client';
import React from 'react';
import CategoryFilterSection from '../Desktop/FilterSections/CategoryFilterSection/CategoryFilterSection';
import DeviceFilterSection from '../Desktop/FilterSections/DeviceFilterSection/DeviceFilterSection';
import PriceFilterSection from '../Desktop/FilterSections/PriceFilterSection/PriceFilterSection';
import { modelTree } from '../helperFunctions';
import MobileFilterSlot from './MobileFilterSlot';
import Client from '../components/Client';

export default function Mobile({ modelTree }: { modelTree: modelTree }) {
    const mobile = (
        <div className='w-full h-fit lg:hidden'>
            <div className='grid w-full grid-cols-3 h-fit'>
                {/* <CategoryFilterSection />
                {modelTree ? (
                    <DeviceFilterSection modelTree={modelTree} />
                ) : null}
                <PriceFilterSection /> */}
                <Client />
            </div>
            <MobileFilterSlot />
        </div>
    );
    return mobile;
}
