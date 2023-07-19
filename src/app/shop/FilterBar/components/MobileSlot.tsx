import React from 'react';

export default function MobileSlot({ filters }: { filters: React.ReactNode }) {
    const mobileSlot = <div className='w-full h-fit lg:hidden'>{filters}</div>;
    return mobileSlot;
}
