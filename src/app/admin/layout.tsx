import Link from "next/link"

export const metadata = {
    title: "title_string",
    description: "description_string",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const linkedPages = [
        { route: "/admin",title: "Dashboard", key: "admin"  },
        { route: "/admin/produkte", title: "Produkte", key: "produkte" },
        { route: "/admin/kunden",title: "Kunden", key: "kunden" },
        { route: "/admin/bestellungen", title: "Bestellungen", key: "bestellungen" },
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
            <aside className="h-screen p-4 space-y-2 w-44 bg-slate-400">
                <h2 className="mb-4 text-xl font-bold text-center text-white ">Admin Panel</h2>
                {navigationMenu}
            </aside>
            <section className="w-full py-8 px-16">{children}</section>
        </section>
    )
    return AdminLayout
}
