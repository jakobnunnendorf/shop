// src/components/ProductCarousel/ProductCarousel.tsx

"use client"
import { useEffect, useState } from "react"
import { ProductContainer, ProductContainerProps } from "./ProductContainer"
import { supabase } from "../../app/api/supabase"
import { FiShoppingCart } from 'react-icons/fi'

export function ProductCarousel({heading}:{heading:string}) {
    const [products, setProducts] = useState<ProductContainerProps[]>([])
    const [activeItem, setActiveItem] = useState(0)
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
        <div className="flex flex-col items-center bg-white">
            <h2 className="m-8 mt-32 text-4xl font-bold text-teal-900 hover:underline">{heading}</h2>
            <div className="carousel-center carousel rounded-box max-w-md space-x-4 p-4">
                {products.map((product, index) => (
                    <div className="carousel-item" key={product.id}>
                        <ProductContainer productData={product} active={index === activeItem} />
                    </div>
                ))}
            </div>
                <button className="btn-accent btn shadow-xl mt-16 space-x-4"><span>Jetzt Kaufen</span><FiShoppingCart/></button>
        </div>
    )
}
