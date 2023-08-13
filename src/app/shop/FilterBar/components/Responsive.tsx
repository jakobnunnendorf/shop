'use client';

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

    const responsive = (
        <div className='grid grid-cols-3 lg:flex lg:flex-col'>
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
    );
    return responsive;
}
