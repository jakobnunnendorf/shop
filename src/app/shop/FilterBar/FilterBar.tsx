import React from 'react';
import Client from './components/Client';
import { modelTree, returnModelTree } from './helperFunctions';

export default async function FilterBar() {
    const modelTree: modelTree = await returnModelTree();

    const filterBar = (
        <div className='w-full border h-fit lg:flex lg:h-auto lg:w-auto lg:flex-grow lg:flex-col'>
            <Client modelTree={modelTree} />
        </div>
    );

    return filterBar;
}
