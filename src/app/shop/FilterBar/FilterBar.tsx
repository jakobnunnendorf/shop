import React from 'react';
import Client from './components/Client';
import { modelTree, returnModelTree } from './helperFunctions';
import MobileFilters from './MobileFilters/MobileFilters';

export default async function FilterBar() {
    const modelTree: modelTree = await returnModelTree();

    const filterBar = (
        <div className='w-full border h-fit lg:flex lg:h-auto lg:min-h-screen lg:w-auto lg:flex-grow lg:flex-col'>
            <div className='hidden lg:block'>
                <Client modelTree={modelTree} />
            </div>
            <MobileFilters modelTree={modelTree} />
        </div>
    );

    return filterBar;
}
