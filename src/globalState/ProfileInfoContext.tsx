'use client';

import { createContext, useState } from 'react';

export const ProfileInfoContext = createContext<any>(null);

export function ProfileInfoContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [currentProfileInfo, setCurrentProfileInfo] = useState({
        editProfile: false,
    });
    return (
        <ProfileInfoContext.Provider
            value={{
                value: currentProfileInfo,
                setValue: setCurrentProfileInfo,
            }}
        >
            {children}
        </ProfileInfoContext.Provider>
    );
}
