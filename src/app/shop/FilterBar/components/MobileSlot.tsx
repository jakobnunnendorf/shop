import React from 'react';
import FilterList from '@app/shop/FilterBar/components/FilterList';

export default function MobileSlot({ filters }: { filters: React.ReactNode }) {
    const mobileSlot = <div className='w-full  h-fit lg:hidden'>{filters}</div>;
    return mobileSlot;
}
