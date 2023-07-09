import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import FilterSection from './FilterSections/FilterSection';
import React from 'react';
import CategoryFilterSection from './FilterSections/CategoryFilterSection/CategoryFilterSection';
import DeviceFilterSection from './FilterSections/DeviceFilterSection/DeviceFilterSection';
import PriceFilterSection from './FilterSections/PriceFilterSection/PriceFilterSection';
import { modelTree, returnModelTree } from './helperFunctions';

export default async function FilterBar() {
    const modelTree: modelTree = await returnModelTree();

    return (
        <div className='flex h-auto min-h-[calc(100vh-6rem)] w-64 flex-col items-start space-y-4 border-r-2 p-8'>
            {/* {data?.map((model, index) => (
                <pre key={index}>{JSON.stringify(model, null, 2)}</pre>
            ))} */}
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(modelTree, null, 2)}</pre> */}
            <CategoryFilterSection />
            {modelTree ? <DeviceFilterSection modelTree={modelTree} /> : null}
            <PriceFilterSection />
        </div>
    );
}
