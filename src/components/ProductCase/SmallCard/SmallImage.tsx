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
            className='relative flex-grow w-full overflow-hidden rounded-t-3xl'
        >
            <Image
                src={imageURL}
                fill={true}
                alt={title ? title : 'product image'}
                objectFit='cover'
            />
        </figure>
    );
    return smallImage;
}
