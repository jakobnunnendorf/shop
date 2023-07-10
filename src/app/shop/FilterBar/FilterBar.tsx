import React from 'react';
import CategoryFilterSection from './FilterSections/CategoryFilterSection/CategoryFilterSection';
import DeviceFilterSection from './FilterSections/DeviceFilterSection/DeviceFilterSection';
import PriceFilterSection from './FilterSections/PriceFilterSection/PriceFilterSection';
import { modelTree, returnModelTree } from './helperFunctions';

export default async function FilterBar() {
    const modelTree: modelTree = await returnModelTree();

    return (
        <div className='grid h-auto w-full grid-cols-3 items-start border-r-2 lg:flex lg:min-h-[calc(100vh-6rem)] lg:w-64 lg:flex-col lg:space-y-4 lg:p-8'>
            <CategoryFilterSection />
            {modelTree ? <DeviceFilterSection modelTree={modelTree} /> : null}
            <PriceFilterSection />
        </div>
    );
}
