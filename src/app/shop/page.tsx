import Link from 'next/link';
import ShopGrid from './ShopGrid';
import { productCategories } from '@lib/helperFunctions';
export default function ShopPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    switch (typeof searchParams['category']) {
        case 'string':
            searchParams['category'] = [searchParams['category']];
            break;
        case 'undefined':
            searchParams['category'] = productCategories.map(
                (productCategory) => productCategory[1]
            );
            break;
    }
    const section = (
        <section className='w-full '>
            <div className='grid py-16 place-content-center lg:hidden'>
                <Link
                    href='/shop/filter'
                    className='px-4 py-2 text-xl font-bold border rounded-full border-coastal-blue-10 text-coastal-blue-10'
                >
                    Filter auswählen
                </Link>
            </div>
            <ShopGrid
                categoryFilters={searchParams['category']}
                // priceFilters={searchParams['price']}
            />
        </section>
    );
    return section;
}
