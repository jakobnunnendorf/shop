'use client';

import { createContext, Dispatch, useState } from 'react';

export type SearchResultsContextType = {
    searchResults: product[];
    setSearchResults: Dispatch<product[]>;
    numberOfResults: number;
};

export const SearchResultsContext =
    createContext<SearchResultsContextType | null>(null);

export function SearchResultsContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [searchResults, setSearchResults] = useState<product[]>([]);

    const numberOfResults = searchResults.length ? searchResults.length : 0;

    return (
        <SearchResultsContext.Provider
            value={{
                searchResults,
                setSearchResults,
                numberOfResults,
            }}
        >
            {children}
        </SearchResultsContext.Provider>
    );
}
