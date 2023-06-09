import Link from "next/link"

export default function UserNavLinks() {
    return (
        <ul className="absolute right-0 top-16 w-36 rounded-xl bg-slate-700 p-4 text-center text-white">
            <li>
                <Link href="/bestellungen">Bestellungen</Link>
            </li>
            <li>
                <Link href="/merkliste">Merkliste</Link>
            </li>
            <li>
                <Link href="/einstellungen">Einstellungen</Link>
            </li>
        </ul>
    )
}
