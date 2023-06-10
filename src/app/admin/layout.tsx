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
        <ul className=" flex h-48 flex-col justify-around">
            {linkedPages.map((page) => (
                <Link href={page.route} key={page.route}>
                    <li>{page.title}</li>
                </Link>
            ))}
        </ul>
    )
    const AdminLayout = (
        <section className=" w-42 fixed h-screen space-y-2 bg-slate-400 px-1 py-4">
            <h2 className=" mb-4 text-center text-xl font-bold text-white">Admin Panel</h2>
            {navigationMenu}
        </section>
    )
    return AdminLayout
}
