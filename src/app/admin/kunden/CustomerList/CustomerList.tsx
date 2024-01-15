import React from 'react';
import supabase from '@utils/supabase';
import CustomerRow from './CustomerRow/CustomerRow';

export default async function CustomerList() {
    const { data: customerProfiles, error } = (await supabase
        .from('profiles')
        .select('*')) as SbFetchResponseObject<Profile[]>;
    if (!customerProfiles) {
        throw new Error(`Couldn't fetch profiles: ${JSON.stringify(error)}`);
    }
    const customerList = (
        <ul className='grid grid-cols-1 gap-2 p-2 md:grid-cols-1 '>
            {customerProfiles.map((profile, index) => (
                <CustomerRow key={index} profile={profile} />
            ))}
        </ul>
    );
    return customerList;
}
