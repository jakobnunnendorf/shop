import ShopGrid from './ShopGrid';
import { Suspense } from 'react';
import MobileFilters from './FilterBar/MobileFilters/MobileFilters';
import { getProducts } from '@lib/helperFunctions';
import { paramString } from '@lib/helperFunctions';
import SkeletonGrid from '@components/skeletons/SkeletonGrid';
import FilterButtons from './FilterBar/FilterButtons';

export default async function ShopPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const products = await getProducts(searchParams);

    const section = (
        <section className='w-full'>
            <MobileFilters
                open={searchParams.filter !== undefined}
                nOfResults={products?.length ? products.length : 0}
                paramString={paramString(searchParams)}
            />
            <FilterButtons searchParams={searchParams} />
            <h1 className='hidden py-16 text-6xl font-bold text-center gradient-text lg:block text-coastal-blue-10'>
                Entdecke unsere Produkte
            </h1>
            <Suspense fallback={<SkeletonGrid numberOfSkeletons={10} />}>
                <ShopGrid products={products || []} />
            </Suspense>
        </section>
    );
    return section;
}
