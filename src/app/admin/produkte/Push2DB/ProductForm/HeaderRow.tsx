'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FiCheck, FiUploadCloud } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function HeaderRow({
    setActive,
}: {
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const supabase = createClientComponentClient();
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
                    imageArray.map(async (previewURL) => {
                        const fileForPreviewURL: File =
                            returnFileForPreviewURL(previewURL);
                        const filePath = `${newProduct.title}/${colorKey}/${productID}`;
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
                console.log('copyNewProduct', copyNewProduct);
            }
        };
        for (const colorKey of ColorsThatAreNotNullAndHaveAnImage) {
            await uploadAndReplaceImageForColor(colorKey);
            console.log('copyNewProduct3', copyNewProduct);
        }
        console.log('copyNewProduct4', copyNewProduct);
        return copyNewProduct;
    };

    const uploadProduct = async () => {
        setLoading(true);
        console.log('uploadProduct');
        console.log(await uploadAndReplaceImage());
        const product = await uploadAndReplaceImage();
        const { error } = await supabase.from('products').insert([product]);
        setLoading(false);
        if (!error) {
            setSuccess(true);
            setTimeout(() => {
                setActive(false);
            }, 2000);
        }
    };

    console.log(loading);

    const headerRow = (
        <div className='mt-2 flex h-20 items-center justify-between px-12 lg:mt-4'>
            <button
                className='gradient mr-2 flex text-3xl text-coastal-blue-7'
                onClick={() => setActive(false)}
            >
                <FiArrowLeft />
                <p className='text-xl'>Zurück</p>
            </button>
            <h2 className='text-2xl '>Neues Produkt hinzufügen</h2>

            <button
                type='button'
                onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                        uploadProduct();
                    }, 10);
                }}
                className='flex items-center space-x-2 rounded-xl border-2 border-green-400 px-2 py-1'
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
