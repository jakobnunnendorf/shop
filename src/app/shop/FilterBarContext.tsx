'use client';

import { createContext, useContext, useState } from 'react';
import Filter from '@app/shop/FilterBar/components/Filter';
import FilterList from '@app/shop/FilterBar/components/FilterList';
// import { modelTree } from '../helperFunctions';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import { eur } from '@lib/helperFunctions';

export type categoryWithTranslation = [productCategory, string];

const categories: categoryWithTranslation[] = [
    ['phone case', 'Handyhüllen'],
    ['screen protector', 'Panzergläser'],
    ['charging cable', 'Ladekabel'],
    ['charging adapter', 'Lade Adapter'],
    ['tablet case', 'Tablet Hülle'],
    ['phone holder', 'Handy Halterung'],
];

const prices = [
    [0, 4.99],
    [5, 9.99],
    [10, 14.99],
    [15, 19.99],
    [20, 29.99],
    [30, 49.99],
    [50, 99.99],
];

export interface FilterBarContextType {
    categoryExpanded: boolean;
    toggleCategoryExpanded: () => void;
    categoryArray: React.JSX.Element[];
    deviceExpanded: boolean;
    toggleDeviceExpanded: () => void;
    priceExpanded: boolean;
    togglePriceExpanded: () => void;
    priceArray: JSX.Element[];
    mobileSlot: JSX.Element | JSX.Element[] | null;
    setMobileSlot: React.Dispatch<
        React.SetStateAction<JSX.Element | JSX.Element[] | null>
    >;
}

export const FilterBarContext = createContext<FilterBarContextType | null>(
    null
);

export function FilterBarContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const {
        categoryFilters,
        toggleCategoryFilter,
        togglePriceFilter,
        priceFilters,
    } = useContext(ActiveFiltersContext) as FilterContextType;

    const [categoryExpanded, setCategoryExpanded] = useState(false);
    const toggleCategoryExpanded = () => {
        setCategoryExpanded(!categoryExpanded);
    };

    const [deviceExpanded, setDeviceExpanded] = useState(false);
    const toggleDeviceExpanded = () => {
        setDeviceExpanded(!deviceExpanded);
    };

    const [priceExpanded, setPriceExpanded] = useState(false);
    const togglePriceExpanded = () => {
        setPriceExpanded(!priceExpanded);
    };

    const [mobileSlot, setMobileSlot] = useState<
        JSX.Element | JSX.Element[] | null
    >(null);

    const categoryFiltersComponents = categories.map((category, index) => {
        const toggleThisCategory = () => {
            toggleCategoryFilter(category[0]);
        };
        return (
            <button className='w-full' onClick={toggleThisCategory} key={index}>
                <Filter
                    filterName={category[1]}
                    active={categoryFilters.includes(category[0])}
                />
            </button>
        );
    });
    // const categoryArray = (
    //     <div className='hidden lg:block'>
    //         <FilterList
    //             expanded={categoryExpanded}
    //             filters={categoryFiltersComponents}
    //         />
    //     </div>
    // );

    const priceArray = prices.map((price, index) => {
        const toggleThisPriceFilter = () => {
            togglePriceFilter(price);
        };
        return (
            <button onClick={toggleThisPriceFilter} key={index}>
                <Filter
                    filterName={`${eur(price[0])} - ${eur(price[1])}`}
                    active={isPriceFilterActive(price, priceFilters)}
                />
            </button>
        );
    });
    const categoryArray = categories.map((category, index) => {
        const toggleThisCategory = () => {
            toggleCategoryFilter(category[0]);
        };
        return (
            <button
                className='rborder'
                onClick={toggleThisCategory}
                key={index}
            >
                <Filter
                    filterName={category[1]}
                    active={categoryFilters.includes(category[0])}
                />
            </button>
        );
    });
    return (
        <FilterBarContext.Provider
            value={{
                categoryExpanded,
                toggleCategoryExpanded,
                categoryArray,
                deviceExpanded,
                toggleDeviceExpanded,
                priceExpanded,
                togglePriceExpanded,
                priceArray,
                mobileSlot,
                setMobileSlot,
            }}
        >
            {children}
        </FilterBarContext.Provider>
    );
}

const isPriceFilterActive = (
    priceFilter: number[],
    priceFilters: number[][]
) => {
    return priceFilters.some(
        (activePriceFilter) =>
            activePriceFilter[0] === priceFilter[0] &&
            activePriceFilter[1] === priceFilter[1]
    );
};
