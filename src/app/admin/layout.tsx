export const metadata = {
    title: "title_string",
    description: "description_string",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return <section>{children}</section>
}
