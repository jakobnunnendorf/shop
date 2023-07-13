import React from 'react';
import CategoryFilterSection from './FilterSections/CategoryFilterSection/CategoryFilterSection';
import DeviceFilterSection from './FilterSections/DeviceFilterSection/DeviceFilterSection';
import PriceFilterSection from './FilterSections/PriceFilterSection/PriceFilterSection';
import { modelTree } from '../helperFunctions';

export default function Desktop({ modelTree }: { modelTree: modelTree }) {
    const desktopFilterBar = (
        <div className='hidden min-h-[calc(100vh-6rem)] w-64 flex-col items-start space-y-4 border-r-2 p-8 lg:flex lg:flex-grow'>
            <CategoryFilterSection />
            {modelTree ? <DeviceFilterSection modelTree={modelTree} /> : null}
            <PriceFilterSection />
        </div>
    );
    return desktopFilterBar;
}
