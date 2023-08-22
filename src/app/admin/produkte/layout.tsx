import { NewProductContextProvider } from '@globalState/NewProductContext';

export default function ProductManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const layout = (
        <section className='w-full bborder'>
            <NewProductContextProvider>{children}</NewProductContextProvider>
        </section>
    );
    return layout;
}
