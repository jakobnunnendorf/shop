import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import supabase from '@utils/supabase';
import ImageComponent from '@components/ImageComponent';

export default async function CollapsedPicture({
    productId,
}: {
    productId: UUID;
}) {
    const { data, error } = (await supabase
        .from('products')
        .select('imageURLObject, title')
        .eq('id', productId)
        .single()) as SbFetchResponseObject<{
        imageURLObject: ImageURLObject;
        title: string;
    }>;
    if (!data) {
        return (
            <ImageComponent
                style='relative row-span-2 lg:row-span-1'
                href={`/produkte/${productId}`}
                src='/cases/placeholder.png'
                size='full'
            />
        );
    }
    const { imageURLObject, title } = data;

    return (
        <ImageComponent
            style='row-span-2 lg:row-span-1'
            href={`/produkte/${productId}`}
            src={imageURLObject.defaultColor.imageURLArray[0]}
            size='full'
        />
    );
}
