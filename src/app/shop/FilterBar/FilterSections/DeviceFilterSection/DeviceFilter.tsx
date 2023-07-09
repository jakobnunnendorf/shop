import React from 'react';
import { FiCheck, FiSquare } from 'react-icons/fi';

export default function DeviceFilter({
    deviceName,
    active,
}: {
    deviceName: string;
    active: boolean;
}) {
    const wrapper = (
        <article className='flex w-full justify-between '>
            <h3 className='text-sm'>{deviceName}</h3>
            {active ? <FiCheck /> : <FiSquare />}
        </article>
    );
    return wrapper;
}
