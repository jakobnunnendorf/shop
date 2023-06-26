import React, { useRef, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import {
    addProduct_to_database,
    extract_product_from_form,
} from '@lib/helperFunctions';
import { useRouter } from 'next/navigation';

export default function ProductForm({ setActive }: { setActive: any }) {
    const router = useRouter();
    const [compatible_models_state, changeModels] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [displayFile, setDisplayFile] = useState<any>(null);

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
        setActive(false);
        router.refresh();
    };

    const primary_characteristics = (
        <div className='col-span-3 overflow-hidden text-center bg-white border-2 border-dotted rounded-3xl lg:order-3 lg:col-span-2 lg:row-span-2 lg:p-4'>
            <span className='grid w-full grid-cols-4 lg:gap-4 '>
                <input
                    name='title'
                    type='text'
                    placeholder='2) Titel eingeben'
                    className='h-12 col-span-2 px-2 text-center border-2 border-dotted rounded-3xl'
                    required
                />
                <input
                    name='price'
                    type='text'
                    placeholder='3) Preis'
                    className='h-12 text-center border-2 border-dotted rounded-3xl'
                    required
                    pattern='^\d{1,2},\d{1,2} €$'
                />
                <input
                    name='stock'
                    type='number'
                    placeholder='4) Zahl'
                    className='h-12 px-2 text-center border-2 border-dotted rounded-3xl'
                    required
                />
            </span>
            <textarea
                name='description'
                id=''
                placeholder='4) Beschreibung'
                className='w-full text-center border-2 border-dotted rounded-3xl'
            ></textarea>
        </div>
    );

    const secondary_characteristics = (
        <div className='flex flex-col justify-start order-3 h-full col-span-3 row-span-1 px-4 pt-8 space-y-8 overflow-hidden text-center bg-white border-2 border-dotted justify-items-centert-1 rounded-3xl lg:order-2 lg:col-span-1 lg:row-span-6'>
            <div className='flex flex-wrap w-full border-2 border-dotted h-fit rounded-3xl lg:h-24'>
                <input
                    placeholder='7) + Modell'
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            console.log('start enter pressed');
                            changeModels([
                                ...compatible_models_state,
                                event.currentTarget.value,
                            ]);
                            event.currentTarget.value = '';
                            console.log('end enter pressed');
                        }
                    }}
                    type='text'
                    className='w-24 text-center border-2 border-green-200 rounded-full h-fit'
                />
                {compatible_models_state.map((model) => (
                    <div
                        className='px-2 mx-1 text-xs text-center text-gray-400 border-2 rounded-full h-fit w-fit'
                        key={model}
                    >
                        {model}
                    </div>
                ))}
            </div>
            <span className='px-2 space-x-2 text-gray-400 border-2 border-dotted w-fit rounded-3xl'>
                5) Kategorie:
                <select
                    name='category'
                    placeholder='Kategorie'
                    className='w-fit text-end'
                    required
                >
                    <option value='phone case'>Handyhülle</option>
                    <option value='screen protector'>Panzerglas</option>
                    <option value='charging cable'>Ladekabel</option>
                    <option value='charging adapter'>Ladestecker</option>
                    <option value='tablet case'>Tablet-Tasche</option>
                    <option value='phone'>Handyhalterung</option>
                </select>
            </span>
        </div>
    );

    const image_input_field = (
        <div className='grid col-span-3 row-span-3 space-y-2 border-2 place-items-center rounded-3xl lg:col-span-2 lg:row-span-4'>
            <input
                ref={fileInputRef}
                onChange={(event) => {
                    setDisplayFile(event.target.files?.[0]);
                }}
                name='imageURL'
                type='file'
                id='fileInput'
                className='text-xs text-slate-500 file:ml-8 file:rounded-full file:border-0 file:bg-cyan-50 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-slate-500 after:content-none hover:file:bg-violet-100 lg:text-sm lg:file:mr-4 lg:file:text-sm'
            />
        </div>
    );

    const headerRow = (
        <div className='flex items-center justify-between h-20 px-12 mt-2 lg:mt-4'>
            <h2 className='text-2xl '>Neues Produkt hinzufügen</h2>
            <button
                type='submit'
                className='flex items-center px-2 py-1 space-x-2 border-2 border-green-400 rounded-xl'
            >
                <div className='text-green-800'>
                    <span className='hidden lg:inline'>Hochladen</span>
                </div>
                <FiUploadCloud className='text-green-800' />
            </button>
        </div>
    );

    const product_form = (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col h-full space-y-4 '
        >
            {headerRow}
            <div className='grid flex-grow grid-cols-3 grid-rows-6 '>
                {image_input_field}
                {primary_characteristics}
                {secondary_characteristics}
            </div>
        </form>
    );

    return product_form;
}
