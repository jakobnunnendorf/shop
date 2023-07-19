'use client';

import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react';
export interface NewProductContextType {
    newProduct: uploadProductDraft;
    setNewProduct: Dispatch<SetStateAction<uploadProductDraft>>;
    activeColorKey: colorKey;
    setActiveColorKey: Dispatch<SetStateAction<colorKey>>;
    status: productStatus;
    setStatus: Dispatch<SetStateAction<productStatus>>;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    fileStorage: Record<string, File>;
    setFileStorage: Dispatch<SetStateAction<Record<string, File>>>;
    previewURL: ImageURL;
    setPreviewURL: Dispatch<SetStateAction<ImageURL>>;
    selectedFile: File | null;
    setSelectedFile: Dispatch<SetStateAction<File | null>>;
}
type ImageURL = bucketURL<'ProductImageBucket'> | string | null;

export const NewProductContext = createContext<NewProductContextType | null>(
    null
);

export function NewProductContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [newProduct, setNewProduct] =
        useState<uploadProductDraft>(blankNewProduct);
    const [activeColorKey, setActiveColorKey] =
        useState<colorKey>('default_color');
    const [status, setStatus] = useState<productStatus>('explain');
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [fileStorage, setFileStorage] = useState<Record<string, File>>({});
    const [previewURL, setPreviewURL] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    useEffect(() => {
        const hasAllNecessaryData =
            newProduct.title &&
            newProduct.description &&
            newProduct.price &&
            newProduct.stock &&
            newProduct.category &&
            newProduct.compatibleModels &&
            newProduct.compatibleModels.length > 0 &&
            newProduct.imageURL_object.default_color.color_name &&
            newProduct.imageURL_object.default_color.imageURL_array.length > 0;
        if (hasAllNecessaryData) {
            setStatus('ready');
        }
    }, [newProduct]);

    return (
        <NewProductContext.Provider
            value={{
                newProduct,
                setNewProduct,
                activeColorKey,
                setActiveColorKey,
                status,
                setStatus,
                activeIndex,
                setActiveIndex,
                fileStorage,
                setFileStorage,
                previewURL,
                setPreviewURL,
                selectedFile,
                setSelectedFile,
            }}
        >
            {children}
        </NewProductContext.Provider>
    );
}

const blankNewProduct: uploadProductDraft = {
    title: null,
    description: null,
    price: null,
    stock: null,
    category: null,
    compatibleModels: null,
    reviews: null,
    dimensions: null,
    imageURL_object: {
        default_color: {
            color_name: null,
            imageURL_array: [],
            tailwind_color: null,
        },
        color_2: null,
        color_3: null,
        color_4: null,
        color_5: null,
        color_6: null,
    },
};
// const colorToTailwind: Record<productColor, tailwind_productColor> = {
//     schwarz: 'bg-black',
//     weiß: 'bg-white',
//     rot: 'bg-red-500',
//     blau: 'bg-blue-500',
//     grün: 'bg-green-500',
//     gelb: 'bg-yellow-500',
//     lila: 'bg-purple-500',
//     rosa: 'bg-pink-500',
//     orange: 'bg-orange-500',
//     braun: 'bg-[#965a3e]',
//     grau: 'bg-gray-500',
//     silber: 'bg-slate-300',
//     transparent: 'border',
// };