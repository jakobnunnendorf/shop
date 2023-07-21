'use client';

import { createContext, useReducer } from 'react';

export interface ActiveProductContextType {
    state: {
        expanded: boolean;
        activeIndex: number;
        activeColorKey: colorKey | null;
    };
    dispatch: React.Dispatch<reducerAction>;
}

export const ActiveProductContext =
    createContext<ActiveProductContextType | null>(null);

interface reducerAction {
    type: 'setActiveIndex' | 'setActiveColorKey' | 'toggleExpanded';
    payload: number | colorKey | null | boolean;
}

interface reducerState {
    expanded: boolean;
    activeIndex: number;
    activeColorKey: colorKey | null;
}

const reducer = (state: reducerState, action: reducerAction) => {
    switch (action.type) {
        case 'toggleExpanded':
            return { ...state, expanded: action.payload as boolean };
        case 'setActiveIndex':
            return { ...state, activeIndex: action.payload as number };
        case 'setActiveColorKey':
            return { ...state, activeColorKey: action.payload as colorKey };
        default:
            return state;
    }
};

export function ActiveProductContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useReducer(reducer, {
        expanded: true,
        activeIndex: 0,
        activeColorKey: null,
    });

    const activeProductContextProvider = (
        <ActiveProductContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </ActiveProductContext.Provider>
    );

    return activeProductContextProvider;
}
