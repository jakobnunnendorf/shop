'use client';

import React from 'react';
import Filter from './Filter';
import SubFilter from '../Desktop/DeviceFilterSection/SubFilter';
import { modelTree } from '../helperFunctions';

export default function DeviceTree({ modelTree }: { modelTree: modelTree }) {
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
                            return (
                                <Filter
                                    filterTitle={deviceName}
                                    filterKey='device'
                                    filter={deviceName}
                                    key={index}
                                />
                            );
                        }
                    );
                    return (
                        <SubFilter
                            deviceFilterArray={deviceFilterArray}
                            brand={brand}
                            expanded={expanded}
                            toggleExpanded={toggleExpanded}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    );
    return deviceTree;
}
