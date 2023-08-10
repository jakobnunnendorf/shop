import Image from 'next/image';
import React from 'react';

export default function SmallImage({
    imageURL,
    title,
    expand,
}: {
    expand: () => void;
    imageURL: string | bucketURL<'ProductImageBucket'>;
    title?: string;
}) {
    const smallImage = (
        <figure
            onClick={expand}
            className='relative w-full flex-grow overflow-hidden rounded-t-3xl'
        >
            <Image
                src={imageURL}
                fill={true}
                alt={title ? title : 'product image'}
                className='object-fit'
            />
        </figure>
    );
    return smallImage;
}
