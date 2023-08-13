import React, { Dispatch } from 'react';
import { FiCheck, FiEdit2, FiX } from 'react-icons/fi';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function ControlBar({
    status,
    setStatus,
}: {
    status: string;
    setStatus: Dispatch<React.SetStateAction<productStatus>>;
}) {
    const {
        fileStorage,
        setFileStorage,
        newProduct,
        setNewProduct,
        previewURL,
        setPreviewURL,
        selectedFile,
        setSelectedFile,
        activeIndex,
        activeColorKey,
    } = React.useContext(NewProductContext) as NewProductContextType;

    const confirmImage = () => {
        if (selectedFile && previewURL) {
            setFileStorage({ ...fileStorage, [previewURL]: selectedFile });
            const numberOfExistingPictures =
                newProduct.imageURL_object[activeColorKey]?.imageURL_array
                    .length;
            const selectedColorObject: ProductInColor | null =
                newProduct.imageURL_object[activeColorKey];
            if (numberOfExistingPictures !== undefined && selectedColorObject) {
                if (activeIndex < numberOfExistingPictures) {
                    selectedColorObject.imageURL_array[activeIndex] =
                        previewURL;
                } else {
                    selectedColorObject.imageURL_array[
                        selectedColorObject.imageURL_array.length
                    ] = previewURL;
                }
                const newImageURL_object = {
                    ...newProduct.imageURL_object,
                    [activeColorKey]: selectedColorObject,
                };
                setNewProduct({
                    ...newProduct,
                    imageURL_object: newImageURL_object,
                });
            }
        }
        setStatus('showcase');
    };
    const editPicture = () => {
        setSelectedFile(null);
        setPreviewURL(null);
        setStatus('edit');
    };
    const backToShowcase = () => {
        setStatus('showcase');
    };

    const duringEdit = (
        <button
            onClick={backToShowcase}
            type='button'
            className='px-2 py-1 space-x-4 rounded-full bg-sandy-beige-1 backdrop-blur-3xl'
        >
            <p>cancel</p> <FiX />
        </button>
    );

    const duringPreview = (
        <div className='z-50 px-2 py-1 space-x-4 rounded-full bg-sandy-beige-1 backdrop-blur-3xl'>
            <button type='button' onClick={editPicture}>
                <FiX className='inline-block w-6 h-6 text-red-500' />
            </button>
            <button type='button' onClick={confirmImage}>
                <FiCheck className='inline-block w-6 h-6 text-green-500' />
            </button>
        </div>
    );
    const duringShowcase = (
        <button
            type='button'
            onClick={editPicture}
            className='flex items-center px-2 py-1 space-x-1 rounded-full bg-sandy-beige-1 backdrop-blur-3xl'
        >
            <p>Edit Mode</p>
            <FiEdit2 className=' text-slate-500' />
        </button>
    );
    return (
        newProduct.imageURL_object[activeColorKey]?.color_name && (
            <div className='absolute z-50 right-6 top-6'>
                {status === 'showcase' || status === 'ready'
                    ? duringShowcase
                    : status === 'edit'
                    ? duringEdit
                    : duringPreview}
            </div>
        )
    );
}
