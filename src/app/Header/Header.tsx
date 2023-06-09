import Image from "next/image"
import Link from "next/link"
import { FiShoppingCart } from "react-icons/fi"
import NavMenu from "./NavMenu/NavMenu"
import UserNavMenu from "./UserNavMenu/UserNavMenu"

export default function Header() {
    return (
        <header className="flex h-16 items-center justify-between bg-slate-100 px-4">
            <div className="relative h-12 w-20">
                <Link href="/">
                    <Image src="/p2d_logo.png" alt="Phone2Door Handyzubehör Online shop Logo" fill={true} />
                </Link>
            </div>
            <input
                type="text"
                placeholder="Suche..."
                className="flex h-8 w-32 rounded-xl bg-white text-center text-slate-400 shadow-sm outline-none lg:w-96"
            />
            <div className="flex items-center space-x-4">
                <Link href="/einkaufswagen">
                    <FiShoppingCart size={32} />
                </Link>
                <UserNavMenu />
                <NavMenu />
            </div>
        </header>
    )
}
