"use client"

import React, { useEffect, useRef, useState } from "react"
import { FiPlus, FiUploadCloud } from "react-icons/fi"
import { v4 as uuidv4 } from "uuid"
import { iProduct } from "src/types/ProductTypes"
import supabase from "utils/supabase"

export default function Push2DB() {
    const ProductCardRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState<boolean>(false)
    const [product, setProduct] = useState<iProduct>({
        id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        created_at: new Date(),
        title: "Example Product",
        imageURL: "https://example.com/product.jpg",
        description: "This is an example product.",
        price: 9.99,
        stock: 10,
        category: "Example Category",
        compatibleBrands: [],
        compatibleModels: [],
        reviews: null,
        dimensions: {
            width: 10,
            height: 20,
            depth: 5,
        },
    })
    const [stringifyForm, setStringifyForm] = useState<string | null>(null)

    const fileInputRef = useRef<HTMLInputElement>(null)

    async function uploadFile(file: File, pathName: string) {
        const { data, error } = await supabase.storage.from("productImageBucket").upload(pathName, file)
        if (error) {
            // Handle error
        } else {
            // Handle success
        }
    }


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const image_uuid = uuidv4()
        
        const file = fileInputRef.current?.files?.[0]
        if (file) {
            uploadFile(file, `image_${formData.get("title")}_${image_uuid}`)
        }

        const { data: urlResponse } = supabase.storage.from("productImageBucket").getPublicUrl("test")
        const image_url = urlResponse.publicUrl

        const newProduct: iProduct = {
            id: image_uuid,
            created_at: new Date(),
            title: formData.get("title") as string,
            imageURL: image_url,
            description: formData.get("description") as string,
            price: parseFloat(formData.get("price") as string),
            stock: parseInt(formData.get("stock") as string),
            category: formData.get("category") as string,
            compatibleBrands: [],
            compatibleModels: [],
            reviews: null,
            dimensions: {
                width: parseInt(formData.get("width") as string),
                height: parseInt(formData.get("height") as string),
                depth: parseInt(formData.get("depth") as string),
            },
        }

    const { data, error } = await supabase
    .from('products')
    .insert([
        newProduct,
    ])
    
    }

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

    const buttonCard = (
        <button className="flex flex-col items-center justify-center h-full border-2 border-green-500 shadow-xl rounded-3xl">
            <FiPlus size={140} />
            <h3>Neu hinzufügen</h3>
        </button>
    )

    const productForm = (
        <>
            <form onSubmit={handleSubmit} className="">
                <span className="flex items-center justify-between px-12 mt-4 ">
                    <h2 className="text-2xl ">Neues Produkt hinzufügen</h2>
                    <button
                        type="submit"
                        className="flex items-center px-2 py-1 space-x-2 border-2 border-green-400 rounded-xl"
                    >
                        <div className="text-green-800">Hochladen</div>
                        <FiUploadCloud className="text-green-800" />
                    </button>
                </span>
                <div className="grid h-full grid-cols-3 grid-rows-6 gap-4 px-8 mt-4 mb-4 ">
                    <div className="grid col-span-2 row-span-4 space-y-2 border-2 place-items-center rounded-3xl">
                        <input
                            ref={fileInputRef}
                            name="imageURL"
                            type="file"
                            id="fileInput"
                            className="text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-cyan-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-500 after:content-none hover:file:bg-violet-100"
                        />
                    </div>
                    <div className="flex flex-col justify-around row-span-6 px-4 overflow-hidden text-center border-2 border-dotted justify-items-centert-1 rounded-3xl">
                        <span className="px-2 space-x-2 text-gray-400 border-2 border-dotted w-fit rounded-3xl">
                            5) Kategorie:
                            <select name="category" placeholder="Kategorie" className="w-fit text-end">
                                <option value="phone case">Handyhülle</option>
                                <option value="screen protector">Panzerglas</option>
                                <option value="charging cable">Ladekabel</option>
                                <option value="charging adapter">Ladestecker</option>
                                <option value="phone">Handyhalterung</option>
                            </select>
                        </span>
                        <div className="flex flex-wrap w-full h-24 border-2 border-dotted rounded-3xl">
                            <input
                                type="text"
                                placeholder="6) + Marke"
                                className="w-24 text-center border-2 border-green-200 rounded-full h-fit"
                            />
                            {product.compatibleBrands.map((brand) => (
                                <div
                                    className="px-2 mx-1 text-xs text-center text-gray-400 border-2 rounded-full h-fit w-fit"
                                    key={brand}
                                >
                                    {brand}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap w-full h-24 border-2 border-dotted rounded-3xl">
                            <input
                                type="text"
                                placeholder="7) + Modell"
                                className="w-24 text-center border-2 border-green-200 rounded-full h-fit"
                            />
                            {product.compatibleBrands.map((brand) => (
                                <div
                                    className="px-2 mx-1 text-xs text-center text-gray-400 border-2 rounded-full h-fit w-fit"
                                    key={brand}
                                >
                                    {brand}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-start w-full px-4 py-2 space-y-1 border-2 border-dotted rounded-3xl">
                            <span className="text-gray-400">8) Maße</span>
                            <span className="text-gray-400">
                                Höhe:{" "}
                                <input type="text" placeholder="" className="w-16 border-2 border-dotted rounded-3xl" />{" "}
                            </span>
                            <span className="text-gray-400">
                                Breite:{" "}
                                <input type="text" placeholder="" className="w-16 border-2 border-dotted rounded-3xl" />{" "}
                            </span>
                            <span className="text-gray-400">
                                Tiefe:{" "}
                                <input type="text" placeholder="" className="w-16 border-2 border-dotted rounded-3xl" />{" "}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-2 row-span-2 p-4 space-y-2 overflow-hidden text-center border-2 border-dotted justify-items-centert-1 rounded-3xl">
                        <span className="grid w-full grid-cols-4 gap-4 ">
                            <input
                                name="title"
                                type="text"
                                placeholder="2) Produkt Titel eingeben"
                                className="h-12 col-span-2 px-2 text-center border-2 border-dotted rounded-3xl"
                            />
                            <input
                                name="price"
                                type="text"
                                placeholder="3) Preis"
                                className="h-12 text-center border-2 border-dotted rounded-3xl"
                            />
                            <input
                                name="stock"
                                type="text"
                                placeholder="4) Anzahl"
                                className="h-12 px-2 text-center border-2 border-dotted rounded-3xl"
                            />
                        </span>
                        <textarea
                            name="description"
                            id=""
                            placeholder="4) Beschreibung"
                            className="h-full text-center border-2 border-dotted rounded-3xl"
                        ></textarea>
                    </div>
                </div>
            </form>
        </>
    )

    const wrapper_with_content = (
        <>
            <article
                ref={ProductCardRef}
                className={`${
                    active
                        ? "fixed left-1/2 top-1/2 z-10 h-[75vh] w-[66.67vw] -translate-x-1/2 -translate-y-1/2 transform overflow-auto bg-white"
                        : "col-span-1"
                } flex flex-col justify-between overflow-hidden rounded-3xl border-2 shadow-xl transition-all duration-500 ease-in-out`}
                onClick={() => setActive(true)}
            >
                {active ? productForm : buttonCard}
            </article>
        </>
    )

    return wrapper_with_content
}
