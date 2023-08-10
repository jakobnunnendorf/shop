import Image from 'next/image';
import React from 'react';
import ThumbnailRow from '@components/ProductCard/Expanded/Images/ThumbnailRow';
import {
    NewProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
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
        newProduct.imageURL_object[activeColorKey]?.color_name;
    console.log(defaultColorInitialised);
    const bigImageOrSayToAddColor = defaultColorInitialised ? (
        <figure className='absolute z-10 h-full w-full '>
            <Image
                src={imageArray[activeIndex]}
                fill
                className='object-cover'
                alt={imageArray[activeIndex]}
            />
        </figure>
    ) : (
        <div className='absolute grid h-full w-full place-content-center text-xl font-bold'>
            Bitte wähle eine Farbe aus
        </div>
    );

    let borderStyle;
    let content;
    switch (status) {
        case 'showcase':
            borderStyle = 'border-3 border-blue-400';
            content = bigImageOrSayToAddColor;
            break;
        case 'preview':
            borderStyle = 'border-3 border-yellow-400';
            // big image
            break;
        case 'edit':
            borderStyle = 'border-3 border-orange-400';
            // Image input
            break;
        case 'ready':
            borderStyle = 'border-3 border-green-400';
            content = bigImageOrSayToAddColor;
            break;
        default:
            borderStyle = 'border-r-2';
            break;
    }

    const showAddButon = status !== 'explain' && defaultColorInitialised;

    const addImages = (
        <div
            className={`relative lg:col-span-3 ${borderStyle} flex items-end justify-center overflow-hidden rounded-l-3xl`}
        >
            {status !== 'explain' && <StatusBar status={status} />}
            {status !== 'explain' && (
                <ControlBar status={status} setStatus={setStatus} />
            )}
            {status === 'explain' ? (
                <Explain setStatus={setStatus} />
            ) : status === 'showcase' || status === 'ready' ? (
                bigImageOrSayToAddColor
            ) : (
                <ImageInput setStatus={setStatus} />
            )}
            {showAddButon && (
                <ThumbnailRow
                    imageURL_array={imageArray}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    buttonSlot={true}
                    setStatus={setStatus}
                />
            )}
        </div>
    );

    return addImages;
}
