import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Phone2Door.com",
    description: "Hüllen, Panzergläser, screen protector, ladekabel und Zubehör für dein Handy",
}

async function getData() {
    const res = await fetch("http://127.0.0.1:3658/m1/367756-0-default/produkte", { cache: "no-store" })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data")
    }

    return res.json()
}
export default async function HomePage() {
    const data = await getData()
    return (
        <main>
            {data.data.map((produkt) => (
                <p>
                    {JSON.stringify(produkt)}
                    <br /> <br />
                </p>
            ))}
        </main>
    )
}
