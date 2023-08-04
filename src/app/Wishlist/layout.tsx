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
        <section className=' flex h-[calc(100vh-6rem)] w-full'>
            {children}
        </section>
    );
}
