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

export default function Responsive({ modelTree }: { modelTree: modelTree }) {
    const {
        categoryExpanded,
        toggleCategoryExpanded,
        categoryArray,
        deviceExpanded,
        toggleDeviceExpanded,
        priceExpanded,
        togglePriceExpanded,
        priceArray,
        setMobileSlot,
        mobileSlot,
    } = useContext(FilterBarContext) as FilterBarContextType;

    const { toggleDeviceFilter, deviceFilters, isDeviceInFilterArray } =
        useContext(ActiveFiltersContext) as FilterContextType;

    const responsive = (
        <div className='grid grid-cols-3 lg:flex lg:flex-col'>
            <FilterHeading
                heading='Kategorien'
                expanded={categoryExpanded}
                toggleExpanded={() => {
                    toggleCategoryExpanded();
                    if (!mobileSlot) {
                        setMobileSlot(categoryArray);
                    } else {
                        setMobileSlot(null);
                    }
                }}
            />
            <div className='hidden lg:block'>
                <FilterList
                    expanded={categoryExpanded}
                    filters={categoryArray}
                />
            </div>
            <FilterHeading
                heading='Modelle'
                expanded={deviceExpanded}
                toggleExpanded={() => {
                    toggleDeviceExpanded();
                    if (!mobileSlot) {
                        setMobileSlot(
                            <DeviceTree
                                modelTree={modelTree}
                                toggleDeviceFilter={toggleDeviceFilter}
                                deviceFilters={deviceFilters}
                                isDeviceInFilterArray={isDeviceInFilterArray}
                            />
                        );
                    } else {
                        setMobileSlot(null);
                    }
                }}
            />
            <div className='hidden lg:block'>
                {deviceExpanded && (
                    <DeviceTree
                        modelTree={modelTree}
                        toggleDeviceFilter={toggleDeviceFilter}
                        deviceFilters={deviceFilters}
                        isDeviceInFilterArray={isDeviceInFilterArray}
                    />
                )}
            </div>
            <FilterHeading
                heading='Preise'
                expanded={priceExpanded}
                toggleExpanded={() => {
                    togglePriceExpanded();
                    if (!mobileSlot) {
                        setMobileSlot(priceArray);
                    } else {
                        setMobileSlot(null);
                    }
                }}
            />
            <div className='hidden lg:block'>
                <FilterList expanded={priceExpanded} filters={priceArray} />
            </div>
        </div>
    );
    return responsive;
}
