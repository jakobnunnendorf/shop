import { NewProductContextProvider } from '@globalState/NewProductContext';

export default function ProductManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const layout = (
        <NewProductContextProvider>
            <section>{children}</section>
        </NewProductContextProvider>
    );
    return layout;
}
