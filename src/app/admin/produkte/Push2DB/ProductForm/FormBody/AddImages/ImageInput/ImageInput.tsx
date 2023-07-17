import React from 'react';
import BigImage from '@components/ProductCase/ExtendedCard/Images/BigImage';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';

export default function ImageInput({
    setStatus,
}: {
    setStatus: React.Dispatch<
        React.SetStateAction<'showcase' | 'preview' | 'edit' | 'explain'>
    >;
}) {
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [previewURL, setPreviewURL] = React.useState<string | null>(null);
    const { setSelectedFile } = React.useContext(
        NewProductContext
    ) as NewProductContextType;

    const chooseImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const url = URL.createObjectURL(file);
            setPreviewURL(url);
        }
        setStatus('preview');
    };

    const imageInput = (
        <div className='flex h-full w-full items-end justify-center bg-gray-100 p-6 '>
            <input
                ref={fileInputRef}
                onChange={chooseImage}
                name='imageURL'
                type='file'
                id='fileInput'
                className='h-full w-full text-xs text-slate-500 file:absolute file:bottom-1/2 file:right-1/2 file:translate-x-1/2 file:translate-y-1/2 file:rounded-full file:border-0 file:bg-cyan-50 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-slate-500 after:content-none hover:file:bg-violet-100 lg:text-sm lg:file:mr-4 lg:file:text-sm'
            />
        </div>
    );

    return previewURL ? <BigImage imageURL={previewURL} /> : imageInput;
}
