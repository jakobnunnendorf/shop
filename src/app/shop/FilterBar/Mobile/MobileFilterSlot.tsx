import React, { useContext, useState } from 'react';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';

export default function MobileFilterSlot({filters}: {filters: React.JSX.Element[]}) {
    return <div className='w-full h-fit'>{filters}</div>;
}
