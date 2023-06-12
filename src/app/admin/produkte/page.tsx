import { Metadata } from "next"
import ProductCard from "src/components/ProductCard/ProductCard"
import { iProductFetchResponse } from "src/types/fetchResponseTypes"
import { iProduct } from "src/types/ProductTypes"
import { iUserRole } from "src/types/UserTypes"

export const metadata: Metadata = {
    title: "",
    description: "",
}



async function fetchAllProducts() {
    const fetchResponse = await fetch("http://127.0.0.1:3658/m1/367756-0-default/getAllProducts")
    if (!fetchResponse.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data")
    }
    const responseJson = await fetchResponse.json()
    const productFetchResponse = responseJson as iProductFetchResponse
    return productFetchResponse
}

export default async function ProductManagementPage() {
    const fetchResponse: iProductFetchResponse = await fetchAllProducts()
    const productDataArray: iProduct[] = fetchResponse.data
    const ProductManagementPageContent = (
        <section className="space-y-4">
            <h1 className="text-center text-3xl">Produkte verwalten</h1>
            <div className="min-w-32 grid grid-cols-4 gap-4 rounded-3xl border-2 p-4 xl:grid-cols-5">
                {productDataArray.map((product) => {
                    return <ProductCard product={product} role={iUserRole.admin} key={product.id} />
                })}
            </div>
        </section>
    )
    return ProductManagementPageContent
}
