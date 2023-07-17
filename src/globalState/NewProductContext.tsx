'use client';

import { createContext, useEffect, useState } from 'react';

export interface NewProductContextType {
    productColors: ProductInColor[];
    addProductColor: (color: productColor) => void;
    newCategory: productCategory | null;
    setNewCategory: React.Dispatch<
        React.SetStateAction<productCategory | null>
    >;
    colorInFocus: productColor | null;
    setColorInFocus: React.Dispatch<React.SetStateAction<productColor | null>>;
    newTitle: string | null;
    setNewTitle: React.Dispatch<React.SetStateAction<string | null>>;
    newDescription: string | null;
    setNewDescription: React.Dispatch<React.SetStateAction<string | null>>;
    newPrice: number | null;
    setNewPrice: React.Dispatch<React.SetStateAction<number | null>>;
    newProduct: uploadProductDraft | null;
    setNewProduct: React.Dispatch<React.SetStateAction<uploadProductDraft>>;
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    selectedFile: File | undefined | null;
    setSelectedFile: React.Dispatch<
        React.SetStateAction<File | undefined | null>
    >;
}

export const NewProductContext = createContext<NewProductContextType | null>(
    null
);

export function NewProductContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [productColors, setProductColors] = useState<ProductInColor[]>([]);
    const addProductColor = (color: productColor) => {
        console.log(color, productColors);
        const color_to_tailwind: Record<productColor, tailwind_productColor> = {
            schwarz: 'bg-black',
            weiß: 'bg-white',
            rot: 'bg-red-500',
            blau: 'bg-blue-500',
            grün: 'bg-green-500',
            gelb: 'bg-yellow-500',
            lila: 'bg-purple-500',
            rosa: 'bg-pink-500',
            orange: 'bg-orange-500',
            braun: 'bg-[#965a3e]',
            grau: 'bg-gray-500',
            silber: 'bg-slate-300',
            transparent: 'border',
        };
        const newProductColor: ProductInColor = {
            imageURL_array: [],
            color_name: color,
            tailwind_color: color_to_tailwind[color],
        };
        console.log([...productColors, newProductColor]);
        setProductColors([...productColors, newProductColor]);
    };

    const [newTitle, setNewTitle] = useState<string | null>(null);
    const [newDescription, setNewDescription] = useState<string | null>(null);
    const [newPrice, setNewPrice] = useState<number | null>(null);
    const [newProduct, setNewProduct] = useState<uploadProductDraft>({});
    const [colorInFocus, setColorInFocus] = useState<productColor | null>(null);
    const [newCategory, setNewCategory] = useState<productCategory | null>(
        null
    );
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [selectedFile, setSelectedFile] = useState<File | undefined | null>(
        null
    );

    const constructNewProduct = () => {
        if (newTitle) {
            setNewProduct({ ...newProduct, title: newTitle });
        }
        if (newDescription) {
            setNewProduct({ ...newProduct, description: newDescription });
        }
        if (productColors.length > 0) {
            const imageURL_object: imageURL_object = {
                default_color: {
                    imageURL_array: [],
                    color_name: null,
                    tailwind_color: null,
                },
                color_2: null,
                color_3: null,
                color_4: null,
                color_5: null,
                color_6: null,
            };
            const imageURL_objectKeys = Object.keys(imageURL_object);
            for (let i = 0; i < productColors.length; i++) {
                const color = productColors[i];
                const imageURL_objectKey = imageURL_objectKeys[i];
                imageURL_object[imageURL_objectKey] = color;
            }
            setNewProduct({ ...newProduct, imageURL_object });
        }
        if (newPrice) {
            setNewProduct({ ...newProduct, price: newPrice });
        }
        if (newCategory) {
            setNewProduct({ ...newProduct, category: newCategory });
        }
        console.log(newProduct);
    };

    // const addPreviewImageToProduct = () => { 
    //     if (newProduct.imageURL_object) {
    //         const activeColor = Object.values(newProduct.imageURL_object).find(
    //             (color) => {
    //                 return color && color.color_name === colorInFocus;
    //             }
    //         );
    //         if (activeColor) {
    //             const imageURL_array = activeColor.imageURL_array;
    //             const activeImageURL = imageURL_array[activeIndex];
    //             if (activeImageURL) {
    //                 setNewProduct({ ...newProduct, previewImageURL: activeImageURL });
    //             }
    //         }
    //     }
    // }

    useEffect(() => {
        constructNewProduct();
    }, [
        newTitle,
        newDescription,
        productColors,
        colorInFocus,
        newPrice,
        newCategory,
    ]);

    return (
        <NewProductContext.Provider
            value={{
                productColors,
                addProductColor,
                newTitle,
                setNewTitle,
                newDescription,
                setNewDescription,
                newPrice,
                setNewPrice,
                newProduct,
                setNewProduct,
                colorInFocus,
                setColorInFocus,
                newCategory,
                setNewCategory,
                activeIndex,
                setActiveIndex,
                selectedFile,
                setSelectedFile,
            }}
        >
            {children}
        </NewProductContext.Provider>
    );
}
