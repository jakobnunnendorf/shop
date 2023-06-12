"use client"

import React, { useEffect, useRef, useState } from "react"

import Image from "next/image"
import { FiShoppingCart } from "react-icons/fi"
import { iProduct } from "src/types/ProductTypes"
import { iUserRole } from "src/types/UserTypes"

export default function ProductCard({ product, role }: { product: iProduct; role: iUserRole }) {
    const [active, setActive] = useState(false)
    const ProductCardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ProductCardRef.current && !ProductCardRef.current.contains(event.target as Node)) {
                setActive(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ProductCardRef])

    const largeContent = (
        <div>
            <img src={product.imageURL} className="cursor-pointer" />
            <article className="p-2 ">
                <h2 className="m-2 line-clamp-2 cursor-pointer text-center">{product.title}</h2>
                <div className="flex items-center justify-around ">
                    <p className="text-center">{product.price.toFixed(2)}€</p>
                    <div className="flex flex-col items-center">
                        <button className="rounded-full border-2 p-2">
                            <FiShoppingCart />
                        </button>
                    </div>
                </div>
                <p className="my-2 px-4 text-end text-xs text-slate-500">{product.stock} übrig</p>
            </article>
        </div>
    )
    const smallContent = (
        <div>
            <img src={product.imageURL} className="cursor-pointer" />
            <article className="p-2 ">
                <h2 className="m-2 line-clamp-2 cursor-pointer text-center">{product.title}</h2>
                <div className="flex items-center justify-around ">
                    <p className="text-center">{product.price.toFixed(2)}€</p>
                    <div className="flex flex-col items-center">
                        <button className="rounded-full border-2 p-2">
                            <FiShoppingCart />
                        </button>
                    </div>
                </div>
                <p className="my-2 px-4 text-end text-xs text-slate-500">{product.stock} übrig</p>
            </article>
        </div>
    )

    const wrapper_with_content = (
        <article
            ref={ProductCardRef}
            className={`${
                active
                    ? "fixed left-1/2 top-1/2 z-10 h-[50vh] w-[66.67vw] -translate-x-1/2 -translate-y-1/2 transform overflow-auto bg-white"
                    : "col-span-1"
            } flex flex-col justify-between overflow-hidden rounded-3xl border-2 shadow-xl transition-all duration-500 ease-in-out`}
            onClick={() => setActive(!active)}
        >
            {active ? largeContent : smallContent}
        </article>
    )
    return wrapper_with_content
}
