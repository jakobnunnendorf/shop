import React from 'react';

export default function MobileFilterSlot({filters}: {filters: React.JSX.Element[]}) {
    return <div className='w-full h-fit'>{filters}</div>;
}
