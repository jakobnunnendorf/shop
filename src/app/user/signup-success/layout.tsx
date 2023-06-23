export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className='h-[calc(100vh-10rem)] w-full'>{children}</section>
    );
}
