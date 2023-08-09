'use client'

import Link from 'next/link';
import { 
    ActiveFiltersContext,
    FilterContextType,
} from '@globalState/ActiveFiltersContext';
import { useContext } from 'react';

export default function Pagination() {

    const { pageFilter, totalPages, updatePageFilter } = useContext( ActiveFiltersContext ) as FilterContextType;
    const thisTotalPages = Array.from( {length: totalPages}, (_, i) => i + 1); // creates an array of numbers from 1 to totalPages

    const page = (
        <div className='flex justify-center items-center w-full h-16 border-t space-x-2'>
            <Link 
                href={`/shop?page=${pageFilter <= 1 ? 1 : pageFilter - 1}`}
                onClick={ () => { pageFilter <= 1 ? () => {} : updatePageFilter(pageFilter - 1) } } // checks to see if the page is already at the first page
            >
                P
            </Link>
                {thisTotalPages.map( (_, index) => (
                    <Link href={`/shop?page=${index + 1}`} onClick={ () => updatePageFilter(index + 1) } key={index}> 
                        {index + 1} 
                    </Link>
                ))}
            <Link 
                href={`/shop?page=${pageFilter + 1}`} 
                onClick= { ()=> {pageFilter >= totalPages? () => {} : updatePageFilter(pageFilter + 1)} } // checks to prevent page from going over the total number of pages
            >
                N
            </Link>
            <div className='flex justify-center items-center w-16 h-16 border-t'>

            </div>
        </div>
    );

    return page;
};
