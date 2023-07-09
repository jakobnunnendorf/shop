'use client';

import { createContext, useState } from 'react';

export type FilterContextType = {
    categoryFilters: string[]; //TODO: increase specificity
    deviceFilters: device[];
    addCategoryFilter: (filter: string) => void;
    removeCategoryFilter: (filter: string) => void;
    toggleCategoryFilter: (filter: string) => void;
    setCategoryFilter: (filter: string) => void;
    clearCategoryFilters: () => void;
    addDeviceFilter: (filter: device) => void;
    removeDeviceFilter: (filter: device) => void;
    toggleDeviceFilter: (filter: device) => void;
    setDeviceFilter: (filter: device) => void;
    clearDeviceFilters: () => void;
    clearAllFilters: () => void;
};

export const ActiveFiltersContext = createContext<FilterContextType | null>(
    null
);

export const ActiveFiltersContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [categoryFilters, setCategoryFilters] = useState<string[]>([]);

    const addCategoryFilter = (filter: string) => {
        setCategoryFilters([...categoryFilters, filter]);
    };

    const removeCategoryFilter = (filter: string) => {
        setCategoryFilters(
            categoryFilters.filter(
                (categoryFilter) => categoryFilter !== filter
            )
        );
    };

    const toggleCategoryFilter = (filter: string) => {
        if (categoryFilters.includes(filter)) {
            removeCategoryFilter(filter);
        } else {
            addCategoryFilter(filter);
        }
    };

    const setCategoryFilter = (filter: string) => {
        setCategoryFilters([filter]);
    };

    const clearCategoryFilters = () => {
        setCategoryFilters([]);
    };

    const [deviceFilters, setDeviceFilters] = useState<device[]>([]);

    const addDeviceFilter = (filter: device) => {
        setDeviceFilters([...deviceFilters, filter]);
    };

    const removeDeviceFilter = (filter: device) => {
        setDeviceFilters(
            deviceFilters.filter((deviceFilter) => deviceFilter !== filter)
        );
    };

    const toggleDeviceFilter = (filter: device) => {
        if (deviceFilters.includes(filter)) {
            removeDeviceFilter(filter);
        } else {
            addDeviceFilter(filter);
        }
    };

    const setDeviceFilter = (filter: device) => {
        setDeviceFilters([filter]);
    };

    const clearDeviceFilters = () => {
        setDeviceFilters([]);
    };

    const clearAllFilters = () => {
        clearCategoryFilters();
        clearDeviceFilters();
    };

    return (
        <ActiveFiltersContext.Provider
            value={{
                categoryFilters,
                deviceFilters,
                addCategoryFilter,
                removeCategoryFilter,
                toggleCategoryFilter,
                setCategoryFilter,
                clearCategoryFilters,
                addDeviceFilter,
                removeDeviceFilter,
                toggleDeviceFilter,
                setDeviceFilter,
                clearDeviceFilters,
                clearAllFilters,
            }}
        >
            {children}
        </ActiveFiltersContext.Provider>
    );
};
