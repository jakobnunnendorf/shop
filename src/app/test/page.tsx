"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import supabase from "src/api/supabaseClient"

interface Product {
    id: number
    created_at: string
    title: string
    image: string
    price: number
}

export default function Page() {
    const [fetchError, setFetchError] = useState<string | null>(null)
    const [products, setProducts] = useState<Product[] | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase.from("products").select("*")

            if (error) {
                setFetchError(error.message)
                setProducts(null)
                console.log(error)
            } else if (data) {
                setProducts(data as Product[])
                setFetchError(null)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div>
            {fetchError && <p>{fetchError}</p>}
            {products && (
                <div className='grid grid-cols-3 py-12 gap-8'>
                    {products.map((product, index) => (
                        <div key={index} className='text-center flex flex-col items-center space-y-3'>
                        <Image src={`/cases/iphone_${product.id}.jpeg`} width={40} height={40} alt="test" className='w-48'/>
                        <h2 className='text-xl'>{product.title}</h2>
                        <p className='text-xl'>{product.price}€</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
