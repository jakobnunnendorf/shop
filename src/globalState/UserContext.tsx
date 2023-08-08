'use client';

import { createContext, useState } from 'react';

export interface registrationInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}
export interface UserContextType {
    registrationInfo: registrationInfo;
    setRegistrationInfo: React.Dispatch<React.SetStateAction<registrationInfo>>;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [registrationInfo, setRegistrationInfo] = useState(blankUser);
    return (
        <div>
            <UserContext.Provider
                value={{ registrationInfo, setRegistrationInfo }}
            >
                {children}
            </UserContext.Provider>
        </div>
    );
}

const blankUser = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
};
