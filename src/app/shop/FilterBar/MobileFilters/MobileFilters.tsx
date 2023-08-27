import React from 'react';
import Expanded from './Expanded';
import { modelTree, returnModelTree } from '../helperFunctions';

export default async function MobileFilters({
    open,
    nOfResults,
    paramString,
}: {
    open: boolean;
    nOfResults: number;
    paramString: string;
}) {
    const modelTree: modelTree = await returnModelTree();

    const mobileFilters = (
        <div
            className={`flex-col items-center w-full bg-white ${
                open ? '' : 'hidden'
            }`}
        >
            <Expanded
                modelTree={modelTree}
                nOfResults={nOfResults}
                paramString={paramString}
            />
        </div>
    );
    return mobileFilters;
}
