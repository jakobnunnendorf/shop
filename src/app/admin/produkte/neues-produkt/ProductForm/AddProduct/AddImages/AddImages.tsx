import React, { useContext } from 'react';
import ThumbnailRow from '@components/ProductCard/Expanded/Images/ExpandedPicture/ThumbnailRow';
import {
    newProductContext,
    NewProductContextType,
} from '@globalState/NewProductContext';
import ControlBar from './ControlBar';
import ImageInput from './ImageInput/ImageInput';
import StatusBar from './StatusBar';
import ImageComponent from '@components/ImageComponent';

export default function AddImages({
    state,
}: {
    state: UploadProductFormState;
}) {
    const { newProduct, activeColorKey, activeIndex, setActiveIndex } =
        useContext(newProductContext) as NewProductContextType;
    if (
        !newProduct.imageURLObject ||
        !newProduct.imageURLObject[activeColorKey]?.colorName
    ) {
        return (
            <div
                className={`w-full aspect-square lg:h-full relative lg:col-span-3 ${''} flex items-end justify-center overflow-hidden lg:rounded-l-3xl `}
            >
                <StatusBar state={state} />
                <ControlBar state={state} />
                <div className='absolute grid w-full h-full text-xl font-bold place-content-center'>
                    Bitte wähle eine Farbe aus
                </div>
            </div>
        );
    }
    const activeColor = newProduct.imageURLObject[activeColorKey];
    const imageArray: BucketURL<'ProductImages'>[] | string[] =
        activeColor?.imageURLArray && activeColor.imageURLArray.length > 0
            ? activeColor.imageURLArray
            : [];

    let borderStyle;
    /*
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
    }*/

    const addImages = (
        <div
            className={`w-full aspect-square lg:h-full relative lg:col-span-3 ${borderStyle} flex items-end justify-center overflow-hidden lg:rounded-l-3xl `}
        >
            <StatusBar state={state} />
            <ControlBar state={state} />

            {state.message === 'showcase' || state.message === 'ready' ? (
                <ImageComponent
                    src={imageArray[activeIndex]}
                    cover
                    absolute
                    size={'full'}
                />
            ) : (
                <ImageInput />
            )}
            <ThumbnailRow
                imageURLArray={imageArray}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                buttonSlot={true}
                setStatus={setStatus}
            />
        </div>
    );

    return addImages;
}
