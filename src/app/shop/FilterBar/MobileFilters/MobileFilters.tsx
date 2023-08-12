'use client';
import React from 'react';
import Expanded from './Expanded';
import { modelTree } from '../helperFunctions';

export default function MobileFilters({ modelTree }: { modelTree: modelTree }) {
    const [expanded, setExpanded] = React.useState(false);
    const mobileFilters = (
        <div
            className={`${
                expanded
                    ? 'fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-full bg-white'
                    : ''
            }  flex flex-col items-center lg:hidden`}
        >
            {expanded && (
                <Expanded
                    close={() => setExpanded(false)}
                    modelTree={modelTree}
                />
            )}
            {!expanded && (
                <div className='py-16'>
                    <button
                        onClick={() => setExpanded(true)}
                        className='px-4 py-2 text-xl font-bold border rounded-full boarder boarder-coastal-blue-10 border-coastal-blue-10 text-coastal-blue-10'
                    >
                        Filter auswählen
                    </button>
                </div>
            )}
        </div>
    );
    return mobileFilters;
}
