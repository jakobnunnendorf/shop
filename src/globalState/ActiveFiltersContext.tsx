'use client';

import { createContext, useState } from 'react';

export type FilterContextType = {
    categoryFilters: string[]; //TODO: increase specificity
    deviceFilters: device[];
    priceFilters: number[][];
    addCategoryFilter: (filter: string) => void;
    removeCategoryFilter: (filter: string) => void;
    toggleCategoryFilter: (filter: string) => void;
    setCategoryFilter: (filter: string) => void;
    clearCategoryFilters: () => void;
    addDeviceFilter: (filter: device) => void;
    removeDeviceFilter: (filter: device) => void;
    toggleDeviceFilter: (filter: device) => void;
    setDeviceFilter: (filter: device) => void;
    isDeviceInFilterArray: (device: device) => boolean;
    clearDeviceFilters: () => void;
    togglePriceFilter: (filter: number[]) => void;
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
            deviceFilters.filter(
                (deviceFilter) =>
                    deviceFilter.name !== filter.name ||
                    deviceFilter.brand !== filter.brand ||
                    deviceFilter.deviceCategory !== filter.deviceCategory
            )
        );
    };

    const toggleDeviceFilter = (filter: device) => {
        const hasFilter = deviceFilters.some(
            (device) =>
                device.name === filter.name &&
                device.brand === filter.brand &&
                device.deviceCategory === filter.deviceCategory
        );
        if (hasFilter) {
            removeDeviceFilter(filter);
        } else {
            addDeviceFilter(filter);
        }
    };

    const isDeviceInFilterArray = (device: device) => {
        return deviceFilters.some(
            (deviceFilter) =>
                deviceFilter.name === device.name &&
                deviceFilter.brand === device.brand &&
                deviceFilter.deviceCategory === device.deviceCategory
        );
    };

    const setDeviceFilter = (filter: device) => {
        setDeviceFilters([filter]);
    };

    const clearDeviceFilters = () => {
        setDeviceFilters([]);
    };

    const [priceFilters, setPriceFilters] = useState<number[][]>([]);

    const addPriceFilter = (filter: number[]) => {
        setPriceFilters([...priceFilters, filter]);
    };

    const removePriceFilter = (filter: number[]) => {
        setPriceFilters(
            priceFilters.filter(
                (priceFilter) =>
                    priceFilter[0] !== filter[0] && priceFilter[1] !== filter[1]
            )
        );
    };

    const togglePriceFilter = (filter: number[]) => {
        if (
            priceFilters.some(
                (priceFilter) =>
                    priceFilter[0] === filter[0] && priceFilter[1] === filter[1]
            )
        ) {
            removePriceFilter(filter);
        } else {
            addPriceFilter(filter);
        }
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
                priceFilters,
                addCategoryFilter,
                removeCategoryFilter,
                toggleCategoryFilter,
                setCategoryFilter,
                clearCategoryFilters,
                addDeviceFilter,
                removeDeviceFilter,
                toggleDeviceFilter,
                setDeviceFilter,
                isDeviceInFilterArray,
                clearDeviceFilters,
                togglePriceFilter,
                clearAllFilters,
            }}
        >
            {children}
        </ActiveFiltersContext.Provider>
    );
};
