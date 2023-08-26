'use client';

import Link from 'next/link';
import React, { useContext } from 'react';
import FilterList from '@app/shop/FilterBar/components/FilterList';
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
import FilterHeading from './FilterHeading';
import FilterSection from './FilterSection';

import SubFilter from '../Desktop/FilterSections/DeviceFilterSection/SubFilter';
import { useSearchParams } from 'next/navigation';

export default function Responsive({ modelTree }: { modelTree: modelTree }) {
    const {
        expanded,
        setExpanded,
        categoryArray,
        priceArray,
        setMobileSlot,
        mobileSlot,
    } = useContext(FilterBarContext) as FilterBarContextType;

    const { toggleDeviceFilter, deviceFilters, isDeviceInFilterArray } =
        useContext(ActiveFiltersContext) as FilterContextType;

    const searchParams = useSearchParams();

    const responsive = (
        <div className='grid grid-cols-3 lg:flex lg:flex-col'>
            <Link
                href='/shop'
                className={` border text-gray-400 px-2 py-1 mx-auto mt-8 mb-4 text-xs font-bold rounded-full w-fit ${
                    searchParams.size > 0 ? 'translate-y-0' : '-translate-y-40'
                } transition duration-300 ease-in-out`}
            >
                Filter löschen x
            </Link>
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
