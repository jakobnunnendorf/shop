'use client';
import React, { useContext } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { modelTree } from '@app/shop/FilterBar/helperFunctions';
import {
    FilterBarContext,
    FilterBarContextType,
} from '@app/shop/FilterBarContext';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import {
    SearchResultsContext,
    SearchResultsContextType,
} from '@globalState/SearchResults';
import DeviceTree from '../components/DeviceTree';
import FilterSection from '../components/FilterSection';

export default function Expanded({
    close,
    modelTree,
}: {
    close: () => void;
    modelTree: modelTree;
}) {
    const { categoryArray, priceArray } = useContext(
        FilterBarContext
    ) as FilterBarContextType;
    const {
        toggleDeviceFilter,
        deviceFilters,
        isDeviceInFilterArray,
        clearAllFilters,
    } = useContext(ActiveFiltersContext) as FilterContextType;

    const { numberOfResults } = useContext(
        SearchResultsContext
    ) as SearchResultsContextType;

    const expandedMobileFilters = (
        <div className='flex flex-col w-full h-full justify-evenly'>
            <div className='flex items-center justify-end w-full h-16 px-8 '>
                <button
                    className='flex items-center h-8 underline w-fit border-coastal-blue-10 text-coastal-blue-10'
                    onClick={close}
                >
                    Schließen <FiX size={20} />
                </button>
            </div>
            <div className='flex-grow px-4 py-8'>
                <h2 className='text-3xl font-bold text-center'>Deine Filter</h2>
                <div className='py-8 pt-16'>
                    <ul className='flex justify-center py-4 space-x-2'>
                        <li className='w-8 h-8 bg-blue-400 border rounded-full border-coastal-blue-10'></li>
                        <li className='w-8 h-8 bg-green-400 border rounded-full border-coastal-blue-10'></li>
                        <li className='w-8 h-8 bg-orange-400 border rounded-full border-coastal-blue-10'></li>
                        <li className='w-8 h-8 bg-yellow-400 border rounded-full border-coastal-blue-10'></li>
                        <li className='w-8 h-8 bg-red-400 border rounded-full border-coastal-blue-10'></li>
                        <li className='w-8 h-8 bg-pink-400 border rounded-full border-coastal-blue-10'></li>
                    </ul>
                    <h3 className='text-xl font-bold text-center'>Farben</h3>
                </div>
                <div className='py-4'>
                    <FilterSection
                        heading='Kategorien'
                        filters={categoryArray}
                    />
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
            <div className='grid w-full grid-cols-2 py-16 justify-evenly'>
                <button
                    onClick={clearAllFilters}
                    className='w-4/5 px-2 py-2 mx-auto mr-2 border rounded-full border-coastal-blue-10 '
                >
                    Filter löschen
                </button>
                <button
                    onClick={close}
                    className='flex items-center w-4/5 px-2 py-2 mx-auto ml-2 text-white border rounded-full justify-evenly bg-coastal-blue-10 hover:bg-coastal-blue-10'
                >
                    ({numberOfResults}) Treffer
                    <FiSearch size={20} />
                </button>
            </div>
        </div>
    );
    return expandedMobileFilters;
}
