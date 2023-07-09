'use client';

import React from 'react';
import { useContext } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import DeviceFilter from './DeviceFilter';
import SubFilter from './SubFilter';
import { modelTree } from '../../helperFunctions';

export default function DeviceFilterSection({
    modelTree,
}: {
    modelTree: modelTree;
    }) {
    const { toggleDeviceFilter, deviceFilters } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const [expanded, setExpanded] = React.useState(true);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const wrapper = (
        <div className='w-full pb-2 border-b'>
            <div className='flex items-center space-x-4 text-xl font-bold text-coastal-blue-10'>
                <h2>Mein Modell</h2>
                <button onClick={toggleExpanded}>
                    {expanded ? <FiChevronUp /> : <FiChevronDown />}
                </button>
            </div>
            {expanded && (
                <section>
                    {Object.keys(modelTree).map((brand, index) => {
                        const deviceFilterArray = modelTree[brand].map(
                            (deviceName: string, index: number) => {
                                const device: device = {
                                    name: deviceName,
                                    brand: brand,
                                    deviceCategory: 'phone',
                                };
                                const filterForThisDevice = () => {
                                    toggleDeviceFilter(device);
                                };
                                return (
                                    <button
                                        onClick={filterForThisDevice}
                                        key={index}
                                    >
                                        <DeviceFilter
                                            key={index}
                                            deviceName={deviceName}
                                            active={deviceFilters.includes(device)}
                                        />
                                    </button>
                                );
                            }
                        );
                        return (
                            <SubFilter
                                key={index}
                                deviceFilterArray={deviceFilterArray}
                                brand={brand}
                            />
                        );
                    })}
                </section>
            )}
        </div>
    );
    return wrapper;
}
