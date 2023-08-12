'use client';

import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from 'react';
import Filter from '@app/shop/FilterBar/components/Filter';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import { eur } from '@lib/helperFunctions';

export type categoryWithTranslation = [productCategory, string];
export type filterHeading = 'Kategorien' | 'Modelle' | 'Preise' | null;

export interface FilterBarContextType {
    expanded: filterHeading;
    setExpanded: Dispatch<SetStateAction<filterHeading>>;
    categoryArray: React.JSX.Element[];
    priceArray: JSX.Element[];
    mobileSlot: JSX.Element | JSX.Element[] | null;
    setMobileSlot: Dispatch<
        React.SetStateAction<JSX.Element[] | JSX.Element | null>
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
    const [expanded, setExpanded] = useState<filterHeading>('Kategorien');

    const {
        categoryFilters,
        toggleCategoryFilter,
        togglePriceFilter,
        priceFilters,
    } = useContext(ActiveFiltersContext) as FilterContextType;

    const [mobileSlot, setMobileSlot] = useState<
        JSX.Element[] | JSX.Element | null
    >(null);

    const priceArray = prices.map((price, index) => {
        const toggleThisPriceFilter = () => {
            togglePriceFilter(price);
        };
        return (
            <Filter
                filter={`${eur(price[0])} - ${eur(price[1])}`}
                active={isPriceFilterActive(price, priceFilters)}
                toggleFilter={toggleThisPriceFilter}
                key={index}
            />
        );
    });
    const categoryArray = categories.map((category, index) => {
        const toggleThisCategory = () => {
            toggleCategoryFilter(category[0]);
        };
        return (
            <Filter
                filter={category[1]}
                active={categoryFilters.includes(category[0])}
                toggleFilter={toggleThisCategory}
                key={index}
            />
        );
    });

    return (
        <FilterBarContext.Provider
            value={{
                expanded,
                setExpanded,
                categoryArray,
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
export const categories: categoryWithTranslation[] = [
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
