import Image from 'next/image';
import React from 'react';

export default function ProductPicture({
    imageURL,
    setExpanded,
}: {
    imageURL: string | bucketURL<'productImageBucket'>;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <figure
            className='relative row-span-2 lg:row-span-1'
            onClick={() => setExpanded(true)}
        >
            <Image
                src={imageURL}
                alt={imageURL}
                fill
                className='object-contain'
            />
        </figure>
    );
}
