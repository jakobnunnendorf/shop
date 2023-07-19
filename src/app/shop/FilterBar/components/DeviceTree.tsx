'use client';

import React from 'react';
import Filter from './Filter';
import SubFilter from '../Desktop/FilterSections/DeviceFilterSection/SubFilter';
import { modelTree } from '../helperFunctions';

export default function DeviceTree({
    modelTree,
    toggleDeviceFilter,
    deviceFilters,
    isDeviceInFilterArray,
}: {
    modelTree: modelTree;
    toggleDeviceFilter: (device: device) => void;
    deviceFilters: device[];
    isDeviceInFilterArray: (device: device) => boolean;
}) {
    const [mobileFilterList, setMobileFilterList] = React.useState<
        JSX.Element[] | null
    >([]);
    const [expanded, setExpanded] = React.useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const deviceTree = (
        <section>
            <div className='flex lg:block'>
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
                                    className='w-full '
                                    onClick={filterForThisDevice}
                                    key={index}
                                >
                                    <Filter
                                        key={index}
                                        filterName={deviceName}
                                        active={isDeviceInFilterArray(device)}
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
                            toggleThisBrand={() => {
                                toggleThisBrand();
                            }}
                            active={deviceFilters.some(
                                (device) => device.brand === brand
                            )}
                            brand={brand}
                            expanded={expanded}
                            toggleExpanded={() => {
                                if (!mobileFilterList) {
                                    setMobileFilterList(deviceFilterArray);
                                } else {
                                    setMobileFilterList(null);
                                }
                                toggleExpanded();
                            }}
                            key={index}
                        />
                    );
                })}
            </div>
            <div className='grid grid-cols-2 lg:hidden'>{mobileFilterList}</div>
        </section>
    );
    return deviceTree;
}
