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
            <FilterBar />
            <section className=' flex w-full justify-center lg:w-[calc(100vw-11rem)]'>
                {children}
            </section>
        </section>
    );
}
