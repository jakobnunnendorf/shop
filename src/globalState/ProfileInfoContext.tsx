'use client';

import { createContext, useState } from 'react';

export interface ProfileInfoContextType {
    editProfile: boolean;
    toggleEditProfile: () => void;
    resetPassword:boolean;
    toggleResetPassword:()=>void;
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
    const [resetPassword, setResetPassword] = useState<boolean>(false);
    const toggleResetPassword = () => {
        setResetPassword(!resetPassword);
    };
    return (
        <ProfileInfoContext.Provider
            value={{
                editProfile,
                toggleEditProfile,
                resetPassword,
                toggleResetPassword,
            }}
        >
            {children}
        </ProfileInfoContext.Provider>
    );
}
