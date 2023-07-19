import React from 'react';
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
    status: productStatus;
    setStatus: React.Dispatch<React.SetStateAction<productStatus>>;
}) {
    const { newProduct, activeColorKey, activeIndex, setActiveIndex } =
        React.useContext(NewProductContext) as NewProductContextType;

    const activeColor = newProduct.imageURL_object[activeColorKey];
    const imageArray: bucketURL<'ProductImageBucket'>[] | string[] =
        activeColor?.imageURL_array && activeColor.imageURL_array.length > 0
            ? activeColor.imageURL_array
            : [];
    const defaultColorInitialised =
        newProduct.imageURL_object[activeColorKey]?.color_name !== null;
    const bigImageOrSayToAddColor = defaultColorInitialised ? (
        <BigImage
            imageURL={imageArray[activeIndex]}
            isSkeleton={imageArray.length === 0}
        />
    ) : (
        <div className='grid w-full h-full place-content-center'>
            {' '}
            Bitte wähle eine Farbe aus
        </div>
    );

    const addImages = (
        <div
            className={`relative col-span-2  ${
                status === 'showcase'
                    ? 'border-3 border-blue-400'
                    : status === 'preview'
                    ? ' border-3 border-yellow-400'
                    : status === 'edit'
                    ? 'border-3 border-orange-400'
                    : status === 'ready'
                    ? 'border-3 border-green-400'
                    : 'border-r-2'
            } overflow-hidden rounded-l-3xl lg:col-span-2`}
        >
            {status !== 'explain' && <StatusBar status={status} />}
            {status !== 'explain' && (
                <ControlBar status={status} setStatus={setStatus} />
            )}
            {status === 'explain' ? (
                <Explain setStatus={setStatus} />
            ) : status === 'showcase' || status === 'ready' ? (
                // <BigImage
                //     imageURL={imageArray[activeIndex]}
                //     isSkeleton={imageArray.length === 0}
                // />
                bigImageOrSayToAddColor
            ) : (
                <ImageInput setStatus={setStatus} />
            )}
            {status !== 'explain' && (
                <ThumbnailRow
                    imageURL_array={imageArray}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    setStatus={setStatus}
                />
            )}
        </div>
    );

    return addImages;
}
