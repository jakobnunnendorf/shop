"use client"


import React, { useEffect, useRef, useState } from "react"
import { FiPlus } from "react-icons/fi"
import { iProduct } from 'src/types/ProductTypes'
import supabase from "utils/supabase"

export default function Push2DB() {
        const ProductCardRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState<boolean>(false)
    const [product, setProduct] = useState<iProduct>({
  id: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  created_at: new Date(),
  title: 'Example Product',
  imageURL: 'https://example.com/product.jpg',
  description: 'This is an example product.',
  price: 9.99,
  stock: 10,
  category: 'Example Category',
  compatibleBrands: ['Brand A', 'Brand B'],
  compatibleModels: ['Model X', 'Model Y'],
  reviews: null,
  dimensions: {
    width: 10,
    height: 20,
    depth: 5,
  },
});

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
       
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

    const buttonCard = <button className="flex flex-col items-center justify-center h-full border-2 border-green-500 shadow-xl rounded-3xl">
                    <FiPlus size={140} />
                    <h3>Neu hinzufügen</h3>
    </button>
    
    const productForm = <form onSubmit={handleSubmit} className='grid h-full grid-cols-3 grid-rows-6 gap-4 p-8'>
        <div className='grid col-span-2 row-span-4 space-y-2 border-2 rounded-3xl place-items-center'>
<input type="file" id="fileInput" className="text-sm after:content-none text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-slate-500 hover:file:bg-violet-100"/>
        </div>
        <div className='flex flex-col justify-around row-span-6 px-4 overflow-hidden text-center border-2 border-dotted justify-items-centert-1 rounded-3xl'>
            <span className='px-2 space-x-2 text-gray-400 border-2 border-dotted w-fit rounded-3xl'>5) Kategorie:
            <select name="category" placeholder='Kategorie' className='text-end w-fit'>
                <option value="1">Handyhülle</option>
                <option value="2">Panzerglas</option>
                <option value="3">Ladekabel</option>
                <option value="4">Ladestecker</option>
                <option value="5">Handyhalterung</option>
                </select>
                </span>
            <div className="flex flex-wrap w-full h-24 border-2 border-dotted rounded-3xl">
                <input type="text" placeholder='6) + Marke' className='w-24 text-center border-2 border-green-200 rounded-full h-fit' />
                {product.compatibleBrands.map((brand) => <div className='px-2 mx-1 text-xs text-center text-gray-400 border-2 rounded-full w-fit h-fit'>{ brand}</div>)}
            </div>
            <div className="flex flex-wrap w-full h-24 border-2 border-dotted rounded-3xl">
                <input type="text" placeholder='7) + Modell' className='w-24 text-center border-2 border-green-200 rounded-full h-fit' />
                {product.compatibleBrands.map((brand) => <div className='px-2 mx-1 text-xs text-center text-gray-400 border-2 rounded-full w-fit h-fit'>{ brand}</div>)}
            </div>
            <div className='flex flex-col items-start w-full px-4 py-2 space-y-1 border-2 border-dotted rounded-3xl'>
                <span className='text-gray-400'>8) Maße</span>
                <span className='text-gray-400'>Höhe: <input type="text" placeholder='' className='w-16 border-2 border-dotted rounded-3xl' /> </span>
                <span className='text-gray-400'>Breite: <input type="text" placeholder='' className='w-16 border-2 border-dotted rounded-3xl' /> </span>
                <span className='text-gray-400'>Tiefe: <input type="text" placeholder='' className='w-16 border-2 border-dotted rounded-3xl' /> </span>
            </div>
        </div>
        <div className='flex flex-col col-span-2 row-span-2 p-4 space-y-2 overflow-hidden text-center border-2 border-dotted justify-items-centert-1 rounded-3xl'>
            <span className='grid w-full grid-cols-4 gap-4 '><input type="text" placeholder='2) Produkt Titel eingeben' className='h-12 col-span-2 px-2 text-center border-2 border-dotted rounded-3xl'/><input type="text" placeholder='3) Preis' className='h-12 text-center border-2 border-dotted rounded-3xl'/><input type="text" placeholder='4) Anzahl' className='h-12 px-2 text-center border-2 border-dotted rounded-3xl'/></span>
            <textarea name="description" id="" placeholder='4) Beschreibung'  className='h-full text-center border-2 border-dotted rounded-3xl'></textarea>
        </div>
    </form>
    
    const wrapper_with_content = (
        <article
            ref={ProductCardRef}
            className={`${
                active
                    ? "fixed left-1/2 top-1/2 z-10 h-[66.67vh] w-[66.67vw] -translate-x-1/2 -translate-y-1/2 transform overflow-auto bg-white"
                    : "col-span-1"
            } flex flex-col justify-between overflow-hidden rounded-3xl border-2 shadow-xl transition-all duration-500 ease-in-out`}
            onClick={() => setActive(true)}
        >
                    {active && <h2 className='col-span-3 mt-4 ml-8 text-2xl h-fit'>Neues Produkt hinzufügen</h2>}

            {active ? productForm : buttonCard}
        </article>
    )

    return wrapper_with_content
}
