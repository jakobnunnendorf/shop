import React from 'react';

export default function EditProfile() {
    const editProfile = (
        <button
            className='flex items-center justify-center row-start-3 px-4 py-2 font-bold border md:w-36 md:space-x-2 rounded-xl border-coastal-blue-10 text-coastal-blue-10'
            onClick={toggleEditProfile}
        >
            <span>bearbeiten</span>
        </button>
    );
    return editProfile;
}
