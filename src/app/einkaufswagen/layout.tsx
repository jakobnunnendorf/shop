export const metadata = {
    title: "title_string",
    description: "description_string",
}

export default function CartLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className=' grid h-[calc(100vh-6rem)] place-items-center'>
            {children}
        </section>
    );
}
