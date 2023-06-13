"use client"


import React, { useEffect, useRef, useState } from "react"
import { FiPlus } from "react-icons/fi"
import supabase from "utils/supabase"

export default function Push2DB() {
        const ProductCardRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState<boolean>(false)
    const [name, setName] = useState<string>("")

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const { data, error } = await supabase.from("names").insert([
            {
                name: name,
            },
        ])
        if (error) {
            console.error(error)
        } else {
            console.log("Product added successfully")
            setName("")
        }
    }

    const buttonCard = <button className="flex flex-col items-center justify-center h-full border-2 border-green-500 shadow-xl rounded-3xl">
                    <FiPlus size={140} />
                    <h3>Neu hinzufügen</h3>
    </button>
    
    const productForm = <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
                <label htmlFor="productName">Name:</label>
                <input type="text" id="productName" value={name} onChange={handleNameChange} />
            </div>
            <button type="submit">Add Name</button>
    </form>
    
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
            {active ? productForm : buttonCard}
        </article>
    )

    return wrapper_with_content
}
