import ProductCard from "src/components/ProductCard/ProductCard"
import { iProductFetchResponse } from "src/types/fetchResponseTypes"
import { iProduct } from "src/types/ProductTypes"
import { iUserRole } from "src/types/UserTypes"
import supabase from "utils/supabase"
import Push2DB from "./Push2DB"

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

export const revalidate = 0

export default async function ProductManagementPage() {
    const fetchResponse: iProductFetchResponse = await fetchAllProducts()
    const { data: names } = await supabase.from("names").select()
    const { data: products } = await supabase.from("products").select()


    const productDataArray: iProduct[] = fetchResponse.data
    const ProductManagementPageContent = (
        <section className="space-y-4">
            <h1 className="text-3xl text-center">Produkte verwalten</h1>
            <div className="grid grid-cols-4 gap-4 p-4 border-2 min-w-32 rounded-3xl xl:grid-cols-5">
                <Push2DB />
                {products.map((product) => {
                    return <ProductCard product={product} role={iUserRole.admin} key={product.id} />
                })}
            </div>
        </section>
    )
    return ProductManagementPageContent
}
