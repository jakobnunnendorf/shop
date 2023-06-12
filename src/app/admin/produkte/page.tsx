import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "",
    description: "",
}

export default function ProductManagementPage() {
    const products = [1, 2, 3, 4, 5, 6]
    const ProductManagementPageContent = (
        <section className="space-y-4">
            <h1 className="text-3xl text-center">Produkte verwalten</h1>
            <div className="flex-col items-center justify-center w-full p-4 border-2 rounded-3xl">
                <table>
                    <thead>
                        <tr className="">
                            <th className=""></th>
                            <th className="px-1 border-2">ID</th>
                            <th className="px-1 border-2">Produktname</th>
                            <th className="px-1 border-2">Beschreibung</th>
                            <th className="px-1 border-2">Preis</th>
                            <th className="px-1 border-2">Kategorie</th>
                            <th className="px-1 border-2">Bestand</th>
                            <th className="px-1 border-2">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-2">
                            <td className="">
                                <Image src='/p2d_logo.png' width={35} height={35} alt=''/>
                            </td>
                            <td className="border-2">a2fc-45bb</td>
                            <td className="border-2">iPhone 13 Hülle schwarz</td>
                            <td className="border-2">Silikon Hülle für optimalen Schutz</td>
                            <td className="border-2">13,49€</td>
                            <td className="border-2">Handyhülle</td>
                            <td className="border-2">37</td>
                            <td className="border-2">...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
    return ProductManagementPageContent
}
