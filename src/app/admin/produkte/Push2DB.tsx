"use client"

import React, { useEffect, useRef, useState } from "react"
import { FiPlus, FiUploadCloud } from "react-icons/fi"
import { addProduct_to_database, extract_product_from_form } from '@lib/helperFunctions'

export default function Push2DB() {
    // ------------------------------ STATE ------------------------------

    const [compatible_models_state, changeModels] = useState<string[]>([]);

    const ProductCardRef = useRef<HTMLDivElement>(null); // for click outside
    const [active, setActive] = useState<boolean>(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // ------------------------------ EFFECTS ------------------------------

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log('submitting form');
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const product_from_form: iProduct = extract_product_from_form(
            formData,
            compatible_models_state
        );

        const image_from_file_input = fileInputRef.current?.files?.[0];

        await addProduct_to_database(product_from_form, image_from_file_input);
        changeModels([]);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                ProductCardRef.current &&
                !ProductCardRef.current.contains(event.target as Node)
            ) {
                setActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ProductCardRef]);

    // ------------------------------ RENDER ------------------------------

    const buttonCard = (
        <button className='flex h-full flex-col items-center justify-center rounded-3xl px-4 py-4 lg:py-8'>
            <FiPlus
                className='aspect-square h-16 w-16 lg:h-36 lg:w-36'
                fill='true'
            />
            <h3 className='text-xs lg:text-xl'>Produkt Hinzufügen</h3>
        </button>
    );

    const headerRow = (
        <div className='mt-2 flex h-fit items-center justify-between px-12 lg:mt-4'>
            <h2 className='text-2xl '>Neues Produkt hinzufügen</h2>
            <button
                type='submit'
                className='flex items-center space-x-2 rounded-xl border-2 border-green-400 px-2 py-1'
            >
                <div className='text-green-800'>
                    <span className='hidden lg:inline'>Hochladen</span>
                </div>
                <FiUploadCloud className='text-green-800' />
            </button>
        </div>
    );

    const primary_characteristics = (
        <div className='col-span-3 overflow-hidden rounded-3xl border-2 border-dotted bg-white text-center lg:order-3 lg:col-span-2 lg:row-span-2 lg:p-4'>
            <span className='grid w-full grid-cols-4 lg:gap-4 '>
                <input
                    name='title'
                    type='text'
                    placeholder='2) Titel eingeben'
                    className='col-span-2 h-12 rounded-3xl border-2 border-dotted px-2 text-center'
                />
                <input
                    name='price'
                    type='text'
                    placeholder='3) Preis'
                    className='h-12 rounded-3xl border-2 border-dotted text-center'
                />
                <input
                    name='stock'
                    type='text'
                    placeholder='4) Zahl'
                    className='h-12 rounded-3xl border-2 border-dotted px-2 text-center'
                />
            </span>
            <textarea
                name='description'
                id=''
                placeholder='4) Beschreibung'
                className='w-full rounded-3xl border-2 border-dotted text-center'
            ></textarea>
        </div>
    );

    const secondary_characteristics = (
        <div className='justify-items-centert-1 order-3 col-span-3 row-span-1 flex h-full flex-col justify-around overflow-hidden rounded-3xl border-2 border-dotted bg-white px-4 text-center lg:order-2 lg:col-span-1 lg:row-span-6'>
            <div className='flex h-fit w-full flex-wrap rounded-3xl border-2 border-dotted lg:h-24'>
                <input
                    placeholder='7) + Modell'
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            changeModels([
                                ...compatible_models_state,
                                event.currentTarget.value,
                            ]);
                            event.currentTarget.value = '';
                        }
                    }}
                    type='text'
                    className='h-fit w-24 rounded-full border-2 border-green-200 text-center'
                />
                {compatible_models_state.map((model) => (
                    <div
                        className='mx-1 h-fit w-fit rounded-full border-2 px-2 text-center text-xs text-gray-400'
                        key={model}
                    >
                        {model}
                    </div>
                ))}
            </div>
            <span className='w-fit space-x-2 rounded-3xl border-2 border-dotted px-2 text-gray-400'>
                5) Kategorie:
                <select
                    name='category'
                    placeholder='Kategorie'
                    className='w-fit text-end'
                >
                    <option value='phone case'>Handyhülle</option>
                    <option value='screen protector'>Panzerglas</option>
                    <option value='charging cable'>Ladekabel</option>
                    <option value='charging adapter'>Ladestecker</option>
                    <option value='phone'>Handyhalterung</option>
                </select>
            </span>
        </div>
    );

    const image_input_field = (
        <div className='col-span-3 row-span-3 mt-4 grid place-items-center space-y-2 rounded-3xl border-2 lg:col-span-2 lg:row-span-4'>
            <input
                ref={fileInputRef}
                name='imageURL'
                type='file'
                id='fileInput'
                className='text-xs text-slate-500 file:ml-8 file:rounded-full file:border-0 file:bg-cyan-50 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-slate-500 after:content-none hover:file:bg-violet-100 lg:text-sm lg:file:mr-4 lg:file:text-sm'
            />
        </div>
    );
    const product_form = (
        <form onSubmit={handleSubmit} className=''>
            <h2 className='col-span-2 flex items-center text-center text-2xl '>
                Neues Produkt hinzufügen
            </h2>
            <button
                type='submit'
                className='flex h-fit w-fit items-center space-x-2 justify-self-center rounded-xl border-2 border-green-400 px-2 py-1'
            >
                <div className='text-green-800'>
                    <span className='hidden lg:inline'>Hochladen</span>
                </div>
                <FiUploadCloud className='text-green-800' />
            </button>
            <div className='grid h-full flex-grow grid-cols-3 grid-rows-6'>
                {image_input_field}
                {primary_characteristics}
                {secondary_characteristics}
            </div>
        </form>
    );

    const productForm_frame = (
        <div className='flex h-full flex-col '>{product_form}</div>
    );

    const wrapper_with_content = (
        <>
            <article
                ref={ProductCardRef}
                className={`${
                    active
                        ? 'fixed left-1/2 top-1/2 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl backdrop-filter'
                        : null
                } rounded-3xl border border-green-400 shadow-2xl`}
                onClick={() => setActive(true)}
            >
                {active ? productForm_frame : buttonCard}
            </article>
        </>
    );

    return wrapper_with_content;
}
