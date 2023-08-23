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
        const generateUUIDforProduct = () => {
            const productId = uuidv4() as UUID;
            setNewProduct({ ...newProduct, id: productId });
            return productId;
        };
        const productID = generateUUIDforProduct(); // create a new UUID for the product

        const colorKeys = Object.keys(newProduct.imageURL_object) as colorKey[];
        const ColorsThatAreNotNullAndHaveAnImage = colorKeys.filter((color) => {
            // create array of all keys where the color is not null
            const colorObject = newProduct.imageURL_object[color];
            return (
                colorObject !== null && colorObject.imageURL_array.length > 0
            );
        });

        const copyNewProduct = { ...newProduct };

        const uploadAndReplaceImageForColor = async (colorKey: colorKey) => {
            const imageArray =
                newProduct.imageURL_object[colorKey]?.imageURL_array;
            if (imageArray) {
                const returnFileForPreviewURL = (previewURL: string): File => {
                    const fileForPreviewURL = fileStorage[previewURL];
                    return fileForPreviewURL;
                };

                const newImageArray = await Promise.all(
                    // create an array with the new image URLs
                    imageArray.map(async (previewURL, index) => {
                        const fileForPreviewURL: File =
                            returnFileForPreviewURL(previewURL);
                        const filePath =
                            `${newProduct.title}/${colorKey}/${productID}/${index}`
                                .replace('ü', 'ue')
                                .replace('ä', 'ae')
                                .replace('ö', 'oe')
                                .replace('ß', 'ss')
                                .replace('Ü', 'Ue')
                                .replace('Ä', 'Ae')
                                .replace('Ö', 'Oe')
                                .replace('ß', 'Ss');
                        await supabase.storage
                            .from('productImageBucket')
                            .upload(filePath, fileForPreviewURL);
                        const { data } = await supabase.storage
                            .from('productImageBucket')
                            .getPublicUrl(filePath);
                        const publicUrl = data?.publicUrl;
                        return publicUrl;
                    })
                );

                const newImageURLObject = {
                    ...newProduct.imageURL_object,
                    [colorKey]: {
                        ...newProduct.imageURL_object[colorKey],
                        imageURL_array: newImageArray,
                    },
                } as imageURL_object;

                copyNewProduct.imageURL_object = newImageURLObject;
            }
        };
        for (const colorKey of ColorsThatAreNotNullAndHaveAnImage) {
            await uploadAndReplaceImageForColor(colorKey);
        }
        setNewProduct(copyNewProduct);
        return copyNewProduct;
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
            <h2 className='text-2xl text-center '>Neues Produkt hinzufügen</h2>


            <button
                type='button'
                onClick={() => {
                    setLoading(true);
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
