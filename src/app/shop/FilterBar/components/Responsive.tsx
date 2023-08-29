'use client';

import React from 'react';
import { modelTree } from '@app/shop/FilterBar/helperFunctions';
import DeviceTree from './DeviceTree';
import FilterSection from './FilterSection';

import { useSearchParams } from 'next/navigation';
import ClearFilters from './ClearFilters';
import { categoryArray, priceArray } from './Filter';
import FilterTags from './FilterTags';
import { valuesFromParamString } from '@lib/helperFunctions';

export default function Responsive({ modelTree }: { modelTree: modelTree }) {
    const searchParams = useSearchParams();

    const show =
        valuesFromParamString(
            searchParams.toString().replace('filter=true', '')
        ).length > 0;
    const responsive = (
        <div className='grid grid-cols-3 lg:flex lg:flex-col '>
            <ClearFilters show={show} />
            <FilterTags paramString={searchParams.toString()} />
            <div
                className={`${
                    show ? 'translate-y-4 py-0' : 'translate-y-0 py-4'
                } transition duration-300  py-4`}
            >
                <FilterSection heading='Kategorien' filters={categoryArray} />
                <FilterSection
                    heading='Modelle'
                    filters={<DeviceTree modelTree={modelTree} />}
                />
                <FilterSection heading='Preise' filters={priceArray} />
            </div>
        </div>
    );
    return responsive;
}
