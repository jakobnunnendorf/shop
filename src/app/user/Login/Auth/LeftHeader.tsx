import React from 'react';

export default function LeftHeader({ hasAccount }: { hasAccount: boolean }) {
    const LeftHeader = (
        <h2
            className={`${
                hasAccount ? 'row-start-2' : 'row-start-1'
            } text-lxl row-span-1 text-center text-3xl font-bold`}
        >
            Deine Infos
        </h2>
    );
    return LeftHeader;
}
