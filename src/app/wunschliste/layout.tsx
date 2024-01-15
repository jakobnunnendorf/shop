export const metadata = {
    title: 'titleString',
    description: 'descriptionString',
};

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className=' flex h-[calc(100vh-6rem)] w-full'>
            {children}
        </section>
    );
}
