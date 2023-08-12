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

<<<<<<< HEAD
=======
    const { categoryFilters, deviceFilters, priceFilters, searchFilter } =
        useContext(ActiveFiltersContext) as FilterContextType;
    // const categoryFilters = ['screen protector'];

    const supabase = createClientComponentClient(); // moved it outside of the useEffect hook in the hope for a possible optimization
    useEffect(() => {
        const getProducts = async () => {
            const fetchProductsByCategory = async () => {
                if (categoryFilters.length === 0 && searchFilter.length === 0) {
                    const { data: products } = await supabase
                        .from('products')
                        .select('*')
                        .limit(30);

                    return products;
                } else if (
                    categoryFilters.length === 0 &&
                    searchFilter.length !== 0
                ) {
                    // if there's something on the search bar
                    const { data: products } = await supabase
                        .from('products')
                        .select('*')
                        .textSearch("title", searchFilter)
                        .limit(30);
                    console.log(searchFilter);
                    console.log(products);
                    return products;
>>>>>>> 36ad95237bc5f732014447ab14ddba412c46ba57
                } else {
                    const { data: products } = await supabase
                        .from('products')
                        .select('*')
                        .in('category', categoryFilters)
                        .limit(30);

                    return products;
                }
            };
            const products = (await fetchProductsByCategory()) as product[];

            const deviceFilteredProducts = filterProductArrayByDeviceFilters(
                products,
                deviceFilters
            );
            const priceFilteredProducts = filterProductArrayByPriceFilters(
                deviceFilteredProducts,
                priceFilters
            );
            setSearchResults(priceFilteredProducts);
        };
        getProducts();
<<<<<<< HEAD
        debounce(getProducts, 100);

    }, [categoryFilters, deviceFilters, priceFilters, searchFilter]);
=======
    }, [
        categoryFilters,
        deviceFilters,
        priceFilters,
        searchFilter,
        setSearchResults,
        supabase,
    ]);
>>>>>>> 36ad95237bc5f732014447ab14ddba412c46ba57

>>>>>>> 0ba3edf (style(preview&product): fix positioning)
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
