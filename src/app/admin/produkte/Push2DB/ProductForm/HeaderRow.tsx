'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FiCheck, FiUploadCloud } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function HeaderRow() {
    const supabase = createClientComponentClient();
    const router = useRouter();
    const { newProduct, fileStorage, setNewProduct } = React.useContext(
        NewProductContext
    ) as NewProductContextType;

    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const uploadAndReplaceImage = async () => {
        // iterate through each image in the imageURL array of each color
        const copyOfNewProduct = { ...newProduct };

        const productId = uuidv4() as UUID;
        copyOfNewProduct.id = productId;
        const colorKeys = Object.keys(
            copyOfNewProduct.imageURL_object
        ) as colorKey[];
        const ColorsThatAreNotNullAndHaveAnImage = colorKeys.filter((color) => {
            // create array of all keys where the color is not null
            const colorObject = newProduct.imageURL_object[color];
            return (
                colorObject !== null && colorObject.imageURL_array.length > 0
            );
        });

        const uploadAndReplaceImageForColor = async (colorKey: colorKey) => {
            const imageArray =
                newProduct.imageURL_object[colorKey]?.imageURL_array || [];

            let imageIndex = 0;
            while (imageIndex < imageArray.length) {
                const previewURL = imageArray[imageIndex];
                const file = fileStorage[previewURL];
                const colorName =
                    newProduct.imageURL_object[colorKey]?.color_name || '';
                const filePath =
                    `${newProduct.title}-${productId}/${colorName}/${imageIndex}`
                        .replace('ü', 'ue')
                        .replace('ä', 'ae')
                        .replace('ö', 'oe')
                        .replace('ß', 'ss')
                        .replace('Ü', 'Ue')
                        .replace('Ä', 'Ae')
                        .replace('Ö', 'Oe')
                        .replace('ß', 'Ss')
                        .replace(' ', '-');
                await supabase.storage
                    .from('productImageBucket')
                    .upload(filePath, file);
                const { data } = await supabase.storage
                    .from('productImageBucket')
                    .getPublicUrl(filePath);
                const publicUrl = data?.publicUrl;
                imageArray[imageIndex] = publicUrl;
                imageIndex++;
            }
        };
        for (const colorKey of ColorsThatAreNotNullAndHaveAnImage) {
            await uploadAndReplaceImageForColor(colorKey);
        }
        return copyOfNewProduct;
    };

    const uploadProduct = async () => {
        setLoading(true);
        const product = await uploadAndReplaceImage();

        const { error } = await supabase.from('products').insert([product]);
        setLoading(false);
        if (!error) {
            setSuccess(true);
            setTimeout(() => {
                router.push('/admin/produkte');
            }, 2000);
        }
    };

    const headerRow = (
        <div className='flex items-center justify-between h-20 px-4 lg:px-12 lg:mt-4 '>
            <Link
                className='flex items-center mr-2 text-xl gradient text-coastal-blue-7 '
                href='/admin/produkte'
            >
                <FiArrowLeft />
                <p className='text-lg lg:text-xl'>Zurück</p>
            </Link>
            <h2 className='text-2xl '>Neues Produkt hinzufügen</h2>

            <button
                type='button'
                onClick={() => {
                    // setLoading(true);
                    setTimeout(() => {
                        uploadProduct();
                    }, 10);
                }}
                className='flex items-center px-2 py-1 space-x-2 border-2 border-green-400 rounded-xl'
            >
                <div className='text-green-800'>
                    <span className='hidden lg:inline'>Hochladen</span>
                </div>
                <FiUploadCloud className='text-green-800' />
            </button>
            {loading && (
                <div
                    className={`absolute z-50 grid h-48 w-48 border bg-white text-xl font-bold text-green-400 ${
                        success
                            ? 'border-green-400'
                            : loading
                            ? 'border-seafoam-green-7'
                            : ''
                    } left-1/2 top-1/2 place-content-center rounded-lg`}
                >
                    <div className='flex'>
                        <p> Loading...</p>{' '}
                    </div>
                </div>
            )}
            {success && (
                <div
                    className={`absolute z-50 grid h-48 w-48 border bg-white text-xl font-bold text-green-400 ${
                        success
                            ? 'border-green-400'
                            : loading
                            ? 'border-seafoam-green-7'
                            : ''
                    } left-1/2 top-1/2 place-content-center rounded-lg`}
                >
                    {success && (
                        <div className='flex'>
                            <p> success</p>{' '}
                            <FiCheck className='text-2xl text-green-400' />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
    return headerRow;
}

