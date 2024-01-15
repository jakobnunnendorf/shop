import supabase from '@utils/supabase';
import Image from 'next/image';
import React from 'react';

interface ActiveImageURLObject {
    activeImageURL: string;
}
export default async function BigImage({
    productId,
    activeColorKey,
    activeIndex,
}: {
    productId: UUID;
    activeColorKey?: ColorKey;
    activeIndex?: number;
}) {
    const { data: activeImageURLObject, error } = (await supabase
        .from('products')
        .select(
            `activeImageURL: imageURLObject -> ${
                activeColorKey || 'defaultColor'
            } -> imageURLArray -> ${activeIndex}`
        )
        .eq('id', productId)
        .single()) as SbFetchResponseObject<ActiveImageURLObject>;
    if (!activeImageURLObject) {
        throw new Error(
            `Couldn't fetch active image: ${JSON.stringify(error)}`
        );
    }
    const { activeImageURL } = activeImageURLObject;

    return (
        <Image
            src={activeImageURL}
            fill
            className='object-contain'
            alt={`active product image to be found at ${activeImageURL}`}
        />
    );
}
