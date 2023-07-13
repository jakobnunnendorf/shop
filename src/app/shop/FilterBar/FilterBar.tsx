import React from 'react';
import { modelTree, returnModelTree } from './helperFunctions';
import Mobile from './Mobile/Mobile';
import Client from './components/Client';

export default async function FilterBar() {
    const modelTree: modelTree = await returnModelTree();

    // all info

    // expanded 1
    // expanded 2
    // expanded 3
    // mobileSlot

    const filterBar = (
        <div className='w-full border h-fit lg:flex lg:h-auto lg:w-auto lg:flex-grow lg:flex-col'>
            <Client modelTree={modelTree} />
            
        </div>
    );

    return filterBar;
}
