'use client';

import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react';
export interface NewProductContextType {
    newProduct: UploadProductDraft;
    setNewProduct: Dispatch<SetStateAction<UploadProductDraft>>;
    activeColorKey: ColorKey;
    setActiveColorKey: Dispatch<SetStateAction<ColorKey>>;
    status: ProductStatus;
    setStatus: Dispatch<SetStateAction<ProductStatus>>;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    fileStorage: Record<string, File>;
    setFileStorage: Dispatch<SetStateAction<Record<string, File>>>;
    previewURL: ImageURL;
    setPreviewURL: Dispatch<SetStateAction<ImageURL>>;
    selectedFile: File | null;
    setSelectedFile: Dispatch<SetStateAction<File | null>>;
}
type ImageURL = BucketURL<'ProductImages'> | string | null;

export const newProductContext = createContext<NewProductContextType | null>(
    null
);

export function NewProductContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [newProduct, setNewProduct] =
        useState<UploadProductDraft>(blankNewProduct);
    const [activeColorKey, setActiveColorKey] =
        useState<ColorKey>('defaultColor');
    const [status, setStatus] = useState<ProductStatus>('explain');
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
            newProduct.imageURLObject?.defaultColor.colorName &&
            newProduct.imageURLObject.defaultColor.imageURLArray.length > 0;
        if (hasAllNecessaryData) {
            setStatus('ready');
        }
    }, [newProduct]);

    return (
        <newProductContext.Provider
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
        </newProductContext.Provider>
    );
}

export const blankNewProduct: UploadProductDraft = {};