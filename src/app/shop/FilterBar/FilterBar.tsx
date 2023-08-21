import React from 'react';
import Client from './components/Client';
import { modelTree, returnModelTree } from './helperFunctions';
import Pagination from './Pagination';

export default async function FilterBar() {
    const modelTree: modelTree = await returnModelTree();

    const filterBar = (
        <div className='h-fit w-full border lg:flex lg:h-auto lg:min-h-screen lg:w-auto lg:flex-grow lg:flex-col'>
            <div className='hidden lg:block'>
                <Client modelTree={modelTree} />
            </div>
            <Pagination />
            <Pagination />
        </div>
    );

    return filterBar;
}
