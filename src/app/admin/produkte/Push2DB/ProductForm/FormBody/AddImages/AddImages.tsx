import React, { useEffect } from 'react';
import BigImage from '@components/ProductCase/ExtendedCard/Images/BigImage';
import ThumbnailRow from '@components/ProductCase/ExtendedCard/Images/ThumbnailRow';
import { NewProductContext, NewProductContextType } from '@globalState/NewProductContext';
import ControlBar from './ControlBar';
import Explain from './Explain';
import ImageInput from './ImageInput/ImageInput';
import StatusBar from './StatusBar';


export default function AddImages({
    status,
    setStatus,
}: {
    status: string;
    setStatus: React.Dispatch<
        React.SetStateAction<'showcase' | 'preview' | 'edit' | 'explain'>
    >;
}) {
    const { newProduct, colorInFocus, activeIndex, setActiveIndex } =
        React.useContext(NewProductContext) as NewProductContextType;
    let imageArray: bucketURL<'ProductImageBucket'>[] | string[] = [];
    if (newProduct) {
        if (newProduct.imageURL_object) {
            const activeColor = Object.values(newProduct.imageURL_object).find(
                (color) => {
                    return color && color.color_name === colorInFocus;
                }
            );
            imageArray = activeColor ? activeColor.imageURL_array : [];
        }
    }

    useEffect(() => {
        setStatus('showcase');
    }, [activeIndex]);

    useEffect(() => {
        if (colorInFocus && imageArray.length === 0) {
            setStatus('edit');
        }
    }, [colorInFocus, newProduct]);
    const addImages = (
        <div
            className={`relative col-span-2  ${
                status === 'showcase'
                    ? 'border-3 border-blue-400'
                    : status === 'preview'
                    ? ' border-3 border-yellow-400'
                    : status === 'edit'
                    ? 'border-3 border-orange-400'
                    : 'border-r-2'
            } overflow-hidden rounded-l-3xl lg:col-span-2`}
        >
            {status !== 'explain' && <StatusBar status={status} />}
            {status !== 'explain' && (
                <ControlBar status={status} setStatus={setStatus} />
            )}
            {status === 'explain' ? (
                <Explain setStatus={setStatus} />
            ) : status === 'showcase' ? (
                <BigImage
                    imageURL={imageArray[activeIndex]}
                    isSkeleton={imageArray.length === 0}
                />
            ) : (
                <ImageInput setStatus={setStatus} />
            )}
            {status !== 'explain' && (
                <ThumbnailRow
                    imageURL_array={imageArray}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
            )}
        </div>
    );
    return addImages;
}
