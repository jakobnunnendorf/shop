import { PostgrestResponse } from "@supabase/postgrest-js"
import ProductCard from "src/components/ProductCard/ProductCard"
import supabase from "utils/supabase"
import Push2DB from "./Push2DB"

export const revalidate = 0

export default async function ProductManagementPage() {
    const { data: products }: PostgrestResponse<iProduct> = await supabase.from("products").select()
    const ProductManagementPageContent = (
        <section className="space-y-4">
            <h1 className="text-3xl text-center">Produkte verwalten</h1>
            <div className="grid grid-cols-4 gap-4 p-4 border-2 min-w-32 rounded-3xl xl:grid-cols-5">
                <Push2DB />
                {products && products.length > 0
                    ? products.map((product) => {
                          return (
                              <div key={product.id}>
                                  <ProductCard product={product} />
                              </div>
                          )
                      })
                    : null}
            </div>
        </section>
    )
    return ProductManagementPageContent
}
