// src/components/ProductCarousel/ProductCarousel.tsx
//NOTE: This is a comment
"use client"
import { useEffect, useState } from "react"
import { FiShoppingCart } from "react-icons/fi"
import { ProductContainer, ProductContainerProps } from "./ProductContainer/ProductContainer"
import { supabase } from "../../api/supabase"

export function ProductCarousel({ heading }: { heading: string }) {
    const [products, setProducts] = useState<ProductContainerProps[]>([])
    const [activeItem] = useState(0)
    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase.from("products").select("*")
            if (error) {
                console.log("Error fetching products: ", error)
            } else {
                setProducts(data as ProductContainerProps[])
            }
        }

        fetchProducts()
    }, [])

    return (
        <div className="flex flex-col items-center">
            <h2 className="m-8 text-4xl font-bold text-teal-900 hover:underline">{heading}</h2>
            <div className="flex w-96 snap-x space-x-4 overflow-x-auto scrollbar-hide">
                {products.map((product, index) => (
                    <div className="carousel-item snap-center" key={product.id}>
                        <ProductContainer productData={product} active={index === activeItem} />
                    </div>
                ))}
            </div>
            <button className="btn mt-4 flex w-40 justify-between border-none bg-teal-500 text-black shadow-xl">
                <span>Jetzt Kaufen</span>
                <FiShoppingCart />
            </button>
        </div>
    )
}
