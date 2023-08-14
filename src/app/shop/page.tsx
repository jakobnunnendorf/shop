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
        <section>
            <div className='grid place-content-center py-16'>
                <Link
                    href='/shop/filter'
                    className='boarder boarder-coastal-blue-10 rounded-full border border-coastal-blue-10 px-4 py-2 text-xl font-bold text-coastal-blue-10'
                >
                    Filter auswählen
                </Link>
            </div>
            <ul className='grid w-full grid-cols-2 gap-0 lg:w-fit lg:grid-cols-5 lg:gap-4 lg:p-4'>
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
