'use client';

import Link from 'next/link';
import { useContext } from 'react';
import ProductCard from '@components/ProductCard/ProductCard';
import {
    SearchResultsContext,
    SearchResultsContextType,
} from '@globalState/SearchResultsContext';

export default function ShopPage() {
    // const [products, setProducts] = useState<product[]>([]);
    const { searchResults } = useContext(
        SearchResultsContext
    ) as SearchResultsContextType;

    const section = (
        <section className='w-full '>
            <div className='grid py-16 place-content-center lg:hidden'>
                <Link
                    href='/shop/filter'
                    className='px-4 py-2 text-xl font-bold border rounded-full boarder boarder-coastal-blue-10 border-coastal-blue-10 text-coastal-blue-10'
                >
                    Filter auswählen
                </Link>
            </div>
            <ul className='grid w-full grid-cols-2 gap-0 lg:grid-cols-5 lg:gap-4 lg:p-4 '>
                {searchResults?.map((product, index) => {
                    return (
                        <li key={index} className='w-full pb-4'>
                            <ProductCard product={product} grid={true} />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
    return section;
}