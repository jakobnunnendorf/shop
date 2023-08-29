'use client';

import {
    createContext,
    Dispatch,
    useContext,
    useEffect,
    useState,
} from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export type SearchContextType = {
    searchResults: product[];
    setSearchResults: Dispatch<product[]>;
    searchFilter: string;
    setSearchFilter: Dispatch<string>;
};

export const SearchContext = createContext<SearchContextType | null>(null);

export function SearchContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [searchFilter, setSearchFilter] = useState<string>('');
    const [searchResults, setSearchResults] = useState<product[]>([]);

    const supabase = createClientComponentClient();

    useEffect(() => {
        const fetchSearchPreview = async () => {
            let query = supabase.from('products').select('*');
            query = query.ilike('title', `%${searchFilter}%`);
            query = query.ilike('description', `%${searchFilter}%`);

            const { data, error } = (await query) as sb_fetchResponseObject<
                product[]
            >;
            if (error) console.log(error);
            if (data && data.length > searchResults.length) {
                setSearchResults(data);
            }
            console.log(data?.length, searchFilter, data);
        };
        fetchSearchPreview();
    }, [searchFilter, setSearchResults, supabase]);
    return (
        <SearchContext.Provider
            value={{
                searchResults,
                setSearchResults,
                searchFilter,
                setSearchFilter,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}
