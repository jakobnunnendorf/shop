'use client';

import { createContext, useState } from 'react';

export type FilterContextType = {
    activeFilters: string[]; //TODO: increase specificity
    addFilter: (filter: string) => void;
    removeFilter: (filter: string) => void;
    setFilter: (filter: string) => void;
    clearFilters: () => void;
};

export const ActiveFiltersContext = createContext<FilterContextType  | null>(null);

export const ActiveFiltersContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const addFilter = (filter: string) => {
        setActiveFilters([...activeFilters, filter]);
    };

    const removeFilter = (filter: string) => {
        setActiveFilters(
            activeFilters.filter((activeFilter) => activeFilter !== filter)
        );
    };

    const setFilter = (filter: string) => {
        setActiveFilters([filter]);
    };

    const clearFilters = () => {
        setActiveFilters([]);
    };

    return (
        <ActiveFiltersContext.Provider
            value={{
                activeFilters,
                addFilter,
                removeFilter,
                setFilter,
                clearFilters,
            }}
        >
            {children}
        </ActiveFiltersContext.Provider>
    );
};
