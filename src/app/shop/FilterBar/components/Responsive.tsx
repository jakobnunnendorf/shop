'use client';

import React, { useContext } from 'react';
import { modelTree } from '@app/shop/FilterBar/helperFunctions';
import {
    FilterBarContext,
    FilterBarContextType,
} from '@app/shop/FilterBarContext';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import DeviceTree from './DeviceTree';
import FilterSection from './FilterSection';

import { useSearchParams } from 'next/navigation';
import ClearFilters from './ClearFilters';

export default function Responsive({ modelTree }: { modelTree: modelTree }) {
    const { categoryArray, priceArray } = useContext(
        FilterBarContext
    ) as FilterBarContextType;

    const { toggleDeviceFilter, deviceFilters, isDeviceInFilterArray } =
        useContext(ActiveFiltersContext) as FilterContextType;

    const searchParams = useSearchParams();

    const responsive = (
        <div className='grid grid-cols-3 lg:flex lg:flex-col'>
            <ClearFilters searchParams={searchParams} />
            <div
                className={`${
                    searchParams.size > 0 ? 'translate-y-0' : '-translate-y-12'
                } transition duration-300`}
            >
                <FilterSection heading='Kategorien' filters={categoryArray} />
                <FilterSection
                    heading='Modelle'
                    filters={
                        <DeviceTree
                            modelTree={modelTree}
                            toggleDeviceFilter={toggleDeviceFilter}
                            deviceFilters={deviceFilters}
                            isDeviceInFilterArray={isDeviceInFilterArray}
                        />
                    }
                />
                <FilterSection heading='Preise' filters={priceArray} />
            </div>
        </div>
    );
    return responsive;
}
