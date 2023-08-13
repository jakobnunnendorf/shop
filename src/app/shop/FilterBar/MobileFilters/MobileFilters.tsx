import React from 'react';
import Expanded from './Expanded';
import { modelTree, returnModelTree } from '../helperFunctions';

export default async function MobileFilters() {
    const modelTree: modelTree = await returnModelTree();

    const mobileFilters = (
        <div className='w-full flex-col items-center bg-white '>
            <Expanded modelTree={modelTree} />
        </div>
    );
    return mobileFilters;
}
