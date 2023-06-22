
export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'title_string',
    description: 'description_string',
};

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
   
    return <div>user layout {children}</div>;
}
