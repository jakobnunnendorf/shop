import { FilterBarContextProvider } from '@app/shop/FilterBarContext';
import { SearchResultsContextProvider } from '@globalState/SearchResults';
import FilterBar from './FilterBar/FilterBar';

export const metadata = {
    title: 'title_string',
    description: 'description_string',
};

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className='flex flex-col lg:flex-row'>
            <FilterBarContextProvider>
                <FilterBar />
            </FilterBarContextProvider>
            <section className='flex w-full justify-center pt-4 lg:w-[calc(100vw-14rem)]'>
                {children}
            </section>
        </section>
    );
}
