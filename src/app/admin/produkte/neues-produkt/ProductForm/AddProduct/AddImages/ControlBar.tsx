import React, { Dispatch } from 'react';
import { FiCheck, FiEdit2, FiX } from 'react-icons/fi';
import {
    newProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function ControlBar({
    state,
}: {
    state: UploadProductFormState;
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
    } = React.useContext(newProductContext) as NewProductContextType;

    const confirmImage = () => {
        // if (selectedFile && previewURL) {
        //     setFileStorage({ ...fileStorage, [previewURL]: selectedFile });
        //     const numberOfExistingPictures =
        //         newProduct.imageURLObject[activeColorKey]?.imageURLArray.length;
        //     const selectedColorObject: ProductInColor | null =
        //         newProduct.imageURLObject[activeColorKey];
        //     if (numberOfExistingPictures !== undefined && selectedColorObject) {
        //         if (activeIndex < numberOfExistingPictures) {
        //             selectedColorObject.imageURLArray[activeIndex] = previewURL;
        //         } else {
        //             selectedColorObject.imageURLArray[
        //                 selectedColorObject.imageURLArray.length
        //             ] = previewURL;
        //         }
        //         const newImageURLObject = {
        //             ...newProduct.imageURLObject,
        //             [activeColorKey]: selectedColorObject,
        //         };
        //         setNewProduct({
        //             ...newProduct,
        //             imageURLObject: newImageURLObject,
        //         });
        //     }
        // }
        // setStatus('showcase');
    };
    const editPicture = () => {
        // setSelectedFile(null);
        // setPreviewURL(null);
        // setStatus('edit');
    };
    const backToShowcase = () => {
        // setStatus('showcase');
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
        <div className='z-20 px-2 py-1 space-x-4 rounded-full bg-sandy-beige-1 backdrop-blur-3xl'>
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
    if (
        !newProduct.imageURLObject ||
        !newProduct.imageURLObject[activeColorKey]?.colorName
    ) {
        return null;
    }
    return (
        <div className='absolute z-10 right-6 top-6'>
            {status === 'showcase' || status === 'ready'
                ? duringShowcase
                : status === 'edit'
                ? duringEdit
                : duringPreview}
        </div>
    );
}
