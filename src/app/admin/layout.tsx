import Link from "next/link"

export const metadata = {
    title: "title_string",
    description: "description_string",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const linkedPages = [
        { route: "/admin", title: "Dashboard", key: "admin" },
        { route: "/admin/produkte", title: "Produkte", key: "produkte" },
        { route: "/admin/kunden", title: "Kunden", key: "kunden" },
        { route: "/admin/bestellungen", title: "Bestellungen", key: "bestellungen" },
        { route: "/admin/settings", title: "Settings", key: "settings" },
    ]
    const navigationMenu = (
        <ul className="flex flex-col justify-around h-48 ">
            {linkedPages.map((page) => (
                <Link href={page.route} key={page.route}>
                    <li>{page.title}</li>
                </Link>
            ))}
        </ul>
    )
    const AdminLayout = (
        <section className="flex">
            <aside className="h-screen w-44 space-y-2 bg-slate-400 p-4">
                <h2 className="mb-4 text-center text-xl font-bold text-white ">Admin Panel</h2>
                {navigationMenu}
            </aside>
            <section className="w-full px-16 py-8">{children}</section>
        </section>
    )
    return AdminLayout
}
