import React from 'react';
import { modelTree, returnModelTree } from './helperFunctions';
import Pagination from './Pagination';
import Responsive from './components/Responsive';

export default async function FilterBar() {
    const modelTree: modelTree = await returnModelTree();

    const filterBar = (
        <div className='w-full border h-fit lg:flex lg:h-auto lg:min-h-screen lg:w-auto lg:flex-grow lg:flex-col'>
            <div className='hidden lg:block'>
                <div className='w-full px-2 filter lg:flex lg:flex-col lg:px-4'>
                    <Responsive modelTree={modelTree} />
                </div>
            </div>
            <Pagination />
            <Pagination />
        </div>
    );

    return filterBar;
}
