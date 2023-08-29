'use client';

import React from 'react';
import { useContext } from 'react';
import FilterHeading from '@app/shop/FilterBar/components/FilterHeading';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import DeviceTree from '../../components/DeviceTree';
import { modelTree } from '../../helperFunctions';

export default function DeviceFilterSection({
    modelTree,
}: {
    modelTree: modelTree;
}) {
    const [expanded, setExpanded] = React.useState(true);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const deviceFilterSection = (
        <div className='w-full border-b lg:pb-2 '>
            <FilterHeading
                toggleExpanded={toggleExpanded}
                expanded={expanded}
                heading='Modelle'
            />
            {expanded && <DeviceTree modelTree={modelTree} />}
        </div>
    );
    return deviceFilterSection;
}
