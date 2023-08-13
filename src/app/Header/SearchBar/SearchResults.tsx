'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useContext, useEffect, useState } from 'react';
import {
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';

export default function SearchResults() {
    const supabase = createClientComponentClient();
    const { searchFilter } = useContext(
        ActiveFiltersContext
    ) as FilterContextType;

    const [searchProducts, setSearchProducts] = useState<product[]>([]);

    useEffect(() => {
        if (searchFilter !== '') {
            const getProducts = async () => {
                const getSearchProducts = async () => {
                    const { data: searchResults } = await supabase
                        .from('products')
                        .select('*')
                        .textSearch('title', searchFilter)
                        .limit(3);

                    return searchResults;
                };
<<<<<<< HEAD
                getProducts();
                
            }
    }, [searchFilter]);
=======

                const products = (await getSearchProducts()) as product[];
                setSearchProducts(products);
            };
            getProducts();
        }
    }, [searchFilter, searchProducts, supabase]);
>>>>>>> 17eaf8b731d53dea9244f137c96f7742f66a5d02

    return (
        <div>
            {searchProducts.map((product, index) => (
                <div key={index}>
                    <p>{product.title}</p>
                </div>
            ))}
        </div>
    );
}
