import Image from 'next/image';
import React from 'react';

export default function SmallImage({
    imageURL,
    title,
}: {
    imageURL: string | bucketURL<'ProductImageBucket'>;
    title?: string;
}) {
    const smallImage = (
        <figure className='relative w-full flex-grow overflow-hidden rounded-t-3xl'>
            <Image
                src={imageURL}
                fill={true}
                alt={title ? title : 'product image'}
                objectFit='contain'
            />
        </figure>
    );
    return smallImage;
}
