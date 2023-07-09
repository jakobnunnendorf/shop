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
    const { toggleDeviceFilter, deviceFilters, isDeviceInFilterArray } =
        useContext(ActiveFiltersContext) as FilterContextType;

    const [expanded, setExpanded] = React.useState(true);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const wrapper = (
        <div className='w-full border-b pb-2'>
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
                                    console.log(device);
                                    console.log(isDeviceInFilterArray(device));
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
                                            active={isDeviceInFilterArray(
                                                device
                                            )}
                                        />
                                    </button>
                                );
                            }
                        );
                        const toggleThisBrand = () => {
                            const filter: device = {
                                name: '',
                                brand: brand,
                                deviceCategory: '',
                            };
                            toggleDeviceFilter(filter);
                        };
                        return (
                            <SubFilter
                                deviceFilterArray={deviceFilterArray}
                                toggleThisBrand={toggleThisBrand}
                                active={deviceFilters.some(
                                    (device) => device.brand === brand
                                )}
                                brand={brand}
                                key={index}
                            />
                        );
                    })}
                </section>
            )}
        </div>
    );
    return wrapper;
}
