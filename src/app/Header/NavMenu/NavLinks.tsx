import Link from "next/link"

export default function NavLinks() {
    return (
        <ul className="absolute right-0 top-16 w-36 rounded-xl bg-slate-700 p-4 text-center text-white">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/shop">Shop</Link>
            </li>
            <li>
                <Link href="/Hilfe">Hilfe</Link>
            </li>
        </ul>
    )
}
