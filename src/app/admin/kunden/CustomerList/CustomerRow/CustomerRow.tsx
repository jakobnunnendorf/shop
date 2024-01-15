import React from 'react';
import Link from 'next/link';
import DeleteUser from './DeleteUser';

export default function CustomerRow({ profile }: { profile: Profile }) {
    const customerRow = (
        <li className='flex justify-between bg-white rounded-lg shadow-md p2 md:p-4'>
            <Link href={`/admin/kunden/${profile.profileId}`}>
                <p className='font-semibold text-coastal-blue text-x1'>
                    {profile.firstName} {profile.lastName}
                </p>
            </Link>
            <DeleteUser profileId={profile.profileId} />
        </li>
    );
    return customerRow;
}
