'use client';

import { createContext, useState } from 'react';

export interface ProfileInfoContextType {
    editProfile: boolean;
    toggleEditProfile: () => void;
}

export const ProfileInfoContext = createContext<ProfileInfoContextType | null>(
    null
);

export function ProfileInfoContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [editProfile, setEditProfile] = useState<boolean>(false);
    const toggleEditProfile = () => {
        setEditProfile(!editProfile);
    };
    return (
        <ProfileInfoContext.Provider
            value={{
                editProfile,
                toggleEditProfile,
            }}
        >
            {children}
        </ProfileInfoContext.Provider>
    );
}
