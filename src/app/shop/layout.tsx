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
        <section className='flex'>
            <FilterBar />
            <section className=' flex w-[calc(100vw-12rem)] justify-center'>
                {children}
            </section>
        </section>
    );
}
